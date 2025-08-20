// import Loader from '@/components/Loader';
import BackgroundImageContent from '@/layouts/components/backgroundImage/BackgroundImageContent';
import { createLazyFileRoute } from '@tanstack/react-router';
import { t } from 'i18next';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div>
      <BackgroundImageContent>
        <div className="w-full h-full flex justify-center items-end leading-widest font-extrabold flex-col pr-24">
          <h1 className="text-[4rem] leading-none">
            {t('for_camping')} & {t('for_adventure')} & {t('for_event')}
          </h1>
          <h1 className="text-[14em] leading-none">{t('glampis')}</h1>
        </div>
      </BackgroundImageContent>

      <section className="text-center">
        <h1 className="font-extrabold text-2xl  tracking-widest ">GLAMPIS</h1>
      </section>
    </div>
  );
}
