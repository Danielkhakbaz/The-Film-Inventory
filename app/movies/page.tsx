"use client";

import dynamic from "next/dynamic";
import MotionComponent from "utils/motion/motion-component";

const PlaylistNotFound = dynamic(
  () => import("components/movies/playlist-notfound/playlist-notfound"),
  {
    ssr: false,
  }
);
const PlaylistMovies = dynamic(
  () => import("components/movies/playlist-movies/playlist-movies"),
  {
    ssr: false,
  }
);

type MoviesPageProps = {
  searchParams: {
    playlist: string;
  };
};

const MoviesPage = ({ searchParams }: MoviesPageProps) => {
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
