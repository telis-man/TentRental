import { ErrorBoundary } from 'react-error-boundary';
import BackgroundImage from './BackgroundImage';
import { Suspense, type ReactNode } from 'react';
import Loader from '@/components/Loader';

interface BannerContentProps {
  children?: ReactNode;
}

export default function BackgroundImageContent({ children }: BannerContentProps) {
  return (
    <Suspense
      fallback={
        <div className=" h-screen flex justify-center items-center">
          <Loader></Loader>
        </div>
      }
    >
      <ErrorBoundary fallback={<div className=" h-screen">{children}</div>}>
        <BackgroundImage>{children}</BackgroundImage>
      </ErrorBoundary>
    </Suspense>
  );
}
