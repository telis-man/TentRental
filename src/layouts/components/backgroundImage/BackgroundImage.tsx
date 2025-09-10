import { useBackgroundImage } from '@/layouts/hooks/useBackgroundImage';
import { type ReactNode } from 'react';

interface BannerContentProps {
  children?: ReactNode;
}

export default function BackgroundImage({ children }: BannerContentProps) {
  const { data } = useBackgroundImage();

  return (
    <div className="relative w-full h-full  overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        src={data.bannerUrl}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Children text */}
      <div className="relative h-full">{children}</div>
    </div>
  );
}
