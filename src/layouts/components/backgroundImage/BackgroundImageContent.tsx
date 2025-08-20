import { ErrorBoundary } from 'react-error-boundary';
import BackgroundImage from './BackroundImage';
import { Suspense, type ReactNode } from 'react';

interface BannerContentProps {
  children?: ReactNode;
}

export default function BackgroundImageContent({ children }: BannerContentProps) {
  return (
    <Suspense
      fallback={
        <div className=" h-[calc(100vh-var(--navbar-height))] blur-2xl animate-pulse">
          {children}
        </div>
      }
    >
      <ErrorBoundary
        fallback={<div className=" h-[calc(100vh-var(--navbar-height))]">{children}</div>}
      >
        <BackgroundImage>{children}</BackgroundImage>
      </ErrorBoundary>
    </Suspense>
  );
}
