"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import PlaylistCard from "app/movies/_components/playlist-movies/_components/playlist-card";
import { MovieType } from "components/card/card-type";

type PlaylistMoviesProps = {
  playlist: string;
};

const PlaylistMovies = ({ playlist }: PlaylistMoviesProps) => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const { status } = useSession();

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

  if (status === "authenticated") {
    return (
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
