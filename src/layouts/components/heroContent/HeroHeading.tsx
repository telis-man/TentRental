import { useTranslation } from 'react-i18next';

export default function HeroHeading() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex justify-center items-end leading-widest font-extrabold flex-col pr-24 ">
      <h1 className="text-[4rem] leading-none animate-flip-in">
        {t('for_camping')} - {t('for_adventure')} - {t('for_event')}
      </h1>
      <h1 className="text-[14rem] leading-none leading-none animate-flip-in [animation-delay:0.5s!important]">
        {t('glampis')}
      </h1>
    </div>
  );
}
