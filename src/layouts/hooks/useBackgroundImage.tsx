import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchJson } from '@/api/client';

interface ImageUrl {
  bannerUrl: string;
  blurHash: string;
}

async function getBackgroundImage(): Promise<ImageUrl> {
  return fetchJson('backgroundImage');
}

export function useBackgroundImage() {
  return useSuspenseQuery({
    queryKey: ['backgroundImage'],
    queryFn: getBackgroundImage,
    staleTime: Infinity,
  });
}
