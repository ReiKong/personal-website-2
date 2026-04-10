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
      <div className="flex flex-row align-middle items-center border-t border-t-secondary1 border-b border-b-secondary1 mb-8">
        <div 
          className={`flex flex-row align-middle border-r border-r-secondary1 cursor-pointer ${
            selectedCategory === 'all' 
              ? 'text-primary bg-secondary1 hover:bg-secondary1 hover:text-primary'
              : 'text-secondary1 bg-primary hover:bg-secondary1 hover:text-primary'
          } pt-2 pb-1 pr-2 px-1 gap-x-2 transition duration-200`}
          onClick={() => setSelectedCategory('all')}
        >
          {/* <BsFillGridFill className="text-[20px]" /> */}
          All Photos
        </div>
        {categories.map((category, index) => (
          <span 
            key={category.id}
            className={`flex flex-row align-middle cursor-pointer ${
              selectedCategory === category.id
                ? 'text-primary bg-secondary1 hover:bg-secondary1 hover:text-primary'
                : 'text-secondary1 bg-primary hover:bg-secondary1 hover:text-primary'
            } ${index < categories.length - 1 ? 'border-r border-r-secondary1' : ''} pt-2 pb-1 pr-2 px-1 gap-x-2 transition duration-200`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </span>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
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
