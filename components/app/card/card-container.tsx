"use client";

import { useState, useEffect } from "react";
import MotionComponent from "components/common/motion/motion-component";
import LoadMore from "components/common/load-more/load-more";
import { fetchMovies } from "actions/movies";
import { useInView } from "react-intersection-observer";

const CardContainer = ({ PageOneMovies }: { PageOneMovies: JSX.Element[] }) => {
  const [movies, setMovies] = useState<JSX.Element[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(2);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchMovies(currentPage).then((res) => {
        setMovies([...movies, ...res]);

        setCurrentPage((previousValue) => previousValue + 1);
      });
    }
  }, [inView, movies, currentPage]);

  return (
    <>
      <MotionComponent
        tag="h2"
        className="font-bold text-4xl"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
          ease: "easeInOut",
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
      >
        Explore Movies
      </MotionComponent>
      <div className="w-full grid grid-cols-2 justify-center items-center gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {PageOneMovies}
        {movies}
      </div>
      <LoadMore ref={ref} />
    </>
  );
};

export default CardContainer;
