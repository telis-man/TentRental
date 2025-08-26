import { BlurhashCanvas } from 'react-blurhash';
import React from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  blurHash?: string;
  wrapperClassName?: string;
  imgClassName?: string;
}

export default function LazyImage({
  src,
  blurHash,
  alt,
  wrapperClassName = '',
  imgClassName = '',
  className, // in case someone passes className (alias to imgClassName)
  ...imgProps
}: LazyImageProps) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${wrapperClassName}`}>
      {/* Blurhash shown until image is loaded */}
      {!loaded && blurHash && (
        <BlurhashCanvas
          hash={blurHash}
          punch={1}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Real image */}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName || className || ''}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        decoding="async"
        {...imgProps}
      />
    </div>
  );
}
