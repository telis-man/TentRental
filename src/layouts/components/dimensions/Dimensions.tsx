// export default function DimensionsSection() {
//   return <div>DimensionsSection</div>;
// }
import { useInView } from '@/layouts/hooks/useInView';
// import { useTranslation } from 'react-i18next';
// import { BlurhashCanvas } from 'react-blurhash';
import { useState } from 'react';
import { useDimensionsImages } from '@/layouts/hooks/useDimensionsImages';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export default function DimensionsSection() {
  // const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { data } = useDimensionsImages();
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="h-full grid grid-cols-5 w-full items-center p-24 relative border-2 border-red-800" ref={ref}>
      <div className="relative flex items-center flex-col justify-center col-span-3 h-full overflow-hidden">
        <h1
          className={`text-[8rem] w-2/3 leading-none font-extrabold self-center text-start mt-20 ${inView && 'text-reveal'}`}
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
      <div className="absolute text-background w-36 h-40 bg-yellow-400 text-2xl font-bold p-2 z-10 flex flex-col items-start justify-start  top-[28%] left-[60%] -translate-x-1/2 -translate-y-1/2">
        <h2 className="w-5/6">{t('capacity_with_sleeping_bags')}</h2>
        <ArrowRight
          size={42}
          className=" absolute right-0 bottom-0 text-background rotate-45 self-end"
        />
      </div>
      <div className="absolute bg-black/60 text-background w-36 h-40 bg-foreground text-2xl font-bold p-2 z-10 flex flex-col items-end justify-end  top-[64%] left-[94%] -translate-x-1/2 -translate-y-1/2">
        <h2 className="w-5/6 text-end">{t('capacity_with_beds')}</h2>
        <ArrowRight
          size={42}
          className="absolute left-0 top-0 text-background rotate-225 self-end"
        />
      </div>
      <div className="flex col-span-2 relative  h-full">
        <div className="relative flex items-center justify-center">
          <img
            className={`w-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'
              }`}
            src={data.footprintSleepingbag.url}
            onLoad={() => setLoaded(true)}
          />
        </div>

        <div className="relative flex items-center justify-center">
          <img
            className={`w-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'
              }`}
            src={data.footprintBeds.url}
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}
