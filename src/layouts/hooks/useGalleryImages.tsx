import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchJson } from '@/api/client';

interface ImageItem {
  url: string;
  hash: string;
  width: number;
  height: number;
}

interface GalleryImagesResponse {
  images: ImageItem[];
}

async function getGalleryImages(): Promise<ImageItem[]> {
  const data: GalleryImagesResponse = await fetchJson('gallery');
  return data.images;
}

export function useGalleryImages() {
  return useSuspenseQuery({
    queryKey: ['galleryImages'],
    queryFn: getGalleryImages,
    staleTime: Infinity,
  });
}
