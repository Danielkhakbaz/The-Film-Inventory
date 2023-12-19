"use client";

import PlaylistNotFound from "app/movies/_components/playlist-notfound/playlist-notfound";
import PlaylistMovies from "app/movies/_components/playlist-movies/playlist-movies";
import MotionComponent from "components/motion/motion-component";

const MoviesPage = ({
  searchParams,
}: {
  searchParams: {
    playlist: string;
  };
}) => {
  if (
    searchParams.playlist !== "favorites" &&
    searchParams.playlist !== "watch-later"
  ) {
    return <PlaylistNotFound />;
  }

  return (
    <section className="py-6">
      <MotionComponent
        tag="h2"
        className="font-bold text-5xl"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          ease: "easeInOut",
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
      >
        <PlaylistMovies playlist={searchParams.playlist} />
      </MotionComponent>
    </section>
  );
};

export default MoviesPage;
