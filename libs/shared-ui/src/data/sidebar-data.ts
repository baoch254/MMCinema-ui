import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconMessages,
  IconNotification,
  IconPackages,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
  IconUsers,
} from '@tabler/icons-react';
import { type SidebarData } from '../types';

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navGroups: [
    {
      title: 'general',
      items: [
        {
          title: 'dashboard',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'tasks',
          url: '/tasks',
          icon: IconChecklist,
        },
        {
          title: 'apps',
          url: '/apps',
          icon: IconPackages,
        },
        {
          title: 'chats',
          url: '/chats',
          badge: '3',
          icon: IconMessages,
        },
        {
          title: 'users',
          url: '/users',
          icon: IconUsers,
        },
      ],
    },
    {
      title: 'pages',
      items: [
        {
          title: 'auth',
          icon: IconLockAccess,
          items: [
            {
              title: 'signIn',
              url: '/sign-in',
            },
            {
              title: 'signIn2Col',
              url: '/sign-in-2',
            },
            {
              title: 'signUp',
              url: '/sign-up',
            },
            {
              title: 'forgotPassword',
              url: '/forgot-password',
            },
            {
              title: 'otp',
              url: '/otp',
            },
          ],
        },
        {
          title: 'errors',
          icon: IconBug,
          items: [
            {
              title: 'unauthorized',
              url: '/401',
              icon: IconLock,
            },
            {
              title: 'forbidden',
              url: '/403',
              icon: IconUserOff,
            },
            {
              title: 'notFound',
              url: '/404',
              icon: IconError404,
            },
            {
              title: 'internalServerError',
              url: '/500',
              icon: IconServerOff,
            },
            {
              title: 'maintenanceError',
              url: '/503',
              icon: IconBarrierBlock,
            },
          ],
        },
      ],
    },
    {
      title: 'other',
      items: [
        {
          title: 'settings',
          icon: IconSettings,
          items: [
            {
              title: 'profile',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'account',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'appearance',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'notifications',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'display',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: 'helpCenter',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
};
