// import React from 'react';

import { Link } from '@tanstack/react-router';

import { useTranslation } from 'react-i18next';

import { LanguageSelect } from './LanguageSelect';
import { Logo } from './Logo';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function NavBar() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-4">
      <ErrorBoundary fallback={<div>Something went wrong while loading the logo.</div>}>
        <Suspense fallback={<div>Loading logo...</div>}>
          <Logo />
        </Suspense>
      </ErrorBoundary>
      <Link to="/" className="[&.active]:font-bold">
        {t('home')}
      </Link>
      <Link to="/about" className="[&.active]:font-bold">
        {t('about')}
      </Link>
      <LanguageSelect />
    </div>
  );
}

export default NavBar;
