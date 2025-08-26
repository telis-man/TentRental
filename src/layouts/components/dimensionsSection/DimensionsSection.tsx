// export default function DimensionsSection() {
//   return <div>DimensionsSection</div>;
// }
import { useInView } from '@/layouts/hooks/useInView';
// import { useTranslation } from 'react-i18next';
import { BlurhashCanvas } from 'react-blurhash';
import { useState } from 'react';
import { useDimensionsImages } from '@/layouts/hooks/useDimensionsImages';

export default function DimensionsSection() {
  // const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { data } = useDimensionsImages();
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="h-full grid grid-cols-2 w-full items-center p-24" ref={ref}>
      {/* Left Section */}
      {/* Right Section */}

      {/* <div className="flex items-center justify-start">
        {inView ? (
          <img className="w-5/6" src={data.imageUrl} alt="About us" />
        ) : (
          <BlurhashCanvas hash={data.blurHash} punch={1} />
        )}
      </div> */}

      <div className="relative flex items-center justify-start">
        {!loaded && (
          <BlurhashCanvas
            hash={data.generalDimension.blurHash}
            punch={1}
            className="absolute top-0 left-0 w-full h-full"
          />
        )}
        {inView && (
          <img
            className={`w-full transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            src={data.generalDimension.url}
            alt="About us"
            onLoad={() => setLoaded(true)}
          />
        )}
      </div>
      <div className="flex">
        <div className="relative flex items-center justify-center">
          {!loaded && (
            <BlurhashCanvas
              hash={data.footprintSleepingbag.blurHash}
              punch={1}
              className="absolute top-0 left-0 w-full h-full"
            />
          )}
          {inView && (
            <img
              className={`w-full transition-opacity duration-500 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
              src={data.footprintSleepingbag.url}
              alt="About us"
              onLoad={() => setLoaded(true)}
            />
          )}
        </div>

        <div className="relative flex items-center justify-center">
          {!loaded && (
            <BlurhashCanvas
              hash={data.footprintBeds.blurHash}
              punch={1}
              className="absolute top-0 left-0 w-full h-full"
            />
          )}
          {inView && (
            <img
              className={`w-full transition-opacity duration-500 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
              src={data.footprintBeds.url}
              alt="About us"
              onLoad={() => setLoaded(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
