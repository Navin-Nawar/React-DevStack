import HeroPic from "../photos/banner-stack.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-12 lg:py-20">

      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

        <div>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 lg:text-5xl">
            Build Your Ideal

            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Development Stack
            </span>

          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">
            Explore frontend, backend, database, and tooling options.
            Compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-6 flex gap-3">

            <a
              href="#technologies"
              className="rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-4 py-3 text-xs font-semibold text-white"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-md border border-gray-200 px-4 py-3 text-xs font-semibold text-gray-500"
            >
              Learn More
            </a>

          </div>

        </div>

        <img
          src={HeroPic}
          alt="Development Stack"
          className="w-full max-w-md"
        />

      </div>

    </section>
  );
};

export default Hero;