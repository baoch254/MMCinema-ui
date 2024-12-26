'use client';
import useSidebarExpandStore from '../../stores/sidebar-expand-store';
import NavbarItems from '../molecules/navbar-items';
import MenuTablet from './menu-tablet';
import { CONTENTS_MAX_WIDTH } from '../../constants/constants-and-types';

const Header = () => {
  const { isSidebarExpanded, setSidebarExpand } = useSidebarExpandStore();
  return (
    <div className="pointer-events-none fixed z-40 h-full w-screen">
      <div className="pointer-events-auto top-0 h-[64px] w-full flex-none">
        <div className="h-full w-full bg-white px-[32px] shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.08)]">
          <div className="grid h-full w-full items-center [--header-height:64px] lg:border-0">
            <div className={`relative mx-auto flex h-full w-full ${CONTENTS_MAX_WIDTH} items-center justify-between`}>
              <div className="flex items-center">
                <a
                  href="/"
                  title="MoMo"
                  className="mr-3 flex-none h-9 w-9 overflow-hidden rounded-none hover:opacity-80"
                >
                  <span className="sr-only">MoMo home page</span>
                  <img
                    src="/momo-icon.svg"
                    className="h-9 w-9"
                    alt="MoMo"
                    style={{ filter: 'invert(0)' }}
                  />
                </a>
                <a
                  href="/"
                  title="Đặt vé xem phim"
                  className="relative flex flex-none items-center space-x-1 pl-2 rounded-none hover:opacity-80
                             after:absolute after:left-0 after:h-8 after:w-[1px] after:bg-gray-300 after:content-['']"
                >
                  <img
                    src="/video-recorder-icon.svg"
                    className="h-9 w-9"
                    alt="MoMo"
                    style={{ filter: 'invert(0)' }}
                  />
                  <div className="text-sm font-semibold leading-[1.1] text-pink-500 line-clamp-2">
                    Đặt vé
                    <br />
                    xem phim
                  </div>
                </a>
                <div className="relative hidden items-center lg:ml-2 lg:flex xl:ml-4">
                  <NavbarItems />
                </div>
              </div>
              <div className="ml-auto flex flex-nowrap items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <div className="lg:hidden">
                  <svg
                    className="block h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    onClick={() => setSidebarExpand(!isSidebarExpanded)}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSidebarExpanded && (
        <div className="pointer-events-auto fixed top-[64px] h-full w-full bg-white lg:hidden">
          <MenuTablet />
        </div>
      )}
    </div>
  );
};

export default Header;
