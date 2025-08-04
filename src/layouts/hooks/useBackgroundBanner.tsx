import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchJson } from '@/api/client';

interface ImageUrl {
  bannerUrl: string;
}

async function getBannerImage(): Promise<ImageUrl> {
  return fetchJson('bannerImage');
}

export function useBackgroundImage() {
  return useSuspenseQuery({
    queryKey: ['bannerImage'],
    queryFn: getBannerImage,
    staleTime: Infinity,
  });
}
