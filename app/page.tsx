import Hero from "components/hero/hero";
import CardContainer from "components/card/card-container";

const HomePage = async () => {
  return (
    <div className="flex flex-col gap-16 my-8">
      <Hero />
      <CardContainer />
    </div>
  );
};

export default HomePage;
