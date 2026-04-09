import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface Photo {
  id: string;
  filename: string;
  category: string;
  title?: string;
  description?: string;
}

interface PhotoCategory {
  id: string;
  name: string;
  description: string;
  path: string;
  photos: Photo[];
}

const PHOTO_DIR = path.join(process.cwd(), 'public', 'images', 'photography');

const categoryConfig = [
  {
    id: 'live-music',
    name: 'Live Music',
    description: 'Capturing the energy and emotion of live performances',
    folderName: 'live music'
  },
  {
    id: 'travel',
    name: 'Travel',
    description: 'Exploring cultures and landscapes around the world',
    folderName: 'travel'
  },
  {
    id: 'food',
    name: 'Food',
    description: 'Culinary artistry and food photography',
    folderName: 'food'
  },
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'Professional headshots and corporate events',
    folderName: 'corporate'
  },
  {
    id: 'nightlife',
    name: 'Nightlife',
    description: 'Urban scenes and nightlife photography',
    folderName: 'nightlife'
  }
];

function getPhotoFiles(folderName: string): string[] {
  const folderPath = path.join(PHOTO_DIR, folderName);
  
  if (!fs.existsSync(folderPath)) {
    return [];
  }

  try {
    const files = fs.readdirSync(folderPath);
    return files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'].includes(ext);
      })
      .sort();
  } catch (error) {
    console.error(`Error reading directory ${folderPath}:`, error);
    return [];
  }
}

function createPhotoFromFile(filename: string, category: string): Photo {
  const id = path.parse(filename).name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  return {
    id,
    filename,
    category,
    title: path.parse(filename).name.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
  };
}

export async function GET() {
  try {
    const categories = categoryConfig.map(config => {
      const photoFiles = getPhotoFiles(config.folderName);
      const photos = photoFiles.map(file => createPhotoFromFile(file, config.id));
      
      return {
        id: config.id,
        name: config.name,
        description: config.description,
        path: `/images/photography/${config.folderName}`,
        photos
      };
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error loading photo categories:', error);
    return NextResponse.json({ error: 'Failed to load photos' }, { status: 500 });
  }
}
