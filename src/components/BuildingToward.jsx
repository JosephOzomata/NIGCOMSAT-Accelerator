import React from 'react';
import magnifying from '../images/magnifying.jpg';
import equip from '../images/equip.png';
import link from '../images/link.jpg';
import support from '../images/support.png';

export default function BuildingToward() {
  const cards = [
    {
      id: 1,
      title: "Identify and Support",
      desc: "Identify and support nascent actors in the Nigerian space ecosystem.",
      bgColor: "bg-amber-50/60",
      iconUrl: magnifying
    },
    {
      id: 2,
      title: "Equip adjacent-industry Startups",
      desc: "Equip adjacent-industry startups with tools to build on space infrastructure.",
      bgColor: "bg-slate-100/70",
      iconUrl: equip
    },
    {
      id: 3,
      title: "Connect Founders",
      desc: "Connect founders to world-class mentorship and funding networks.",
      bgColor: "bg-sky-50/80", 
      iconUrl: link
    },
    {
      id: 4,
      title: "Support FMC's target",
      desc: "Contribute to the Federal Ministry of Communications' target: 100% increase in tech-enabled startups with procurement access.",
      bgColor: "bg-emerald-50/50", 
      iconUrl: support
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#F7F3EB] flex flex-col items-center justify-center p-6 md:p-12">

        <div className="text-center mb-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
                What we're building toward
            </h2>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative rounded-xl p-8 min-h-[180px] flex flex-col justify-start transition-all duration-300 hover:shadow-md ${card.bgColor}`}
          >
            <div className="max-w-[80%] z-10 flex flex-col gap-2">
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                {card.title}
              </h3>
              <p className="text-sm font-medium text-slate-600 leading-relaxed">
                {card.desc}
              </p>
            </div>

            <div className="absolute bottom-4 right-4 w-16 h-16 pointer-events-none opacity-15 select-none z-0">
              <img 
                src={card.iconUrl} 
                alt="" 
                className="w-full h-full object-contain grayscale"
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}