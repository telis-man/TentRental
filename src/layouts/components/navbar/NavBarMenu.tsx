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
          <Link to="/gallery" className="[&.active]:font-bold tracking-wide">
            {t('gallery')}
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link to="/reservation" className="[&.active]:font-bold tracking-wide">
            {t('reservation')}
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link to="/tents" className="[&.active]:font-bold tracking-wide">
            {t('tents')}
          </Link>
        </NavigationMenuLink>

        <NavigationMenuLink asChild>
          <Link to="/contacts" className="[&.active]:font-bold tracking-wide">
            {t('contacts')}
          </Link>
        </NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBarMenu;
