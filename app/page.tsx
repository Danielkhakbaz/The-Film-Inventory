import Hero from "components/hero/hero";
import CardContainer from "components/card/card-container";
import LoadMore from "components/load-more/load-more";

const HomePage = async () => {
  return (
    <div className="flex flex-col gap-16 my-8">
      <Hero />
      <CardContainer />
      <LoadMore />
    </div>
  );
};

export default HomePage;
