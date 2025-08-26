import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchJson } from '@/api/client';

// interface ImageUrl {
//   generalDimensionImageUrl: string;
//   blurHash: string;
// }
interface DimensionImage {
  url: string;
  blurHash: string;
}

// full response
interface DimensionsImagesResponse {
  generalDimension: DimensionImage;
  footprintSleepingbag: DimensionImage;
  footprintBeds: DimensionImage;
}

async function getDimensionsImages(): Promise<DimensionsImagesResponse> {
  return fetchJson('dimensionsImages/');
}

export function useDimensionsImages() {
  return useSuspenseQuery({
    queryKey: ['dimensionsImages'],
    queryFn: getDimensionsImages,
    staleTime: Infinity,
  });
}
