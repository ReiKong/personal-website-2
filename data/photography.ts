export interface Photo {
  id: string;
  filename: string;
  category: string;
  title?: string;
  description?: string;
}

export interface PhotoCategory {
  id: string;
  name: string;
  description: string;
  path: string;
  photos: Photo[];
}

export type ViewMode = 'grid' | 'list';
