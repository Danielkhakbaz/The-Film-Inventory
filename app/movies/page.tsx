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

  return <>{searchParams.playlist}</>;
};

export default MoviesPage;
