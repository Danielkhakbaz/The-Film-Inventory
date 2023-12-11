import Link from "next/link";
import ThemeController from "components/theme-controller/theme-controller";
import { FaFortAwesomeAlt, FaStar, FaStopwatch } from "react-icons/fa6";

const Navbar = async () => {
  return (
    <div className="navbar border rounded-b-xl">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          <FaFortAwesomeAlt className="text-2xl" />
          The Film Inventory
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-2 px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
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
          </li>
          <li>
            <ThemeController />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
