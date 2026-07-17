
// import launchpadImage from "../assets/images/launchpad.png";

function Launchpad() {
  return (

<<<<<<< HEAD
    <section className="bg-[#F7F3EB] px-20 py-20">
      <div className="flex items-start gap-16">

        <div className="w-[50%]">
          {/* <img
            src={launchpadImage}
            alt="Launchpad"
            className="w-full h-[700px] object-cover rounded-3xl"
         /> */}
        </div>
=======
   <section className="bg-[#F7F3EB] py-24 px-16">
      <div className="max-w-7xl mx-auto flex items-center gap-20">
        <div className="w-[55%]">
          {/*<img
            src={launchpadImage}
            alt="Launchpad"
            className="w-full h-[700px] object-cover rounded-[30px]"
         />*/}
>>>>>>> 42ccc329e1fa98511faa29b6b08a1c80f5a20f8a

        {/* Right Side - Content */}
        <div className="w-[50%]">

          <h2 className="text-[47px] font-bold text-[#2166D1] leading-tight mb-6">
            We do more than accelerate,
           we are a national launchpad
         </h2>

         <a
            href="/"
            className="text-xl font-medium hover:underline inline-block mb-12"
          >
            How the program works →
          </a>

          <div className="grid grid-cols-2 gap-7 text-md leading-7">

            <div className="space-y-6">
              <p>
                The NIGCOMSAT accelerator gives you an exclusive stamp of partnership with Nigeria's national satellite operator, letting you build and validate your product directly on our infrastructure.
              </p>

              <p>
                From day one, you'll plug into a global market network and get one-on-one mentorship from VCs, CTOs, and tech leaders. Best of all, it's completely free-no application fees, no equity taken, and you keep 100% of your IP.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                A NigComSat-endorsed startup walks into procurement conversations, investor meetings, and partnership negotiations with something most early-stage companies spend years trying to earn: legitimacy at a national scale.
              </p>

              <p>
                Combined with our zero-cost, zero-equity, zero-IP-claim model, the Accelerator is built entirely around your growth—not ours.
             </p>
            </div>

          </div>

        </div>

      </div>
    </section> 

  );
}

export default Launchpad;