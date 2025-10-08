// import Loader from '@/components/Loader';
import { ScrollSnapPage } from '@/features/ScrollSnapPage';
import { AboutSection } from '@/layouts/components/aboutSection';
import { BackgroundImage } from '@/layouts/components/backgroundImage';
import HeroHeading from '@/layouts/components/heroContent/HeroHeading';
import { createLazyFileRoute } from '@tanstack/react-router';
import ImagePreview from '@/layouts/components/imagePreviewSection/ImagePreview';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Loader from '@/components/Loader';
import CheckAvailabilitySection from '@/layouts/components/checkAvailabilitySection/CheckAvailabilitySection';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  const { t } = useTranslation();

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <ScrollSnapPage
      sections={[
        {
          id: 'hero',
          name: t('start'),
          content: (
            <>
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
                  <Loader />
                </div>
              )}
              <BackgroundImage setIsVideoLoaded={setIsVideoLoaded}>
                {isVideoLoaded && <HeroHeading />}
              </BackgroundImage>
            </>
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
        {
          id: 'checkAvailability',
          name: t('check_availability'),

          content: <CheckAvailabilitySection />,
        },
      ]}
    />
  );
}
