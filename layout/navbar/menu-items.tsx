import Link from "next/link";
import ThemeController from "components/theme-controller/theme-controller";
import { FaStar, FaStopwatch } from "react-icons/fa6";

type MenuItemsType = {
  key: number;
  component: React.ReactElement;
  divider?: React.ReactElement;
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
    component: (
      <>
        <ThemeController />
      </>
    ),
    divider: <div className="divider divider-horizontal m-0" />,
  },
  {
    key: 5,
    component: (
      <div className="avatar placeholder">
        <div className="w-7 bg-red-400 text-neutral-content rounded-full">
          <span className="text-sm">D</span>
        </div>
      </div>
    ),
  },
];
