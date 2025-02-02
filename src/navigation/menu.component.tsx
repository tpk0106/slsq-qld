import { NavLink } from 'react-router-dom';

type menuItem = {
  submenu: string | null;
  icon: string;
  label: string;
  routerLink: string;
};
const Menu = ({ label, routerLink, icon }: menuItem) => {
  return (
    <li className="cursor-pointer items-center text-center py-4 m-auto">
      <NavLink to={routerLink}>{label}</NavLink>
    </li>
  );
};

export default Menu;
