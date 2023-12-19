"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MotionComponent from "components/motion/motion-component";
import { MovieType } from "components/card/card-type";

type PlaylistMoviesProps = {
  playlist: string;
};

const PlaylistMovies = ({ playlist }: PlaylistMoviesProps) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      await fetch(`http://localhost:3000/api/movies?playlist=${playlist}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setMovies(data);
        });
    };

    fetchMovies();
  }, [playlist]);

  return (
    <>
      <p className="text-3xl mb-4">
        {playlist === "favorites"
          ? "Favorite"
          : playlist === "watch-later" && "Watch Later"}
      </p>
      <div className="w-full grid grid-cols-2 justify-center items-center gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie: MovieType, index: number) => (
          <MotionComponent
            key={movie.id}
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
                src={`https://shikimori.one${movie.image}`}
                alt={movie.name}
                sizes="200"
                fill
              />
            </figure>
            <div className="card-body gap-6 p-6">
              <div className="flex justify-between items-center">
                <h2 className="card-title line-clamp-1">{movie.name}</h2>
                <span className="badge badge-sm badge-info font-bold">
                  {movie.kind}
                </span>
              </div>
              <button
                className="btn btn-error"
                onClick={() => {
                  fetch(
                    `http://localhost:3000/api/movies?playlist=${playlist}`,
                    {
                      method: "DELETE",
                      body: JSON.stringify({
                        id: movie.id,
                      }),
                    }
                  ).then(async () => {
                    fetch(
                      `http://localhost:3000/api/movies?playlist=${playlist}`
                    )
                      .then((res) => {
                        return res.json();
                      })
                      .then((data) => {
                        setMovies(data);
                      });
                  });
                }}
              >
                Remove
              </button>
            </div>
          </MotionComponent>
        ))}
      </div>
    </>
  );
};

export default PlaylistMovies;
