import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { Link } from '@tanstack/react-router';
import { useInView } from '@/layouts/hooks/useInView';

export default function ImagePreview() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="h-full w-full flex flex-col gap-8 items-start justify-center px-42 pt-42"
    >
      <div className="flex flex-col items-start justify-center gap-6">
        <h1 className="text-[6rem] leading-none font-extrabold">{t('image_prieview_title')}</h1>
        <p className="text-4xl font-accent">
          <Trans
            i18nKey="image_preview_subtitle"
            components={[<Link to="/gallery" className=" hover:underline italic underline" />]}
          />
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 flex-1 w-full items-center relative border-4 border-blue-500">
        <div className={`bg-red-700 h-full w-full ${inView && 'text-reveal'}`} />
        <div
          className={`bg-red-700 h-full w-full ${inView && 'text-reveal [animation-delay:0.4s!important] text-reveal'}`}
        />
        <div
          className={`bg-red-700 h-full w-full ${inView && 'text-reveal [animation-delay:0.8s!important] text-reveal'}`}
        />
      </div>
    </div>
  );
}
