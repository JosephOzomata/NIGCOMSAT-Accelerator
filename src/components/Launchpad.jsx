
import launchpadImage from "../images/launchpad.png";

function Launchpad() {
  return (
    <section className="bg-gray-200 py-24 px-4">
      <div className="max-w-7xl mx-auto lg:grid-cols-2 lg:grid sm:hidden gap-10">
        <div className="w-full">
          <img
            src={launchpadImage}
            alt="Launchpad"
            className="w-full h-[700px] object-cover rounded-[30px]"
          />

        </div>

        <div className="w-full">
          <p className="uppercase text-[#2166D1] tracking-widest font-semibold mb-3">
            NIGCOMSAT Accelerator
          </p>

          <h2 className="text-[60px] font-bold leading-tight text-[#2166D1] mb-6">
            Build.
            <br />
            Launch.
            <br />
            Scale.
          </h2>

          <p className="text-xl text-gray-700 leading-9 mb-10">
            More than an accelerator—we're a launchpad for ambitious founders,
            providing the mentorship, partnerships, and national infrastructure
            needed to transform bold ideas into lasting impact.
          </p>

          <button className="bg-[#2166D1] text-white px-8 py-4 rounded-full hover:bg-blue-800 transition duration-300">
            Join the Accelerator
          </button>

        </div>

      </div>

      <div className="max-w-7xl mx-auto grid lg:hidden sm:grid-cols-1 gap-10">
        <div className="w-full">
          <p className="uppercase text-[#2166D1] tracking-widest font-semibold mb-3">
            NIGCOMSAT Accelerator
          </p>

          <h2 className="text-[60px] font-bold leading-tight text-[#2166D1] mb-6">
            Build.
            <br />
            Launch.
            <br />
            Scale.
          </h2>

          <p className="text-xl text-gray-700 leading-9 mb-10">
            More than an accelerator—we're a launchpad for ambitious founders,
            providing the mentorship, partnerships, and national infrastructure
            needed to transform bold ideas into lasting impact.
          </p>

          <button className="bg-[#2166D1] text-white px-8 py-4 rounded-full hover:bg-blue-800 transition duration-300">
            Join the Accelerator
          </button>

        </div>

        <div className="w-full">
          <img
            src={launchpadImage}
            alt="Launchpad"
            className="w-full h-[700px] object-cover rounded-[30px]"
          />

        </div>

      </div>

    </section> 

  );
}

export default Launchpad;