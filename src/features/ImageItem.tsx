import { cn } from '@/lib/utils';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { Blurhash } from 'react-blurhash';

interface ImageItemProps {
  url: string;
  blurhash: string;
  width: number;
  height: number;
}

export function ImageItem({ url, blurhash, width, height }: ImageItemProps) {
  const [loading, setLoading] = useState(true);
  const [wi, setWi] = useState(0);
  const [hi, setHi] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Set up aspect ratio
  const aspectRatio = `${width} / ${height}`;

  // Preload image
  useEffect(() => {
    const image = new Image();
    image.onload = () => setLoading(false);
    image.src = url;
  }, [url]);

  // Measure container
  useLayoutEffect(() => {
    if (ref.current) {
      setWi(ref.current.offsetWidth);
      setHi(ref.current.offsetHeight);
    }
  }, []);

  // Disable scrolling when fullscreen
  useEffect(() => {
    document.body.style.overflow = isFullscreen ? 'hidden' : 'auto';
  }, [isFullscreen]);

  return (
    <>
      {/* Thumbnail */}
      <div
        className="cursor-pointer hover-lift"
        ref={ref}
        style={{
          aspectRatio,
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
        }}
        onClick={() => setIsFullscreen(true)}
      >
        {/* Blurhash placeholder */}
        <div
          className={cn(
            'absolute transition-opacity duration-700 ease-in-out inset-0',
            loading ? 'opacity-100' : 'opacity-0'
          )}
        >
          <Blurhash
            hash={blurhash}
            width={wi || width}
            height={hi || height}
            resolutionX={64}
            resolutionY={64}
            punch={1}
          />
        </div>

        {/* Real image */}
        <img
          src={url}
          className={loading ? 'hidden' : ''}
          alt="Loaded content"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 cursor-zoom-out"
          onClick={() => setIsFullscreen(false)}
        >
          <img src={url} alt="Fullscreen" className="max-w-[90%] max-h-[90%] object-contain" />
        </div>
      )}
    </>
  );
}
