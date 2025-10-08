// import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { t } from 'i18next';

const Logo = () => {
  // const API_ENDPOINT_URL = 'http://localhost:3000/logoImage';

  // interface responseType {
  //   logoUrl: string;
  // }

  // const fetchLogo = async (): Promise<responseType> => {
  //   const res = await fetch(API_ENDPOINT_URL);
  //   if (!res.ok) throw new Error('Failed to fetch settings');
  //   return res.json();
  // };

  // const { data } = useSuspenseQuery({
  //   queryKey: ['logo'],
  //   queryFn: fetchLogo,
  // });

  return (
    // <Link to="/" className="[&.active]:font-bold">
    //   <img src={data.logoUrl} alt="Galampis logo" className="h-15" />
    // </Link>
    <Link to="/" className="[&.active]:font-bold">
      <h1 className="text-4xl font-extrabold tracking-wide">{t('glampis')}</h1>
    </Link>
  );
};

export default Logo;
