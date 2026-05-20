import { cn } from '@/lib/utils';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createLazyFileRoute('/contacts')({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();


  return (
    <div>
      <h1 className={`text-8xl font-extrabold z-5 ${'text-reveal [animation-delay:0.4s!important]'}`}>
        {t('contacts')}
      </h1>
      <div
        className={cn(
          'bg-yellow-400 h-14  w-48 absolute top-8 left-4 z-4',
          'animate-side-reveal [animation-delay:1.2s!important]'
        )}
      ></div>
    </div>
  )
}
