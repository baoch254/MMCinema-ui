import React from 'react';

import { Header } from '@mmcinema-ui/shared-ui/layout/components/organisms/header';
import { TopNav } from '@mmcinema-ui/shared-ui/layout/components/molecules/top-nav';
import { Search } from '@mmcinema-ui/shared-ui/layout/components/molecules/search';
import { ProfileDropdown } from '@mmcinema-ui/shared-ui/layout/components/molecules/profile-dropdown';

import { ModeLanguage, ModeTheme } from '@mmcinema-ui/shared-ui';

const topNav = [
  {
    title: 'Overview',
    href: 'dashboard/overview',
    isActive: true,
  },
  {
    title: 'Customers',
    href: 'dashboard/customers',
    isActive: false,
  },
  {
    title: 'Products',
    href: 'dashboard/products',
    isActive: false,
  },
  {
    title: 'Settings',
    href: 'dashboard/settings',
    isActive: false,
  },
];

const DashboardPage = () => {
  return (
    <>
      <Header>
        <TopNav links={topNav} />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ModeTheme />
          <ModeLanguage />
          <ProfileDropdown />
        </div>
      </Header>
    </>
  );
};

export default DashboardPage;
