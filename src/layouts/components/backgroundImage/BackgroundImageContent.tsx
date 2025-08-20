import { ErrorBoundary } from 'react-error-boundary';
import BackgroundImage from './BackroundImage';
import { Suspense, type ReactNode } from 'react';

interface BannerContentProps {
  children?: ReactNode;
}

export default function BackgroundImageContent({ children }: BannerContentProps) {
  // const
  return (
    <Suspense
      fallback={<div className=" h-[calc(100vh-80px)] blur-2xl animate-pulse">{children}</div>}
    >
      <ErrorBoundary fallback={<div className=" h-[calc(100vh-80px)]">{children}</div>}>
        <BackgroundImage>{children}</BackgroundImage>
      </ErrorBoundary>
    </Suspense>
  );
}
