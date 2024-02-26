"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Filter from "components/movies/playlist-movies/components/filter";
import Sort from "components/movies/playlist-movies/components/sort";
import { MovieType } from "components/app/card/card-type";

const PlaylistCard = dynamic(
  () => import("components/movies/playlist-movies/components/playlist-card"),
  {
    ssr: false,
  }
);

type PlaylistMoviesProps = {
  playlist: string;
};

const PlaylistMovies = ({ playlist }: PlaylistMoviesProps) => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const { status } = useSession();

  const searchParams = useSearchParams();

  const filterSearchParams = searchParams.get("filter");
  const sortSearchParams = searchParams.get("sort");

  useEffect(() => {
    const fetchMovies = async () => {
      if (!filterSearchParams) {
        if (sortSearchParams) {
          await fetch(
            `https://the-film-inventory.vercel.app/api/movies?playlist=${playlist}&sort=${sortSearchParams}`
          )
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setMovies(data);
            });
        } else {
          await fetch(
            `https://the-film-inventory.vercel.app/api/movies?playlist=${playlist}`
          )
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setMovies(data);
            });
        }
      } else {
        if (sortSearchParams) {
          await fetch(
            `https://the-film-inventory.vercel.app/api/movies?playlist=${playlist}&filter=${filterSearchParams}&sort=${sortSearchParams}`
          )
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setMovies(data);
            });
        } else {
          await fetch(
            `https://the-film-inventory.vercel.app/api/movies?playlist=${playlist}&filter=${filterSearchParams}`
          )
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setMovies(data);
            });
        }
      }
    };

    fetchMovies();
  }, [playlist, sortSearchParams, filterSearchParams]);

  if (status === "authenticated") {
    return (
      <>
        <div className="flex gap-4">
          <Filter />
          <Sort />
        </div>
        {movies.length > 0 ? (
          <>
            <p className="text-3xl mb-4">
              {playlist === "favorites"
                ? "Favorite"
                : playlist === "watch-later" && "Watch Later"}
            </p>
            <div className="w-full grid grid-cols-2 justify-center items-center gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {movies.map((movie: MovieType, index: number) => (
                <PlaylistCard
                  key={movie.id}
                  movie={movie}
                  index={index}
                  playlist={playlist}
                  setMovies={setMovies}
                />
              ))}
            </div>
          </>
        ) : (
          <p className="text-2xl mt-4">No Movies in this playlist!</p>
        )}
      </>
    );
  }

  if (status === "unauthenticated") {
    return (
      <p className="text-2xl text-center">
        You should be authenticated first to access these data.
      </p>
    );
  }
};

export default PlaylistMovies;
