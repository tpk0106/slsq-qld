import { navbarData } from '../data/nav-data';
import Menu from './menu.component';

const Footer = () => {
  const formatDate = () => new Date().toLocaleDateString();

  return (
    <>
      <div className="text-center mt-5">
        <div className="sm:flex-col my-2 sm:text-mobile md:text-tablet lg:text-laptop">
          <div>&copy; {formatDate()} Sri Lanka Society of Queensland Inc.</div>
          <div>All rights reserved.</div>
        </div>

        <div>
          <div className="flex justify-center w-8/12 m-auto border-b-1 border-gray-800 mt-5"></div>
        </div>

        {/* footer  */}
        <div className="w-[80%] m-auto hidden md:flex">
          <div className="sm:flex flex-wrap flex-1 items-center content-center w-full md:text1-[60%] lg:text1-[100%] font1-semibold">
            <ul className="sm:flex flex-1 items-center justify-between text-base">
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
          </div>
        </div>

        {/* mobile footer */}

        <div className="w-[80%] m-auto sm:flex-col md:hidden text-xs">
          <div className="sm:flex flex-wrap flex-1 items-center content-center w-full">
            <ul className="flex justify-between">
              <div className="flex flex-col gap-5">
                <div>
                  <Menu
                    label="About Us"
                    submenu={null}
                    routerLink="about-us"
                    icon={''}
                    key="about-us"
                  />
                  <Menu
                    label="Contact Us"
                    submenu={null}
                    routerLink="contact-us"
                    icon={''}
                    key="contact-us"
                  />
                </div>
                <div>
                  <Menu
                    label="Committee Members"
                    submenu={null}
                    routerLink="committee"
                    icon={''}
                    key="committee"
                  />
                  <Menu
                    label="Photo Gallery"
                    submenu={null}
                    routerLink="photo-gallery"
                    icon={''}
                    key="photo-gallery"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <Menu
                    label=" Publications"
                    submenu={null}
                    routerLink="publications"
                    icon={''}
                    key=" publications"
                  />
                  <Menu
                    label="Up Coming Events"
                    submenu={null}
                    routerLink="upcoming-events"
                    icon={''}
                    key="photo-gallery"
                  />
                </div>

                <div>
                  <Menu
                    label="Past Events"
                    submenu={null}
                    routerLink="past-events"
                    icon={''}
                    key="past-events"
                  />
                  <Menu
                    label="Notice Board"
                    submenu={null}
                    routerLink="notice-board"
                    icon={''}
                    key="notice-board"
                  />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
