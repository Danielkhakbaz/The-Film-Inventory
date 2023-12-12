import Link from "next/link";
import { FaStar, FaStopwatch } from "react-icons/fa6";

const ButtonLinks = async () => {
  return (
    <div className="flex gap-4">
      <Link href="/movies?playlist=favorites">
        <button className="btn btn-warning flex flex-row whitespace-nowrap">
          <FaStar /> Favorites
        </button>
      </Link>
      <Link href="/movies?playlist=watch-later">
        <button className="btn btn-neutral whitespace-nowrap">
          <FaStopwatch />
          Watch Later
        </button>
      </Link>
    </div>
  );
};

export default ButtonLinks;
