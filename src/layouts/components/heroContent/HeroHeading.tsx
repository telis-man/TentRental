import { useTranslation } from 'react-i18next';

export default function HeroHeading() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex justify-start pt-62 items-end font-extrabold flex-col pr-24 ">
      <h2 className="text-[4rem] leading-none text-reveal">{t('for_camping')}</h2>
      <h2 className="text-[4rem] leading-none text-reveal [animation-delay:0.4s!important]">
        {t('for_adventure')}
      </h2>
      <h2 className="text-[4rem] leading-none text-reveal [animation-delay:0.8s!important]">
        {t('for_event')}
      </h2>
      <h1 className="text-[16rem] text-reveal leading-50 [animation-delay:1.2s!important]">
        {t('glampis')}
      </h1>
    </div>
  );
}
