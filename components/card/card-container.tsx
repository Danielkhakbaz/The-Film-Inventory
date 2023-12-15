"use client";

import { useState, useEffect } from "react";
import Card from "components/card/card";
import LoadMore from "components/load-more/load-more";
import { fetchMovies } from "services/action";
import { useInView } from "react-intersection-observer";
import { MovieType } from "components/card/card-type";

const CardContainer = ({ PageOneMovies }: { PageOneMovies: MovieType[] }) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
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
      <h2 className="font-bold text-4xl">Explore Movies</h2>
      <div className="w-full grid grid-cols-2 justify-center items-center gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {PageOneMovies.map((movie: MovieType, index: number) => (
          <Card key={movie.id} movie={movie} index={index} />
        ))}
        {movies.map((movie: MovieType, index: number) => (
          <Card key={movie.id} movie={movie} index={index} />
        ))}
      </div>
      <LoadMore ref={ref} />
    </>
  );
};

export default CardContainer;
