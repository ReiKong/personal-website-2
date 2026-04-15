"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { PhotoCategory, ViewMode } from "../../data/photography";
import ImageModal from "./ImageModal";

interface PhotoGalleryProps {
  categories: PhotoCategory[];
  viewMode: ViewMode;
}

interface ModalImage {
  src: string;
  alt: string;
}

export default function PhotoGallery({ categories, viewMode }: PhotoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalImage, setModalImage] = useState<ModalImage | null>(null);

  useEffect(() => {
    const syncCategoryFromHash = () => {
      const hash = window.location.hash.slice(1);
      setSelectedCategory(
        hash && categories.some((category) => category.id === hash) ? hash : "all"
      );
    };

    syncCategoryFromHash();
    window.addEventListener("hashchange", syncCategoryFromHash);

    return () => window.removeEventListener("hashchange", syncCategoryFromHash);
  }, [categories]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    window.history.replaceState(
      null,
      "",
      categoryId === "all" ? window.location.pathname : `#${categoryId}`
    );
  };

  const openModal = (categoryPath: string, filename: string, alt: string) => {
    setModalImage({
      src: `${categoryPath}/${filename}`,
      alt,
    });
  };

  const selectedCategoryData = useMemo(
    () => categories.find((category) => category.id === selectedCategory),
    [categories, selectedCategory]
  );

  const filteredPhotos =
    selectedCategory === "all"
      ? categories.flatMap((category) =>
          category.photos.map((photo) => ({
            ...photo,
            categoryPath: category.path,
          }))
        )
      : selectedCategoryData?.photos.map((photo) => ({
          ...photo,
          categoryPath: selectedCategoryData.path,
        })) ?? [];

  const getButtonClass = (isActive: boolean) =>
    `px-[6px] pt-[6px] pb-[4px] text-xs font-light uppercase transition-colors ${
      isActive
        ? "text-primary bg-secondary1 hover:bg-secondary1 hover:text-primary"
        : "text-secondary1 bg-primary hover:bg-secondary1 hover:text-primary"
    }`;

  if (viewMode === "list") {
    return (
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.id} className="border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="mb-2 text-xl font-semibold">{category.name}</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">{category.description}</p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {category.photos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative aspect-square cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
                  onClick={() =>
                    openModal(
                      category.path,
                      photo.filename,
                      photo.title || photo.filename
                    )
                  }
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
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryChange("all")}
          className={getButtonClass(selectedCategory === "all")}
        >
          All Photos
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={getButtonClass(selectedCategory === category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-2 space-y-2 md:columns-3 lg:columns-4">
        {filteredPhotos.map((photo) => (
          <div key={`${photo.category}-${photo.id}`} className="break-inside-avoid">
            <div
              className="group relative mb-2 cursor-pointer overflow-hidden"
              onClick={() =>
                openModal(
                  photo.categoryPath,
                  photo.filename,
                  photo.title || photo.filename
                )
              }
            >
              <Image
                src={`${photo.categoryPath}/${photo.filename}`}
                alt={photo.title || photo.filename}
                width={400}
                height={300}
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
                style={{ height: "auto" }}
                loading="lazy"
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A8A"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-30" />
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={modalImage !== null}
        onClose={() => setModalImage(null)}
        src={modalImage?.src || ""}
        alt={modalImage?.alt || ""}
      />
    </div>
  );
}