// import Loader from '@/components/Loader';
import { ScrollSnapPage } from '@/features/ScrollSnapPage';
import { AboutSection } from '@/layouts/components/aboutSection';
import { BackgroundImageContent } from '@/layouts/components/backgroundImage';
import HeroHeading from '@/layouts/components/heroContent/HeroHeading';
import { createLazyFileRoute } from '@tanstack/react-router';
import { DimensionsSection } from '@/layouts/components/dimensionsSection';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <ScrollSnapPage
      sections={[
        {
          id: 'hero',
          content: (
            <BackgroundImageContent>
              <HeroHeading />
            </BackgroundImageContent>
          ),
        },
        {
          id: 'about',
          content: <AboutSection />,
        },
        {
          id: 'dimensions',
          content: <DimensionsSection />,
        },
        {
          id: 'contact',
          content: <div>Contact form goes here</div>,
        },
      ]}
    />
  );
}
