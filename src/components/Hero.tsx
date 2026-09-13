import HeroPic from "../photos/banner-stack.png"

const Hero = () => {
  return (
    <section className="px-4 py-8 container mx-auto">

      <div className="mx-auto flex  items-center justify-between  px-8 py-8">

        <div>

         <h1 className="text-[38px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#111827]">
  Build Your Ideal
  <span className="block">
    <span className="bg-gradient-to-r from-[#FF5722] to-[#D81B7E] bg-clip-text text-transparent">
      Development
    </span>{" "}
    <span className="bg-gradient-to-r from-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
      Stack
    </span>
  </span>
</h1>


          <p className="mt-3 max-w-[470px] text-[10px] leading-[1.7] text-gray-500">
            Explore frontend, backend, database, and tooling options.
            Compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-5 flex items-center gap-2">

            <a
              href="#technologies"
              className="rounded-sm bg-orange-500 px-3 py-2 text-[8px] font-semibold text-white transition hover:bg-orange-600"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-sm border border-gray-200 bg-white px-4 py-2 text-[8px] font-semibold text-gray-500 transition hover:bg-gray-50"
            >
              Learn More
            </a>

          </div>
        </div>

        <img src={HeroPic} alt="" />

      </div>
    </section>
  );
};

export default Hero;
