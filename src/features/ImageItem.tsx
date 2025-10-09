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
  const ref = useRef<HTMLDivElement | null>(null);

  // Set up aspect ratio (string format for CSS)
  const aspectRatio = `${width} / ${height}`;

  // Handle image loading
  useEffect(() => {
    const image = new Image();
    image.onload = () => setLoading(false);
    image.src = url;
  }, [url]);

  // Measure container dimensions after mount
  useLayoutEffect(() => {
    if (ref.current) {
      setWi(ref.current.offsetWidth);
      setHi(ref.current.offsetHeight);
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{
        aspectRatio,
        color: 'blue',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {loading ? (
        <Blurhash
          hash={blurhash}
          width={wi || width}
          height={hi || height}
          resolutionX={64}
          resolutionY={64}
          punch={1}
        />
      ) : (
        <img
          src={url}
          alt="Loaded content"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      )}
    </div>
  );
}
