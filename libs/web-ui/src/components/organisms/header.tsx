'use client';
import useSidebarExpandStore from '../../stores/sidebar-expand-store';
import NavbarItems from '../molecules/navbar-items';
import MenuTablet from './menu-tablet';

const Header = () => {
  const { isSidebarExpanded, setSidebarExpand } = useSidebarExpandStore();
  return (
    <div
      className=" fixed h-full w-full z-40 pointer-events-none"
    >
      <div className="w-full h-[64px] flex-none lg:z-50 top-0 pointer-events-auto">
        <div className=" h-full w-full px-[32px] bg-white shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.08)]">
          <div className="wrapper grid grid-cols-1 items-center lg:border-0 [--header-height:64px] h-full w-full">
            <div className="relative flex items-center justify-between mx-auto h-full w-full max-w-6xl">
              <div className="flex items-center">
                <a
                  href="/"
                  title="MoMo"
                  className="mr-3 flex-none w-9 h-9 overflow-hidden rounded-none hover:opacity-80"
                >
                  <span className="sr-only">MoMo home page</span>
                  <img
                    src="/momo-icon.svg"
                    className="w-9 h-9"
                    alt="MoMo"
                    style={{ filter: 'invert(0)' }}
                  />
                </a>
                <a
                  href="/"
                  title="Đặt vé xem phim"
                  className="relative flex flex-none space-x-1 pl-2 items-center rounded-none hover:opacity-80
                        after:absolute after:left-0 after:h-8  after:w-[1px] after:bg-gray-300 after:content-[''] "
                >
                  <img
                    src="/video-recorder-icon.svg"
                    className="w-9 h-9"
                    alt="MoMo"
                    style={{ filter: 'invert(0)' }}
                  />
                  <div className="text-sm font-semibold leading-[1.1]  text-pink-500 line-clamp-2">
                    Đặt vé
                    <br />
                    xem phim
                  </div>
                </a>
                <div className="relative lg:ml-2 xl:ml-4 hidden lg:flex items-center ">
                  <NavbarItems />
                </div>
              </div>
              <div className="flex ml-auto space-x-3 flex-nowrap items-center">
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
                    className="block w-7 h-7"
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
        <div className=" fixed top-[64px] h-full w-full lg:hidden bg-white pointer-events-auto">
          <MenuTablet />
        </div>
      )}
    </div>
  );
};

export default Header;
