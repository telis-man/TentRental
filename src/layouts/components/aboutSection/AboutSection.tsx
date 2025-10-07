import { useInView } from '@/layouts/hooks/useInView';
import { useTranslation } from 'react-i18next';
import { useAboutImage } from '@/layouts/hooks/useAboutImage';
import { BlurhashCanvas } from 'react-blurhash';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function AboutSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { data } = useAboutImage();
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mt-26 h-full grid grid-cols-5 w-full items-center " ref={ref}>
      {/* Left Section */}
      <div className="relative flex flex-col justify-center items-start w-3/5 mx-auto col-span-2">
        <h1
          className={`text-8xl font-extrabold z-5 ${inView && 'text-reveal [animation-delay:0.4s!important]'}`}
        >
          {t('about')}
        </h1>
        <p
          className={` text-4xl font-semibold text-justify ${inView && 'text-reveal [animation-delay:0.8s!important]'}`}
        >
          {t('about_description')}
        </p>
        <div
          className={cn(
            'bg-yellow-400 h-14  w-48 absolute top-8 left-4 z-4',
            inView && 'animate-side-reveal [animation-delay:1.2s!important]'
          )}
        ></div>
      </div>

      {/* Right Section */}

      {/* <div className="flex items-center justify-start">
        {inView ? (
          <img className="w-5/6" src={data.imageUrl} alt="About us" />
        ) : (
          <BlurhashCanvas hash={data.blurHash} punch={1} />
        )}
      </div> */}

      <div className="relative flex items-center justify-start p-8 col-span-3 h-full w-4/5 object-cover overflow-hidden">
        {!loaded && (
          <BlurhashCanvas
            hash={data.blurHash}
            punch={1}
            className="absolute top-0 left-0 w-full h-full"
          />
        )}
        {inView && (
          <img
            className={`w-full transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            src={data.imageUrl}
            alt="About us"
            onLoad={() => setLoaded(true)}
          />
        )}
      </div>
    </div>
  );
}
