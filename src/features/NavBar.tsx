// import React from 'react';

import { Link } from '@tanstack/react-router';
import { t } from 'i18next';
import i18n from 'i18next';
import { Button } from '@/components/ui/button';

function NavBar() {
  const changeLanguage = (lang: string) => {
    console.log(i18n.language);
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <Link to="/" className="[&.active]:font-bold">
        {t('home')}
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        {t('about')}
      </Link>
      <Button onClick={() => changeLanguage('en')}>Lng</Button>
    </div>
  );
}

export default NavBar;
