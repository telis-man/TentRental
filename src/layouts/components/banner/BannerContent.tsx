import { useSuspenseQuery } from '@tanstack/react-query';

export default function BannerContent() {
  const API_ENDPOINT_URL = 'http://localhost:3000/bannerImage';

  interface responseType {
    bannerUrl: string;
  }

  const fetchBanner = async (): Promise<responseType> => {
    const res = await fetch(API_ENDPOINT_URL);
    if (!res.ok) throw new Error('Failed to fetch settings');
    return res.json();
  };

  const { data } = useSuspenseQuery({
    queryKey: ['banner'],
    queryFn: fetchBanner,
  });
  return (
    <div
      className="w-screen overflow-hidden fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat pointer-events-none"
      style={{ backgroundImage: `url(${data.bannerUrl})` }}
    />
  );
}
