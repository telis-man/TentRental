import { useTranslation } from 'react-i18next';

export default function HeroHeading() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex justify-start pt-62 items-end leading-widest font-extrabold flex-col pr-24 ">
      <h1 className="text-[4rem] leading-none text-reveal">
        {t('for_camping')} - {t('for_adventure')} - {t('for_event')}
      </h1>
      <h1 className="text-[14rem] leading-none leading-none text-reveal [animation-delay:0.4s!important]">
        {t('glampis')}
      </h1>
    </div>
  );
}
