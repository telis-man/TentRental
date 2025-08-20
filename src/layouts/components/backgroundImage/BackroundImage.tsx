import { useBackgroundImage } from '@/layouts/hooks/useBackgroundImage';
import { useEffect, useState, type ReactNode } from 'react';

interface BannerContentProps {
  children?: ReactNode;
}

export default function BackgroundImage({ children }: BannerContentProps) {
  const { data } = useBackgroundImage();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!data.bannerUrl) return;
    const img = new Image();
    img.src = data.bannerUrl;
    img.onload = () => setLoaded(true);
  }, [data.bannerUrl]);

  return (
    <div className="relative w-full h-[calc(100vh-var(--navbar-height))] overflow-hidden">
      {/* Banner image */}
      <img
        src={data.bannerUrl}
        alt="Banner"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
          loaded ? 'blur-0 opacity-100' : 'blur-xl opacity-50 '
        }`}
      />

      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Banner text */}
      <div className="relative h-full">{children}</div>
    </div>
  );
}
