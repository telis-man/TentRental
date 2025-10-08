import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchJson } from '@/api/client';

interface ImageUrl {
  imageUrl: string;
  blurHash: string;
}

async function getImage(): Promise<ImageUrl> {
  return fetchJson('aboutImage');
}

export function useAboutImage() {
  return useSuspenseQuery({
    queryKey: ['aboutImage'],
    queryFn: getImage,
    staleTime: Infinity,
  });
}
