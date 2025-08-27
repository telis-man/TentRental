// export default function DimensionsSection() {
//   return <div>DimensionsSection</div>;
// }
import { useInView } from '@/layouts/hooks/useInView';
// import { useTranslation } from 'react-i18next';
// import { BlurhashCanvas } from 'react-blurhash';
import { useState } from 'react';
import { useDimensionsImages } from '@/layouts/hooks/useDimensionsImages';
import { useTranslation } from 'react-i18next';

export default function DimensionsSection() {
  // const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { data } = useDimensionsImages();
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="h-full grid grid-cols-5 w-full items-center p-24" ref={ref}>
      <div className="relative flex items-center flex-col justify-center col-span-3 h-full overflow-hidden">
        <h1
          className={`text-[8rem] w-2/3 leading-none font-extrabold self-start mt-20 ${inView ? 'animate-flip-in opacity-100' : 'opacity-0'}`}
        >
          {t('space_for_every_occasion').replace(/ /g, '\n')}
        </h1>
        <div className="flex-1 flex items-center justify-center overflow-hidden ">
          <img
            className={`max-h-full max-w-full object-contain transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            src={data.generalDimension.url}
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>

      <div className="flex col-span-2 relative border-2 border-red-500 h-full">
        <div className="absolute top-0 left-0 bg-black/60 text-background w-36 h-36 bg-foreground text-2xl font-bold p-2 z-10">
          <h2 className="w-5/6">{t('capacity_with_sleeping_bags')}</h2>
        </div>
        <div className="relative flex items-center justify-center">
          <img
            className={`w-full transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            src={data.footprintSleepingbag.url}
            onLoad={() => setLoaded(true)}
          />
        </div>

        <div className="relative flex items-center justify-center">
          <img
            className={`w-full transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            src={data.footprintBeds.url}
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}
