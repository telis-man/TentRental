import { useBackgroundImage } from '@/layouts/hooks/useBackgroundImage';
import { useEffect, useState, type ReactNode } from 'react';

interface BannerContentProps {
  children?: ReactNode;
  setIsVideoLoaded: (loaded: boolean) => void;
}

export default function BackgroundImage({ children, setIsVideoLoaded }: BannerContentProps) {
  const { data } = useBackgroundImage();
  const [isVideoLoaded, setIsVideoLoadedState] = useState(false);

  useEffect(() => {
    setIsVideoLoaded(isVideoLoaded);
  }, [isVideoLoaded]);

  return (
    <div className="relative w-full h-full  overflow-hidden">
      {data?.bannerUrl && (
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoadedState(true)}
          src={data.bannerUrl}
          className={`
                  absolute inset-0 w-full h-full object-cover
            transition-opacity duration-1000 ease-in-out
            ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
      <div className="relative h-full">{children}</div>
      {/* Loader on top */}

      {/* Children text */}
    </div>
  );
}
