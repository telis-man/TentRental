import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import {
  NavigationMenu,
  //   NavigationMenuContent,
  //   NavigationMenuIndicator,
  //   NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  //   NavigationMenuTrigger,
  //   NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

const NavBarMenu = () => {
  const { t } = useTranslation();

  return (
    <div className="gap-4 flex">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuLink>
            <Link to="/" className="[&.active]:font-bold tracking-wide">
              {t('home')}
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink>
            <Link to="/about" className="[&.active]:font-bold tracking-wide">
              {t('about')}
            </Link>
          </NavigationMenuLink>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <Link to="/about" className="[&.active]:font-bold">
                  {t('about')}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBarMenu;
