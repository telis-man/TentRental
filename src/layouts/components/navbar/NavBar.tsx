// import React from 'react';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import NavBarMenu from '../../../layouts/components/navbar/NavBarMenu';
import LanguageSelect from './LanguageSelect';
import Logo from './Logo';

function NavBar() {
  return (
    <div className="flex items-center justify-between w-full px-4">
      <ErrorBoundary fallback={<div>Something went wrong while loading the logo.</div>}>
        <Suspense fallback={<div>Loading logo...</div>}>
          <Logo />
        </Suspense>
      </ErrorBoundary>
      <NavBarMenu />

      <LanguageSelect />
    </div>
  );
}

export default NavBar;
