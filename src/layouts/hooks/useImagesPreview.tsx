import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchJson } from '@/api/client';

// interface ImageUrl {
//   generalDimensionImageUrl: string;
//   blurHash: string;
// }
interface ImagesPreview {
  url: string;
  blurHash: string;
}

// full response
interface ImagesPreviewResponse {
  img1: ImagesPreview;
  img2: ImagesPreview;
  img3: ImagesPreview;
}

async function getImagesPreview(): Promise<ImagesPreviewResponse> {
  return fetchJson('imagesPreview/');
}

export function useImagesPreview() {
  return useSuspenseQuery({
    queryKey: ['imagesPreview'],
    queryFn: getImagesPreview,
    staleTime: Infinity,
  });
}
