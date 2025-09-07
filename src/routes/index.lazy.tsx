// import Loader from '@/components/Loader';
import { ScrollSnapPage } from '@/features/ScrollSnapPage';
import { AboutSection } from '@/layouts/components/aboutSection';
import { BackgroundImageContent } from '@/layouts/components/backgroundImage';
import HeroHeading from '@/layouts/components/heroContent/HeroHeading';
import { createLazyFileRoute } from '@tanstack/react-router';
import ImagePreview from '@/layouts/components/imagePreviewSection/ImagePreview';
import { useTranslation } from 'react-i18next';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  const { t } = useTranslation();
  return (
    <ScrollSnapPage
      sections={[
        {
          id: 'hero',
          name: t('start'),
          content: (
            <BackgroundImageContent>
              <HeroHeading />
            </BackgroundImageContent>
          ),
        },
        {
          id: 'about',
          name: t('about_us'),

          content: <AboutSection />,
        },
        {
          id: 'galleryPreview',
          name: t('tent_in_action'),

          content: <ImagePreview />,
        },
      ]}
    />
  );
}
