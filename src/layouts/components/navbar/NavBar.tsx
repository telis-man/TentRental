import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import NavBarMenu from '../../../layouts/components/navbar/NavBarMenu';
import LanguageSelect from './LanguageSelect';
import Logo from './Logo';

function NavBar() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center justify-between w-5/6 p-4 px-8 fixed z-50 bg-background m-8 rounded-2xl text-reveal">
        <ErrorBoundary fallback={<div>Something went wrong while loading the logo.</div>}>
          <Suspense fallback={<div>Loading logo...</div>}>
            <Logo />
          </Suspense>
        </ErrorBoundary>
        <div className="flex items-center gap-8">
          <NavBarMenu />
          <LanguageSelect />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
