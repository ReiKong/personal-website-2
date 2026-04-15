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

interface GalleryPhoto {
  id: string | number;
  filename: string;
  title?: string;
  category: string;
  categoryPath: string;
}

export default function PhotoGallery({
  categories,
  viewMode,
}: PhotoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalImage, setModalImage] = useState<ModalImage | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const syncCategoryFromHash = () => {
      const hash = window.location.hash.slice(1);
      const isValidCategory = categories.some((category) => category.id === hash);

      setSelectedCategory(hash && isValidCategory ? hash : "all");
    };

    syncCategoryFromHash();
    window.addEventListener("hashchange", syncCategoryFromHash);

    return () => window.removeEventListener("hashchange", syncCategoryFromHash);
  }, [categories]);

  const handleCategoryChange = (categoryId: string) => {
    const newUrl =
      categoryId === "all"
        ? window.location.pathname
        : `${window.location.pathname}#${categoryId}`;

    window.history.replaceState(null, "", newUrl);
    setSelectedCategory(categoryId);
  };

  const handleImageLoad = (imageKey: string) => {
    setLoadedImages((prev) =>
      prev[imageKey] ? prev : { ...prev, [imageKey]: true }
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

  const filteredPhotos: GalleryPhoto[] =
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

  const getImageKey = (photo: { category: string; id: string | number }) =>
    `${photo.category}-${photo.id}`;

  const renderImage = (
    photo: GalleryPhoto,
    extraClassName = "",
    hoverOverlay = false
  ) => {
    const imageKey = getImageKey(photo);
    const isLoaded = loadedImages[imageKey];

    return (
      <div
        className={`group relative cursor-pointer overflow-hidden ${extraClassName}`}
        onClick={() =>
          openModal(
            photo.categoryPath,
            photo.filename,
            photo.title || photo.filename
          )
        }
      >
        {!isLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-800" />
        )}

        <Image
          src={`${photo.categoryPath}/${photo.filename}`}
          alt={photo.title || photo.filename}
          width={400}
          height={300}
          loading="lazy"
          quality={75}
          onLoadingComplete={() => handleImageLoad(imageKey)}
          className={`w-full object-cover transition-all duration-700 ${
            isLoaded
              ? "blur-0 scale-100 opacity-100"
              : "blur-2xl scale-105 opacity-60"
          } ${hoverOverlay ? "group-hover:scale-105" : "hover:scale-105"}`}
          style={{ height: "auto" }}
        />

        {hoverOverlay && (
          <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-30" />
        )}
      </div>
    );
  };

  if (viewMode === "list") {
    return (
      <div className="space-y-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="border border-gray-200 p-6 dark:border-gray-700"
          >
            <h3 className="mb-2 text-xl font-semibold">{category.name}</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              {category.description}
            </p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {category.photos.map((photo) =>
                renderImage(
                  {
                    ...photo,
                    categoryPath: category.path,
                  },
                  "relative aspect-square rounded-lg transition-transform duration-300"
                )
              )}
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
          <div key={getImageKey(photo)} className="break-inside-avoid">
            <div className="mb-2">
              {renderImage(photo, "", true)}
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