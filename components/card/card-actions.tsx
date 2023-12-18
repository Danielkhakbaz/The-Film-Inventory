"use client";

import { FaStar } from "react-icons/fa6";
import { MovieType } from "components/card/card-type";

type CardActionsProps = {
  movie: MovieType;
};

const CardActions = ({ movie }: CardActionsProps) => {
  return (
    <div className="card-actions w-full flex-col flex-nowrap whitespace-nowrap sm:flex-row">
      <div className="tooltip w-full sm:w-1/4" data-tip="Save to Favorites">
        <button
          className="btn btn-warning w-full"
          onClick={() =>
            fetch("http://localhost:3000/api/movies", {
              method: "POST",
              body: JSON.stringify({
                title: movie.name,
                image: movie.image.original,
                kind: movie.kind,
                score: movie.score,
                episodes: movie.episodes,
                isFavorite: true,
              }),
            })
          }
        >
          <FaStar className="text-lg" />
        </button>
      </div>
      <div className="tooltip w-full sm:w-3/4" data-tip="Add to Watch Later">
        <button
          className="btn btn-accent w-full"
          onClick={() =>
            fetch("http://localhost:3000/api/movies", {
              method: "POST",
              body: JSON.stringify({
                title: movie.name,
                image: movie.image.original,
                kind: movie.kind,
                score: movie.score,
                episodes: movie.episodes,
                isWatchLater: true,
              }),
            })
          }
        >
          Watch Later
        </button>
      </div>
    </div>
  );
};

export default CardActions;
