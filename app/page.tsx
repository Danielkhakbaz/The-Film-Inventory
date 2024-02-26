import Hero from "components/app/hero/hero";
import CardContainer from "components/app/card/card-container";
import { fetchMovies } from "actions/movies";

const HomePage = async () => {
  const PageOneMovies = await fetchMovies(1);

  return (
    <div className="flex flex-col gap-16 my-8">
      <Hero />
      <CardContainer PageOneMovies={PageOneMovies} />
    </div>
  );
};

export default HomePage;
