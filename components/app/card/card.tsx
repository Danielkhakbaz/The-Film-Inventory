import Image from "next/image";
import dynamic from "next/dynamic";
import { getServerSession } from "next-auth";
import { AuthOptions } from "auth/authOptions";
import MotionComponent from "components/common/motion/motion-component";
import { MovieType } from "components/app/card/card-type";
import { FaLayerGroup, FaRegStar } from "react-icons/fa6";

const CardActions = dynamic(() => import("components/app/card/card-actions"));

type CardProps = {
  movie: MovieType;
  index: number;
};

const Card = async ({ movie, index }: CardProps) => {
  const session = await getServerSession(AuthOptions);

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
    <MotionComponent
      tag="div"
      className="card w-full shadow-2xl"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: index * 0.15,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
    >
      <figure className="w-full h-[37vh] relative">
        <Image
          className="rounded-xl"
          src={`https://shikimori.one${movie.image.original}`}
          alt={movie.name}
          sizes="200"
          fill
        />
      </figure>
      <div className="card-body gap-6 p-6">
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
        {session && <CardActions movie={movie} />}
      </div>
    </MotionComponent>
  );
};

export default Card;
