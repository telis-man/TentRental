// import React from 'react';

import LanguageSelect from './LanguageSelect';
import Logo from './Logo';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import NavBarMenu from './NavBarMenu';

function NavBar() {
  return (
    <div className="flex items-center justify-between w-full mx-4">
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
