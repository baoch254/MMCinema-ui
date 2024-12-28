'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  cn,
  useSidebar,
} from '@mmcinema-ui/shadcn';
import { NavGroup } from '../molecules/nav-group';
import { NavUser } from '../molecules/nav-user';
import { sidebarData } from '../../data/sidebar-data';
import { images } from '@mmcinema-ui/assets';

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const { openMobile, open } = useSidebar();

  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarHeader className="flex flex-row justify-center">
        <figure
          className={cn('flex items-center justify-center', openMobile || open ? 'w-40' : 'w-10')}
        >
          <img
            src={openMobile || open ? images.logo : images.logoMobile}
            className="w-full h-full"
          />
        </figure>
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
