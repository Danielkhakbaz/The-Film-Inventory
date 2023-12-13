import Image from "next/image";
import { FaLayerGroup, FaRegStar } from "react-icons/fa6";

type MovieType = {
  id: number;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  score: string;
  episodes: number;
};

const Card = async ({ movie }: { movie: MovieType }) => {
  const movieTypeDetector = (kind: string) => {
    switch (kind) {
      case "movie": {
        return "Movie";
      }
      case "tv": {
        return "TV";
      }
      default: {
        return "UNKNOWN";
      }
    }
  };

  return (
    <div className="card w-full shadow-2xl">
      <figure className="w-full h-[37vh] relative">
        <Image
          className="rounded-xl"
          src={`https://shikimori.one${movie.image.original}`}
          alt={movie.name}
          sizes="200"
          fill
        />
      </figure>
      <div className="card-body gap-6">
        <div className="flex justify-between items-center">
          <h2 className="card-title line-clamp-1">{movie.name}</h2>
          <span className="badge badge-sm badge-info font-bold">
            {movieTypeDetector(movie.kind)}
          </span>
        </div>
        <div className="card-actions gap-8">
          <span className="text-red-500 flex items-center gap-2">
            <FaLayerGroup className="text-lg" /> {movie.episodes}
          </span>
          <span className="text-yellow-500 flex items-center gap-2">
            <FaRegStar className="text-lg" />
            <span>{movie.score}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
