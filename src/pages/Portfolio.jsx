import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa';
  const cohort1 = [
  {
    id: 1,
    name: "CarbonEx",
    description: "Clean-energy startup in Abuja using IoT-enabled smart cookstoves, AI, and blockchain to track and monetize carbon savings, making clean cooking affordable and verifiable across Africa.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/4-1-1920x445.png",
    companyUrl: "https://carbonex.africa",
  },
  {
    id: 2,
    name: "Cubbes",
    description: "AI-powered edtech super-app for Nigerian university students, offering digitized lecture notes, mentorship, and productivity tools. Serves 50,000+ students across 100+ institutions.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/2-1-1920x445.png",
    companyUrl: "https://cubbes.app",
  },
  {
    id: 3,
    name: "Innovia Labs",
    description: "DeepTech and digital manufacturing makerspace in Lagos. Provides training, prototyping, incubation, and access to advanced machinery for STEAM innovation and hardware startups.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/3-1-1920x445.png",
    companyUrl: "https://www.innovialabsafrica.com",
  },
  {
    id: 4,
    name: "Moon Innovations",
    description: "Smart solar infrastructure company delivering the Solar Utility Box — combining clean electricity, internet connectivity, and AI-powered security for homes, businesses, and health centers.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/5-1-1920x445.png",
    companyUrl: "https://www.mooninnovations.io"
  },
  {
    id: 5,
    name: "SpaceBar Africa",
    description: "Nigeria's first public space observatory in Lagos, offering telescopes, VR cubicles, astrophotography labs, and astronomy education to democratize access to space science.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/6-1-1920x445.png",
    companyUrl: "https://spacebar.africa"
  },
  {
    id: 6,
    name: "RecycleStack",
    description: "Cleantech marketplace connecting Nigerians to recyclers and buyers of solid waste. Converts waste to wealth via an online platform, promoting circular economy and sustainability.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/7-1-1920x445.png",
    companyUrl: "https://recyclestack.com"
  }
];

const cohort2 = [
  {
    id: 7,
    name: "Connected Development (CODE)",
    description: "NGO founded in Abuja, known for its Follow The Money initiative. Uses civic tech to track government spending and empower marginalized communities in WASH, health, and education.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/6-1536x356.png",
    companyUrl: "https://www.connecteddevelopment.org"
  },
  {
    id: 8,
    name: "LearNEXO (Learnovo)",
    description: "Digital academy delivering practical tech skills training in Nigeria. Offers mentorship, kids programs, and 50+ courses in web dev, AI, design, and cybersecurity.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/5-1536x356.png",
    companyUrl: "https://learnovo.com"
  },
  {
    id: 9,
    name: "Teachly",
    description: "AI-powered exam prep platform for WAEC, NECO, and JAMB. Provides CBT practice, live tutoring, and parent dashboards. Trusted by 2,000+ Nigerian families.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/3-1920x444.png",
    companyUrl: "https://teachly.com.ng"
  },
  {
    id: 10,
    name: "CHOTA",
    description: "Chota AVS is designed to address challenges associated with unreliable location data in emerging markets. The system leverages aggregated location intelligence to make addresses verifiable and actionable.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/2-1920x444.png",
    companyUrl: "https://chota.ng"
  },
  {
    id: 11,
    name: "MELON (Egusi Agribusiness)",
    description: "Agribusiness initiative leveraging Nigeria's melon (egusi) crop. Focuses on mechanization, storage, and exports to meet rising demand in West Africa and diaspora markets.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/MELON-LOGO-PNG-2-1-1920x368.png",
    companyUrl: "https://www.melon.ng"
  },
  {
    id: 12,
    name: "FLOEWS",
    description: "Flood Early Warning System in Nigeria. Provides real-time hydrological data, risk assessments, and disaster preparedness dashboards for communities.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/7-1024x237.png",
    companyUrl: "https://taplink.cc/floewslink"
  },
  {
    id: 13,
    name: "GeoNet",
    description: "Geospatial services company in Nigeria offering surveys, GIS, hydrographic mapping, and Earth observation solutions for oil, gas, and agriculture.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/8-1024x237.png",
    companyUrl: "https://geonet.geoinc.co"
  },
  {
    id: 14,
    name: "FloodShield Jigawa",
    description: "State-level flood prevention initiative deploying amphibious excavators and community-based programs to desilt rivers and mitigate flooding risks.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/9-1024x237.png",
    companyUrl: "https://floodshieldjigawa.vercel.app"
  },
  {
    id: 15,
    name: "Agro Guard",
    description: "AI-powered farming assistant helping Nigerian farmers diagnose crop diseases, predict weather, and manage farm records. Built by Nuvanta Africa.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/10-1024x237.png",
    companyUrl: "https://agroguard.tech"
  },
  {
    id: 16,
    name: "MyFerry",
    description: "Water transport startup in Lagos offering ferry bookings, yacht cruises, and transfers. Provides QR e-tickets, live tracking, and safety-certified vessels.",
    logo: "https://ncsaccelerate.com/wp-content/uploads/2026/05/4-1920x444.png",
    companyUrl: "https://myferry.space"
  }
];

const tabContentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { staggerChildren: 0.05, duration: 0.3 } 
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function PortfolioSection() {
  const [activeCohort, setActiveCohort] = useState('cohort1');

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Portfolio
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-200/80 p-1 rounded-xl flex gap-1 relative">
            <button
              onClick={() => setActiveCohort('cohort1')}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 relative z-10 ${
                activeCohort === 'cohort1' ? 'text-black shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Cohort 1
              {activeCohort === 'cohort1' && (
                <motion.div layoutId="activePortfolioTab" className="absolute inset-0 bg-white rounded-lg -z-10" />
              )}
            </button>
            <button
              onClick={() => setActiveCohort('cohort2')}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 relative z-10 ${
                activeCohort === 'cohort2' ? 'text-black shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Cohort 2
              {activeCohort === 'cohort2' && (
                <motion.div layoutId="activePortfolioTab" className="absolute inset-0 bg-white rounded-lg -z-10" />
              )}
            </button>
            <button
              onClick={() => setActiveCohort('cohort3')}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 relative z-10 ${
                activeCohort === 'cohort3' ? 'text-black shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Cohort 3
              {activeCohort === 'cohort3' && (
                <motion.div layoutId="activePortfolioTab" className="absolute inset-0 bg-white rounded-lg -z-10" />
              )}
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
          
            {activeCohort === 'cohort1' && (
              <motion.div
                key="cohort1-grid"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {cohort1.map((org) => (
                  <motion.div
                    key={org.id}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col"
                  >
                    <img src={org.logo} alt={`${org.name} Logo`} className="h-20 object-contain mb-2" />
                    <div className="border-t border-gray-100 pt-4 text-left">
                      <h3 className="text-lg font-bold text-gray-900">{org.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed text-left flex-1 mb-4">
                      {org.description}
                    </p>
                    <div className="mt-6 pt-4 pb-4 grid grid-cols-4 w-[50%] border-t border-gray-100 text-left">
                        <a 
                          href={org.companyUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors inline-block mt-0.5 underline decoration-2 decoration-indigo-100 hover:decoration-indigo-600"
                        >
                          <ExternalLink />
                        </a>

                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeCohort === 'cohort2' && (
              <motion.div
                key="cohort2-grid"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {cohort2.map((org) => (
                  <motion.div
                    key={org.id}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col"
                  >
                    <img src={org.logo} alt={`${org.name} Logo`} className="h-20 object-contain mb-2" />
                    <div className="border-t border-gray-100 pt-4 text-left">
                      <h3 className="text-lg font-bold text-gray-900">{org.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed text-left flex-1 mb-4">
                      {org.description}
                    </p>
                    <div className="mt-6 pt-4 pb-4 grid grid-cols-4 w-[50%] border-t border-gray-100 text-left">
                        <a 
                          href={org.companyUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors inline-block mt-0.5 underline decoration-2 decoration-indigo-100 hover:decoration-indigo-600"
                        >
                          <ExternalLink />
                        </a>

                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeCohort === 'cohort3' && (
              <motion.div
                key="cohort3-coming-soon"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="p-16 text-center max-w-xl mx-auto flex flex-col items-center justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Coming Soon</h3>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}