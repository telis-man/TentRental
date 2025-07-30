import { useSuspenseQuery } from '@tanstack/react-query';

const Logo = () => {
  const API_ENDPOINT_URL = 'http://localhost:3000/logoImage';

  interface responseType {
    logoUrl: string;
  }

  const fetchLogo = async (): Promise<responseType> => {
    const res = await fetch(API_ENDPOINT_URL);
    if (!res.ok) throw new Error('Failed to fetch settings');
    return res.json();
  };

  const { data } = useSuspenseQuery({
    queryKey: ['logo'],
    queryFn: fetchLogo,
  });

  return <img src={data.logoUrl} alt="Galampis logo" className="h-15" />;
};

export default Logo;
