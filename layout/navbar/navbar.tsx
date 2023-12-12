import { Fragment } from "react";
import Link from "next/link";
import { MenuItems, PhoneMenuItems } from "layout/navbar/menu-items";
import { FaFortAwesomeAlt } from "react-icons/fa6";

const Navbar = async () => {
  return (
    <nav className="navbar border rounded-b-xl">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          <FaFortAwesomeAlt className="text-2xl" />
          The Film Inventory
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal items-center gap-1 hidden lg:flex">
          {MenuItems.map(({ key, component, divider }) => (
            <Fragment key={key}>
              <li>{component}</li>
              {divider}
            </Fragment>
          ))}
        </ul>
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-outline lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            {PhoneMenuItems.map(({ key, component, divider }) => (
              <Fragment key={key}>
                <li>{component}</li>
                {divider}
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
