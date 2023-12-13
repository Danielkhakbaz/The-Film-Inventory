"use server";

export const fetchMovies = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity`
  );

  const data = await response.json();

  return data;
};
