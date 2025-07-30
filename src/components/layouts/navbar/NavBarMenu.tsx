import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

const NavBarMenu = () => {
  const { t } = useTranslation();

  return (
    <div className="gap-4 flex">
      <Link to="/" className="[&.active]:font-bold">
        {t('home')}
      </Link>
      <Link to="/about" className="[&.active]:font-bold">
        {t('about')}
      </Link>
    </div>
  );
};

export default NavBarMenu;
