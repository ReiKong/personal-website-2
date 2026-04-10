"use client";

import Image from 'next/image';
import { useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { Photo, PhotoCategory, ViewMode } from '../../data/photography';
import ImageModal from './ImageModal';

interface PhotoGalleryProps {
  categories: PhotoCategory[];
  viewMode: ViewMode;
}

export default function PhotoGallery({ categories, viewMode }: PhotoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const filteredPhotos = selectedCategory === 'all' 
    ? categories.flatMap(cat => cat.photos.map(photo => ({ ...photo, categoryName: cat.name })))
    : categories
        .find(cat => cat.id === selectedCategory)
        ?.photos.map(photo => ({ ...photo, categoryName: categories.find(c => c.id === selectedCategory)?.name })) || [];

  if (viewMode === 'list') {
    return (
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.id} className="border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.photos.map((photo) => (
                <div 
                  key={photo.id} 
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setModalImage({
                    src: `${category.path}/${photo.filename}`,
                    alt: photo.title || photo.filename
                  })}
                >
                  <Image
                    src={`${category.path}/${photo.filename}`}
                    alt={photo.title || photo.filename}
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A8A"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'text-primary bg-secondary1 hover:bg-secondary1 hover:text-primary'
              : 'text-secondary1 bg-primary hover:bg-secondary1 hover:text-primary'
          }`}
        >
          All Photos
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'text-primary bg-secondary1 hover:bg-secondary1 hover:text-primary'
                : 'text-secondary1 bg-primary hover:bg-secondary1 hover:text-primary'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
        {filteredPhotos.map((photo) => {
          const category = categories.find(cat => cat.id === photo.category);
          return (
            <div key={`${photo.category}-${photo.id}`} className="break-inside-avoid">
              <div 
                className="relative overflow-hidden mb-2 group cursor-pointer"
                onClick={() => setModalImage({
                  src: `${category?.path}/${photo.filename}`,
                  alt: photo.title || photo.filename
                })}
              >
                <Image
                  src={`${category?.path}/${photo.filename}`}
                  alt={photo.title || photo.filename}
                  width={400}
                  height={300}
                  className="w-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{ height: 'auto' }}
                  loading="lazy"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A8A"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
              </div>
            </div>
          );
        })}
      </div>
      
      <ImageModal
        isOpen={modalImage !== null}
        onClose={() => setModalImage(null)}
        src={modalImage?.src || ''}
        alt={modalImage?.alt || ''}
      />
    </div>
  );
}
