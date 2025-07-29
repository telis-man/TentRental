// import React from 'react';

import { Link } from '@tanstack/react-router';

import { useTranslation } from 'react-i18next';

import LanguageSelect from '@/components/LanguageSelect';

function NavBar() {
  const { t } = useTranslation();

  return (
    <div>
      <Link to="/" className="[&.active]:font-bold">
        {t('home')}
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        {t('about')}
      </Link>
      <LanguageSelect />
    </div>
  );
}

export default NavBar;
