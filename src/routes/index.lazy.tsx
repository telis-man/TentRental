// import Loader from '@/components/Loader';
import { ScrollSnapPage } from '@/features/ScrollSnapPage';
import { BackgroundImageContent } from '@/layouts/components/backgroundImage';
import HeroHeading from '@/layouts/components/heroContent/HeroHeading';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <ScrollSnapPage
      sections={[
        {
          id: 'hero',
          className: '',
          content: (
            <BackgroundImageContent>
              <HeroHeading />
            </BackgroundImageContent>
          ),
        },
        {
          id: 'about',
          className: '',
          content: <p className="max-w-xl text-center">About content…</p>,
        },
        {
          id: 'services',
          className: '',
          content: <div>Services</div>,
        },
        {
          id: 'contact',
          className: '',
          content: <div>Contact form goes here</div>,
        },
      ]}
    />
  );
}
