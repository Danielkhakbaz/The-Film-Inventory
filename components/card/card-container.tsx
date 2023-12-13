import Card from "components/card/card";
import { fetchMovies } from "services/action";

type MovieType = {
  id: number;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  score: string;
  episodes: number;
};

const CardContainer = async () => {
  const movies = await fetchMovies(1);

  return (
    <>
      <h2 className="font-bold text-4xl">Explore Movies</h2>
      <div className="w-full grid grid-cols-2 justify-center items-center gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie: MovieType) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
