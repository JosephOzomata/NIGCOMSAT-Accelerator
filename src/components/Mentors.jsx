import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Aminu from '../images/Aminu Bin Ibrahim.jpg';
import Caroline from '../images/Caroline Alenoghena.png';
import Isaac from '../images/Isaac Bewarang.jpg';
import Joel from '../images/Joel James Mandong.jpg';
import Zahra from '../images/Zahra Idries.jpg';
import Asmau from '../images/Asmau Abubakar.jpg';
import Daniil from '../images/Daniil Sourianos.jpg';
import Oche from '../images/Oche Patrick Oche.jpg';
import Mutiat from '../images/Mutiat Abiola Yusuff-Akinlabi.jpg';
import Abubakar from '../images/Abubakar Shehu.jpg';
import Olukotun from '../images/Olukotun Olanrewaju James.jpg';
import Sonter from '../images/Sonter Julius Zever.jpg';
import Kossiso from '../images/Kossiso Udodi headshot.png';

const COHORT_2_MENTORS = [
  {
    id: 1,
    name: "Aminu Bin Ibrahim",
    image: Aminu,
    bio: "Visionary tech entrepreneur, ecosystem builder, and blockchain enterprise solutions architect dedicated to accelerating digital innovation in Africa."
  },
  {
    id: 2,
    name: "Caroline Alenoghena",
    image: Caroline,
    bio: "Director of the Entrepreneurship Centre and the visionary founder of the FUTEC Incubation Hub at the Federal University of Technology (FUT) Minna, Nigeria."
  },
  {
    id: 3,
    name: "Isaac Bewarang",
    image: Isaac,
    bio: "Technology and cybersecurity professional committed to advancing secure digital identity and strengthening cybersecurity awareness."
  },
  {
    id: 4,
    name: "Joel James Mandong",
    image: Joel,
    bio: "IT and Systems Engineer with years of hands-on experience in information security, networking, cloud services, and enterprise infrastructure management."
  },
  {
    id: 5,
    name: "Zahra Idries Mohammed",
    image: Zahra,
    bio: "Tech advocate, AI educator, and community leader dedicated to empowering women and young innovators across Nigeria."
  },
  {
    id: 6,
    name: "Asmau Abubakar",
    image: Asmau,
    bio: "Advocate for technology and community development, Co. Organizer for Google Developers Group Jalingo (GDG)."
  }
];

const COHORT_3_MENTORS = [
  {
    id: 11,
    name: "Daniil Sourianos",
    image: Daniil,
    bio: "Ex-KPMG consultant with an MBA & Engineering background. Expert in digital strategy, AI transformation, and tech governance across EMEA.",
    socialPlatform: "Instagram",
    socialUrl: "https://www.instagram.com/dsourianos?igsh=MXg4MmdwZmIzZW05bQ==&igsi=MXg4MmdwZmIzZW05bQ=="
  },
  {
    id: 12,
    name: "Oche Patrick Oche",
    image: Oche,
    bio: "Digital Transformational Leader, Trainer and Management Consultant specializing in Digital Transformation, Information Security, Data and Privacy management etc.",
    socialPlatform: "LinkedIn",
    socialUrl: "https://linkedin.com/in/ochepatrickoche"
  },
  {
    id: 13,
    name: "Mutiat Abiola Yusuff-Akinlabi",
    image: Mutiat,
    bio: "Strategic consultant, and social impact advocate with interests in innovation, digital transformation, and sustainable risk management.",
    socialPlatform: "LinkedIn",
    socialUrl: "https://www.linkedin.com/in/m-a-yusuff-akinlabi-214666201"
  },
  {
    id: 14,
    name: "Abubakar Shehu",
    image: Abubakar,
    bio: "CEO and Co-Founder of Stonetech, tech strategist, ecosystem & venture builder and someone who genuinely believes in the power of ideas to change lives.",
    socialPlatform: "Instagram",
    socialUrl: "https://www.instagram.com/theshehv?igsh=cW42MXFnczRraGps&igsi=cW42MXFnczRraGps"
  },
  {
    id: 15,
    name: "Olukotun Olanrewaju James",
    image: Olukotun,
    bio: "Award-winning technology leader, founder and mentor with over 15 years of experience in fintech and govtech.",
    socialPlatform: "LinkedIn",
    socialUrl: "https://www.linkedin.com/in/james-olukotun-0a785816b"
  },
  {
    id: 16,
    name: "Sonter Julius Zever",
    image: Sonter,
    bio: "Digital Innovation and Business Support Consultant with 7+ years' experience in MSME digital transformation, and startup development.",
    socialPlatform: "LinkedIn",
    socialUrl: "https://www.linkedin.com/in/sonter-zever-59184719/"
  },
  {
    id: 17,
    name: "Kossiso Udodi",
    image: Kossiso,
    bio: "Machine Learning researcher and technology entrepreneur, and the founder of Electric Sheep Africa.",
    socialPlatform: "Instagram",
    socialUrl: "https://www.instagram.com/kossisoroyce?igsh=MXU4dWtuOGFnYWd6ag==&igsi=MXU4dWtuOGFnYWd6ag=="
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

export default function MentorSection() {
  const [activeCohort, setActiveCohort] = useState('cohort2');

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Our Mentors
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Browse through our expert mentors across different program cohorts.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-200/80 p-1 rounded-xl flex gap-1 relative">
            <button
              onClick={() => setActiveCohort('cohort2')}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 relative z-10 ${
                activeCohort === 'cohort2' ? 'text-black shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Cohort 2
              {activeCohort === 'cohort2' && (
                <motion.div layoutId="activeTab" className="absolute inset-0 bg-white rounded-lg -z-10" />
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
                <motion.div layoutId="activeTab" className="absolute inset-0 bg-white rounded-lg -z-10" />
              )}
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            {activeCohort === 'cohort2' ? (
              <motion.div
                key="cohort2-grid"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {COHORT_2_MENTORS.map((mentor) => (
                  <motion.div
                    key={mentor.id}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
                  >
                    <div className="h-full w-full overflow-hidden">
                      <img 
                        src={mentor.image} 
                        alt={mentor.name} 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                      <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-1">
                        {mentor.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="cohort3-grid"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {COHORT_3_MENTORS.map((mentor) => (
                  <motion.div
                    key={mentor.id}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
                  >
                    <div className="h-full w-full overflow-hidden">
                      <img 
                        src={mentor.image} 
                        alt={mentor.name} 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                        <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                          {mentor.bio}
                        </p>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-100 text-left">
                        <span className="text-xs text-gray-400 block font-medium uppercase tracking-wider">Connect</span>
                        <a 
                          href={mentor.socialUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors inline-block mt-0.5 underline decoration-2 decoration-indigo-100 hover:decoration-indigo-600"
                        >
                          {mentor.socialPlatform} &rarr;
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
