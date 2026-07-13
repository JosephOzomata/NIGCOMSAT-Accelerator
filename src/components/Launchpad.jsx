
import launchpadImage from "../assets/images/launchpad.png";

function Launchpad() {
  return (

    <section className="bg-[#F7F3EB] px-20 py-20">
      <div className="flex justify-between items-start mb-16">
        <h2 className="text-6xl font-bold text-blue-700 max-w-3xl leading-tight">
          We do more than accelerate,
          <br />
          we are a national launchpad
        </h2>
        <a href="/" className="text-xl font-medium hover:underline">
          How the program works →
        </a>
      </div>
      <div className="flex gap-16">
        <div className="w-1/2">
          <img
            src={launchpad}
            alt="Launchpad"
            className="rounded-3xl w-full"
          />
        </div>

        <div className="w-1/2 flex gap-10">
          <div className="space-y-6 text-lg leading-8">
            <p> 
              The NIGCOMSAT accelerator gives you an exclusive stamp of partnership with Nigeria’s national satellite operator,
              letting you build and validate your product directly on our infrastructure.
            </p>

            <p>
              From day one, you’ll plug into a global market network and get one-on-one mentorship from VCs, CTOs, and tech leaders.
              Best of all, it’s completely free—no application fees, no equity taken, and you keep 100% of your IP.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-8">

            <p>
              A NigComSat-endorsed startup walks into procurement conversations, investor meetings, and partnership negotiations with
              something most early-stage companies spend years trying to earn: legitimacy at a national scale.
            </p>

            <p>
              Combined with our zero-cost, zero-equity, zero-IP-claim model,
              the Accelerator is built entirely around your growth — not ours.
            </p>

          </div>
        </div>
      </div>
    </section> 

  );
}

export default Launchpad;