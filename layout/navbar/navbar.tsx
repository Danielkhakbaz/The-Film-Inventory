import { Fragment } from "react";
import Link from "next/link";
import { MenuItems } from "layout/navbar/menu-items";
import { FaFortAwesomeAlt } from "react-icons/fa6";

const Navbar = async () => {
  return (
    <nav className="navbar border rounded-b-xl">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          <FaFortAwesomeAlt className="text-2xl" />
          The Film Inventory
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal items-center gap-1">
          {MenuItems.map(({ key, component, divider }) => (
            <Fragment key={key}>
              <li>{component}</li>
              {divider}
            </Fragment>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
