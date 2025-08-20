import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

const NavBarMenu = () => {
  const { t } = useTranslation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuLink asChild>
          <Link to="/" className="[&.active]:font-bold tracking-wide">
            {t('home')}
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link to="/about" className="[&.active]:font-bold tracking-wide">
            {t('about')}
          </Link>
        </NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBarMenu;
