"use server";

import Card from "components/app/card/card";
import { MovieType } from "components/app/card/card-type";

export const fetchMovies = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity`
  );

  const data = await response.json();

  return data.map((movie: MovieType, index: number) => (
    <Card key={movie.id} movie={movie} index={index} />
  ));
};
