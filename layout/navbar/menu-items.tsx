import { ReactElement } from "react";
import Link from "next/link";
import ThemeController from "components/common/theme-controller/theme-controller";
import Avatar from "layout/navbar/avatar";
import { FaStar, FaStopwatch } from "react-icons/fa6";

type MenuItemsType = {
  key: number;
  component: ReactElement;
  divider?: ReactElement;
};

export const MenuItems: MenuItemsType[] = [
  {
    key: 1,
    component: <Link href="/">Home</Link>,
  },
  {
    key: 2,
    component: (
      <details>
        <summary>Playlists</summary>
        <ul className="rounded-t-none p-2">
          <li>
            <Link
              className="whitespace-nowrap"
              href="/movies?playlist=favorites"
            >
              <FaStar />
              Favorites
            </Link>
          </li>
          <li>
            <Link
              className="whitespace-nowrap"
              href="/movies?playlist=watch-later"
            >
              <FaStopwatch />
              Watch Later
            </Link>
          </li>
        </ul>
      </details>
    ),
  },
  {
    key: 3,
    component: <Link href="/about">About</Link>,
  },
  {
    key: 4,
    component: <ThemeController />,
    divider: <div className="divider divider-horizontal m-0" />,
  },
  {
    key: 5,
    component: <Avatar />,
  },
];

export const PhoneMenuItems: MenuItemsType[] = [
  {
    key: 5,
    component: <Avatar />,
    divider: <div className="divider m-0" />,
  },
  {
    key: 1,
    component: <Link href="/">Home</Link>,
  },
  {
    key: 2,
    component: (
      <>
        <summary>Playlists</summary>
        <ul className="rounded-t-none p-2">
          <li>
            <Link
              className="whitespace-nowrap"
              href="/movies?playlist=favorites"
            >
              <FaStar />
              Favorites
            </Link>
          </li>
          <li>
            <Link
              className="whitespace-nowrap"
              href="/movies?playlist=watch-later"
            >
              <FaStopwatch />
              Watch Later
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    key: 3,
    component: <Link href="/about">About</Link>,
  },
  {
    key: 4,
    component: <ThemeController />,
  },
];
