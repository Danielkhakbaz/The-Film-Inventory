import AllMovies from "app/movies/_components/all-movies/all-movies";

const MoviesPage = async ({
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
    return <AllMovies />;
  }

  return <p>{searchParams.playlist}</p>;
};

export default MoviesPage;
