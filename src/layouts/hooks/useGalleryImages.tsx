import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchJson } from '@/api/client';

interface Image {
    url: string;
    hash: string;
    width: string;
    height: string;
}

// full response
type GalleryImagesResponse = Image[]

async function getGalleryImages(): Promise<GalleryImagesResponse> {
    return fetchJson('gallery/');
}

export function useGalleryImages() {
    return useSuspenseQuery({
        queryKey: ['imagesPreview'],
        queryFn: getGalleryImages,
        staleTime: Infinity,
    });
}
