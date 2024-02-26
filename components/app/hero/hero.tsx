import MotionComponent from "components/common/motion/motion-component";

const Hero = async () => {
  return (
    <MotionComponent
      tag="div"
      className="hero w-full h-[550px] border rounded-2xl"
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
      style={{
        backgroundImage: "url(/images/hero-background.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-75 rounded-2xl" />
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-3xl flex flex-col gap-8">
          <h1 className="font-bold text-5xl whitespace-wrap lg:whitespace-nowrap">
            EXPLORE THE WORLD
          </h1>
          <p>
            Discover the magic of cinema on our all-encompassing movie website!
            From timeless classics to the latest releases, we curate an
            immersive experience for film enthusiasts. Join us in celebrating
            the art of storytelling and elevate your movie journey with
            insightful reviews, curated lists, and a vibrant community of fellow
            cinephiles.
          </p>
        </div>
      </div>
    </MotionComponent>
  );
};

export default Hero;
