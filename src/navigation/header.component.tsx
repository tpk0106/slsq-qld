import { Link, Outlet } from 'react-router-dom';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/logo.jpg';
import { navbarData } from '../data/nav-data';

import Menu from './menu.component';
import Footer from './footer.component';

const handleMenuClose = () => {
  const ele = document.getElementById('mobileMenu');
  ele?.classList.toggle('hidden');
};

const Header = () => {
  return (
    <>
      <div className="flex w-[100%] overflow-hidden">
        <div className="flex w-full">
          <div className="container1 flex-wrap w-full flex 1 1 100%">
            <div className="w-[100%] flex justify-around pt-4">
              <Link to="/">
                <img src={logo} alt="Sri Lanka Society of Queensland Inc logo" />
              </Link>
            </div>

            <div className="flex w-full md:hidden justify-center mb-2">
              <label
                className="flex justify-end md:hidden mt-1 mr-0 z-50"
                onClick={() => handleMenuClose()}
              >
                <FontAwesomeIcon icon={faAddressBook} className="text-2xl" />
              </label>
            </div>

            <div className="flex w-full justify-center md:hidden">
              <div className="flex justify-center w-8/12 m-auto border-b-1 border-gray-800 mt-5"></div>
            </div>

            {/*  main menu for tablets, laptop and larger screen devices  */}
            {/* mobile width <= 767px
            tablet width >= 768px
            laptop width >= 1024px          
        */}
            <div className="flex-1 w-[100%] mt-5">
              <div className="flex flex-1 items-center justify-between">
                <nav className="hidden sm:max-sm:hidden sm:max-md:hidden md:flex lg:flex @3xl:flex flex-1 items-center justify-around border-[1px] w-full text-sm mx-[10%] rounded-[14px] bg-[#000] text-[#a855f7] font-semibold">
                  <ul className="flex flex-1 text-center justify-between">
                    {navbarData.map((menu) => {
                      return (
                        <Menu
                          label={menu.label}
                          submenu={menu.subMenus}
                          routerLink={menu.routerLink}
                          icon={menu.icon}
                          key={menu.routerLink}
                        />
                      );
                    })}
                  </ul>
                </nav>

                {/* mobile main menu */}

                {/* <nav
                  id="mobileMenu"
                  className="flex flex-col md:hidden lg:hidden flex1-1 w1-2/3 w-full text-menu-black-dark text-2xl z-50 absolute left-16 1right-32 -1right-0 top-60"
                >
                  <ul>
                    {navbarData.map((menu) => {
                      return (
                        <div className="cursor-pointer text-xs bg-gray-400 text-[#a855f7] text-center w-3/4 hover:text-[#fff]">
                          <Menu
                            label={menu.label}
                            submenu={menu.subMenus}
                            routerLink={menu.routerLink}
                            icon={menu.icon}
                            key={menu.routerLink}
                          />
                        </div>
                      );
                    })}
                  </ul>
                </nav> */}
              </div>
              <Outlet />
              <Footer />
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <nav
        id="mobileMenu"
        className="flex flex-col md:hidden lg:hidden flex1-1 w-full text-menu-black-dark text-2xl z-50 absolute left-16 1right-32 -1right-0 top-40"
      >
        <ul>
          {navbarData.map((menu) => {
            return (
              <div className="cursor-pointer text-xs bg-black text-[#a855f7] text-center w-3/4 hover:text-[#fff]">
                <Menu
                  label={menu.label}
                  submenu={menu.subMenus}
                  routerLink={menu.routerLink}
                  icon={menu.icon}
                  key={menu.routerLink}
                />
              </div>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
