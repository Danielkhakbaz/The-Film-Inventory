import MotionComponent from "utils/motion/motion-component";

const AboutPage = async () => {
  return (
    <section className="py-6">
      <MotionComponent
        tag="h2"
        className="font-bold text-5xl"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          ease: "easeInOut",
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
      >
        About
      </MotionComponent>
      <p className="text-lg my-8">
        <MotionComponent
          tag="span"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
            ease: "easeInOut",
            duration: 0.5,
          }}
          viewport={{ amount: 0 }}
        >
          Welcome to our anime sanctuary, a digital haven where the vibrant and
          captivating world of Japanese animation comes to life. As passionate
          purveyors of this unique art form, our anime website is dedicated to
          providing enthusiasts and newcomers alike with an immersive and
          curated experience. From timeless classics to the latest releases,
          we&apos;ve meticulously assembled a diverse collection of anime titles
          that span genres, ensuring there&apos;s something for every anime
          aficionado.
        </MotionComponent>
        <br />
        <br />
        <MotionComponent
          tag="span"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
            ease: "easeInOut",
            duration: 0.5,
          }}
          viewport={{ amount: 0 }}
        >
          Dive into a visual feast as you navigate our user-friendly interface,
          designed with both aesthetics and functionality in mind. Our website
          is a treasure trove of handpicked anime series and films, offering a
          gateway to fantastical realms, compelling narratives, and
          unforgettable characters. Immerse yourself in the rich tapestry of
          Japanese animation and explore the nuances of storytelling, artistry,
          and cultural influences that make each anime a unique masterpiece.
        </MotionComponent>
        <br />
        <br />
        <MotionComponent
          tag="span"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            ease: "easeInOut",
            duration: 0.5,
          }}
          viewport={{ amount: 0 }}
        >
          To enhance your anime journey, we go beyond mere streaming by offering
          insightful reviews, character analyses, and behind-the-scenes glimpses
          into the creation of these animated gems. Our community of anime
          enthusiasts, united by their shared love for this captivating medium,
          contributes to a vibrant tapestry of discussions, recommendations, and
          shared excitement. Join us in celebrating the art of anime and
          fostering connections within a community that understands the profound
          impact these animated tales can have on the human experience.
        </MotionComponent>
        <br />
        <br />
        <MotionComponent
          tag="span"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            ease: "easeInOut",
            duration: 0.5,
          }}
          viewport={{ amount: 0 }}
        >
          Whether you&apos;re a seasoned otaku or just starting your anime
          exploration, our website is your passport to an extraordinary world of
          animation. We invite you to embark on a journey where the fantastical
          meets the familiar, and each click opens a door to new and enchanting
          anime adventures. Welcome to our anime haven; your epic anime odyssey
          begins here.
        </MotionComponent>
      </p>
    </section>
  );
};

export default AboutPage;
