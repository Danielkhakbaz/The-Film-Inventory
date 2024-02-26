"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { MovieType } from "components/app/card/card-type";
import { FaStar } from "react-icons/fa6";

const Toast = dynamic(() => import("utils/toast/toast"), {
  ssr: false,
});

type CardActionsProps = {
  movie: MovieType;
};

const CardActions = ({ movie }: CardActionsProps) => {
  const [toastMessage, setToastMessage] = useState({
    message: "",
    isSuccess: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastMessage({
        message: "",
        isSuccess: false,
      });
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [toastMessage]);

  return (
    <>
      <div className="card-actions w-full flex-col flex-nowrap gap-4 whitespace-nowrap md:flex-row">
        <div className="tooltip w-full md:w-1/4" data-tip="Save to Favorites">
          <button
            className="btn btn-warning"
            onClick={async () => {
              const response = await fetch("http://localhost:3000/api/movies", {
                method: "POST",
                body: JSON.stringify({
                  id: movie.id,
                  name: movie.name,
                  image: movie.image.original,
                  kind: movie.kind,
                  score: movie.score,
                  episodes: movie.episodes,
                  playlist: "favorites",
                }),
              });

              setToastMessage({
                message: "Saved in the favorites!",
                isSuccess: true,
              });

              if (!response.ok) {
                setToastMessage({
                  message: "This anime is already in the favorites!",
                  isSuccess: false,
                });
              }
            }}
          >
            <FaStar />
          </button>
        </div>
        <div className="tooltip w-full md:w-3/4" data-tip="Add to Watch Later">
          <button
            className="btn btn-accent w-full"
            onClick={async () => {
              const response = await fetch("http://localhost:3000/api/movies", {
                method: "POST",
                body: JSON.stringify({
                  id: movie.id,
                  name: movie.name,
                  image: movie.image.original,
                  kind: movie.kind,
                  score: movie.score,
                  episodes: movie.episodes,
                  playlist: "watch-later",
                }),
              });

              setToastMessage({
                message: "Saved in the watch later!",
                isSuccess: true,
              });

              if (!response.ok) {
                setToastMessage({
                  message: "This anime is already in the watch later!",
                  isSuccess: false,
                });
              }
            }}
          >
            Watch Later
          </button>
        </div>
      </div>
      {toastMessage.message && <Toast toastMessage={toastMessage} />}
    </>
  );
};

export default CardActions;
