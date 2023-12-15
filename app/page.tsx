import Hero from "components/hero/hero";
import CardContainer from "components/card/card-container";
import { fetchMovies } from "services/action";

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
