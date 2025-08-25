import { useInView } from '@/layouts/hooks/useInView';
import { useTranslation } from 'react-i18next';
import { useAboutImage } from '@/layouts/hooks/useAboutImage';

export default function AboutSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.3 }); // 30% visible triggers
  const { data } = useAboutImage();
  return (
    <div className="h-full grid grid-cols-2 w-full items-center" ref={ref}>
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start w-1/2 mx-auto">
        <h1
          className={`text-8xl font-extrabold ${inView ? 'animate-flip-in opacity-100' : 'opacity-0'}`}
        >
          {t('about')}
        </h1>
        <p
          className={`text-2xl font-semibold text-justify ${inView ? 'animate-flip-in [animation-delay:0.5s!important]' : 'opacity-0'}`}
        >
          {t('about_description')}
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-start">
        <img className="w-5/6" src={data.imageUrl}></img>
      </div>
    </div>
  );
}
