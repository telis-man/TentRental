import { useBackgroundImage } from '@/layouts/hooks/useBackgroundBanner';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function BannerContent() {
  const { data } = useBackgroundImage();

  return (
    <ErrorBoundary
      fallback={
        <div className="w-screen h-screen bg-gray-200">
          Something went wrong while loading the background.
        </div>
      }
    >
      <Suspense
        fallback={<div className="w-screen h-screen bg-gray-200">Loading background...</div>}
      >
        <div
          className="w-screen overflow-hidden fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url(${data.bannerUrl})` }}
        />
      </Suspense>
    </ErrorBoundary>
  );
}
