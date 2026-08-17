import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Portfolio = () => {
  const [activeCohort, setActiveCohort] = useState(1)

  // Animation variants
  const slideVariants = {
    hidden: { x: 100, opacity: 0 },
    enter: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { x: -100, opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } },
  }

  const cohort1 = [
  {
    name: "CarbonEx",
    description: "Clean-energy startup in Abuja using IoT-enabled smart cookstoves, AI, and blockchain to track and monetize carbon savings, making clean cooking affordable and verifiable across Africa.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/4-1-1920x445.png",
    sector: "ClimateTech / Energy"
  },
  {
    name: "Cubbes",
    description: "AI-powered edtech super-app for Nigerian university students, offering digitized lecture notes, past questions, mentorship, and productivity tools. Serves 50,000+ students across 100+ institutions.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/2-1-1920x445.png",
    sector: "EdTech"
  },
  {
    name: "Innovia Labs",
    description: "DeepTech and digital manufacturing makerspace in Lagos. Provides training, prototyping, incubation, and access to advanced machinery for STEAM innovation and hardware startups.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/3-1-1920x445.png",
    sector: "DeepTech / Hardware"
  },
  {
    name: "Moon Innovations",
    description: "Smart solar infrastructure company delivering the Solar Utility Box — combining clean electricity, internet connectivity, and AI-powered security for homes, businesses, and health centers.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/5-1-1920x445.png",
    sector: "Energy / IoT"
  },
  {
    name: "SpaceBar Africa",
    description: "Nigeria’s first public space observatory in Lagos, offering telescopes, VR cubicles, astrophotography labs, and astronomy education to democratize access to space science.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/6-1-1920x445.png",
    sector: "SpaceTech / Education"
  },
  {
    name: "RecycleStack",
    description: "Cleantech marketplace connecting Nigerians to recyclers and buyers of solid waste. Converts waste to wealth via an online platform, promoting circular economy and sustainability.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/7-1-1920x445.png",
    sector: "Cleantech / Recycling"
  }
]


const cohort2 = [
  {
    name: "Connected Development (CODE)",
    description: "NGO founded in Abuja, known for its Follow The Money initiative. Uses civic tech to track government spending and empower marginalized communities in WASH, health, and education.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/6-1536x356.png",
    sector: "CivicTech / NGO"
  },
  {
    name: "LearNEXO (Learnovo)",
    description: "Digital academy delivering practical tech skills training in Nigeria. Offers mentorship, kids programs, and 50+ courses in web dev, AI, design, and cybersecurity.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/5-1536x356.png",
    sector: "EdTech / Skills"
  },
  {
    name: "Teachly",
    description: "AI-powered exam prep platform for WAEC, NECO, and JAMB. Provides CBT practice, live tutoring, and parent dashboards. Trusted by 2,000+ Nigerian families.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/3-1920x444.png",
    sector: "EdTech / Exam Prep"
  },
  {
    name: "CHOTA (Cheetos Nigeria)",
    description: "PepsiCo’s local production of Cheetos snacks in Lagos, using 90% Nigerian raw materials. Expands Nigeria’s agro-processing and FMCG sector.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/2-1920x444.png",
    sector: "FoodTech / FMCG"
  },
  {
    name: "MELON (Egusi Agribusiness)",
    description: "Agribusiness initiative leveraging Nigeria’s melon (egusi) crop. Focuses on mechanization, storage, and exports to meet rising demand in West Africa and diaspora markets.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/MELON-LOGO-PNG-2-1-1920x368.png",
    sector: "Agriculture"
  },
  {
    name: "FLOEWS",
    description: "Flood Early Warning System in Nigeria. Provides real-time hydrological data, risk assessments, and disaster preparedness dashboards for communities.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/7-1024x237.png",
    sector: "ClimateTech / Disaster Management"
  },
  {
    name: "GeoNet",
    description: "Geospatial services company in Nigeria offering surveys, GIS, hydrographic mapping, and Earth observation solutions for oil, gas, and agriculture.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/8-1024x237.png",
    sector: "GeoTech / GIS"
  },
  {
    name: "FloodShield Jigawa",
    description: "State-level flood prevention initiative deploying amphibious excavators and community-based programs to desilt rivers and mitigate flooding risks.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/9-1024x237.png",
    sector: "ClimateTech / Infrastructure"
  },
  {
    name: "Agro Guard",
    description: "AI-powered farming assistant helping Nigerian farmers diagnose crop diseases, predict weather, and manage farm records. Built by Nuvanta Africa.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/10-1024x237.png",
    sector: "AgriTech / AI"
  },
  {
    name: "MyFerry",
    description: "Water transport startup in Lagos offering ferry bookings, yacht cruises, and transfers. Provides QR e-tickets, live tracking, and safety-certified vessels.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/4-1920x444.png",
    sector: "TransportTech / Mobility"
  }
]


  

  return (
    <div className="w-full h-screen flex items-center justify-center mt-30 mb-20">
      <div className='m-10'>
        <h1 className="text-4xl font-bold text-center">Portfolio</h1>
        {/* Cohort Tabs */}
        <div className="w-full flex items-center justify-center mt-8">
          <div className="w-[60%] grid grid-cols-3 gap-4 text-center cursor-pointer">
            <p
              onClick={() => setActiveCohort(1)}
              className={`text-lg font-semibold border-b-2 ${activeCohort === 1 ? 'border-b-black' : 'border-b-gray-300'}`}
            >
              Cohort 1
            </p>
            <p
              onClick={() => setActiveCohort(2)}
              className={`text-lg font-semibold border-b-2 ${activeCohort === 2 ? 'border-b-black' : 'border-b-gray-300'}`}
            >
              Cohort 2
            </p>
            <p
              onClick={() => setActiveCohort(3)}
              className={`text-lg font-semibold border-b-2 ${activeCohort === 3 ? 'border-b-black' : 'border-b-gray-300'}`}
            >
              Cohort 3
            </p>
          </div>
        </div>
        {/* Cohort Content */}
        <motion.div
          key={activeCohort}
          variants={slideVariants}
          initial="hidden"
          animate="enter"
          exit="exit"
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 overflow-y-auto"
  style={{ maxHeight: "600px" }}
        >
          {activeCohort === 1 && (
            cohort1.map((org, i) => (
              <div key={i} className="bg-gray-200 h-64 flex flex-col items-center justify-center p-4">
                <img src={org.logo} alt={`${org.name} Logo`} className="h-20 object-contain mb-2" />
                <p className="text-sm text-center font-medium">{org.name}</p>
                <p className="text-xs text-center">{org.description}</p>
              </div>
            ))
          )}
          {activeCohort === 2 && (
            cohort2.map((org, i) => (
              <div key={i} className="bg-gray-200 h-64 flex flex-col items-center justify-center p-4">
                <img src={org.logo} alt={`${org.name} Logo`} className="h-20 object-contain mb-2" />
                <p className="text-sm text-center font-medium">{org.name}</p>
                <p className="text-xs text-center">{org.description}</p>
              </div>
            ))
          )}
          {activeCohort === 3 && (
            <div className="col-span-full bg-white-200 h-[500px] flex items-center justify-center text-9xl font-extrabold">
              COMING SOON
            </div>
          )}
        </motion.div>
            </div>
      </div>
  )
}

export default Portfolio
