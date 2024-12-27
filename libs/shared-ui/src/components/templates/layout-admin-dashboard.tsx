'use client';

import { cn } from '@mmcinema-ui/shadcn';
import ModeTheme from '../atoms/mode-theme';
import ModeLanguage from '../atoms/mode-language';
import { TopNav } from '../molecules/top-nav';
import { Search } from '../molecules/search';
import { ProfileDropdown } from '../molecules/profile-dropdown';
import { Header } from '../organisms/header';
import AppSidebar from '../organisms/app-sidebar';
import { Main } from '../organisms/main';
import { useTranslations } from 'next-intl';
import { useScreenWidth } from '@mmcinema-ui/shared-hooks';

const topNav = [
  {
    title: 'overview',
    href: 'dashboard/overview',
    isActive: true,
  },
  {
    title: 'customers',
    href: 'dashboard/customers',
    isActive: false,
  },
  {
    title: 'products',
    href: 'dashboard/products',
    isActive: false,
  },
  {
    title: 'settings',
    href: 'dashboard/settings',
    isActive: false,
  },
];

type Props = {
  children: React.ReactNode;
};

const LayoutAdminDashboard = ({ children }: Props) => {
  const t = useTranslations('CORE');

  const screen = useScreenWidth();

  return (
    <>
      <AppSidebar />
      <div
        id="content"
        className={cn(
          'max-w-full w-full ml-auto',
          'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon))]',
          'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
          'transition-[width] ease-linear duration-200',
          'h-svh flex flex-col'
        )}
      >
        <Header>
          <TopNav links={topNav} />
          <div className="ml-auto flex items-center space-x-4">
            {!screen.isMobile && <Search placeholder={t('search')} isMain />}
            <ModeTheme />
            <ModeLanguage />
            <ProfileDropdown />
          </div>
        </Header>
        <Main>{children}</Main>
      </div>
    </>
  );
};

export default LayoutAdminDashboard;
