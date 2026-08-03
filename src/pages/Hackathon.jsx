// src/pages/HackathonPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Trophy,
  Calendar,
  MapPin,
  Users,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Target,
  Cpu,
  Award,
  Globe,
  UserPlus,
  Star,
  ChevronRight,
  Clock,
  Filter,
  Grid3x3,
  List,
  Heart,
  Share2,
  ExternalLink,
  Timer,
  Layers,
  Play,
  BookOpen,
  Wifi,
  Mic,
  Video,
  Link,
  Download,
  CalendarDays,
  Sparkles,
  Flame,
  Medal,
  Crown,
  X,
  Search
} from 'lucide-react';

const Hackathon = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const hackathons = [
    {
      id: 1,
      title: "Space App Challenge",
      tagline: "Build the future of satellite applications",
      description: "Develop innovative applications using satellite data for agriculture, climate, and disaster management.",
      prize: "₦10,000,000",
      date: "Oct 15-18, 2026",
      location: "Abuja & Online",
      status: "Open",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
      tracks: ["Agriculture", "Climate", "Disaster", "Urban"],
      participants: 45,
      maxParticipants: 100,
      timeline: "3 Days",
      skills: ["JavaScript", "Python", "React", "Data Science"],
      prizes: ["₦5M", "₦3M", "₦2M"]
    },
    {
      id: 2,
      title: "Satellite IoT Buildathon",
      tagline: "Connect the unconnected with satellite IoT",
      description: "Build hardware prototypes that connect IoT devices via satellite networks for remote monitoring.",
      prize: "₦5,000,000",
      date: "Nov 5-7, 2026",
      location: "Lagos, Nigeria",
      status: "Coming Soon",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop",
      tracks: ["Remote Sensing", "Asset Tracking", "Environment", "Agriculture"],
      participants: 30,
      maxParticipants: 80,
      timeline: "3 Days",
      skills: ["Arduino", "LoRa", "Python", "Cloud"],
      prizes: ["₦2.5M", "₦1.5M", "₦1M"]
    },
    {
      id: 3,
      title: "Space Policy Hack",
      tagline: "Design the future of space governance",
      description: "Create policy frameworks and business models for Africa's space sector development.",
      prize: "₦7,500,000",
      date: "Dec 1-3, 2026",
      location: "Virtual",
      status: "Apply Now",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
      tracks: ["Regulations", "Business", "Collaboration", "Capacity"],
      participants: 20,
      maxParticipants: 50,
      timeline: "3 Days",
      skills: ["Policy", "Writing", "Research", "Analysis"],
      prizes: ["₦3.5M", "₦2M", "₦1M"]
    },
    {
      id: 4,
      title: "Space Data Visualization",
      tagline: "Make satellite data beautiful and accessible",
      description: "Create stunning visualizations that make satellite data accessible to policymakers and the public.",
      prize: "₦4,000,000",
      date: "Jan 10-12, 2027",
      location: "Abuja, Nigeria",
      status: "Coming Soon",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop",
      tracks: ["Data Viz", "UI/UX", "Storytelling", "Education"],
      participants: 25,
      maxParticipants: 60,
      timeline: "3 Days",
      skills: ["D3.js", "React", "Design", "Data"],
      prizes: ["₦2M", "₦1.2M", "₦800K"]
    }
  ];

  const filteredHackathons = hackathons.filter(hack => {
    const matchesStatus = filterStatus === 'all' || hack.status === filterStatus;
    const matchesSearch = hack.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hack.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const StatusBadge = ({ status }) => {
    const styles = {
      'Open': 'bg-green-500',
      'Coming Soon': 'bg-gray-600',
      'Apply Now': 'bg-blue-600'
    };
    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full text-white ${styles[status] || 'bg-gray-500'}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-white"
          >
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-5 mb-4 leading-[1.1]">
              Hackathons
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              Compete in NigComSat's flagship hackathons and turn your ideas into impactful solutions using space technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3.5 bg-white text-black rounded-lg hover:bg-gray-100 transition flex items-center gap-2 font-medium">
                View Active <ChevronRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition flex items-center gap-2 font-medium text-white">
                <Trophy className="w-4 h-4" /> Winners
              </button>
            </div>
            
            {/* Quick Stats on Hero */}
            <div className="grid grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/20 max-w-lg">
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/60">Participants</div>
              </div>
              <div>
                <div className="text-2xl font-bold">₦25M+</div>
                <div className="text-sm text-white/60">Prizes</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-white/60">Mentors</div>
              </div>
              <div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-white/60">Prototypes</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search hackathons..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div className="flex bg-gray-100 rounded-lg p-1">
                {['all', 'Open', 'Coming Soon', 'Apply Now'].map(status => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status === 'all' ? 'all' : status)}
                    className={`px-3 py-1 text-xs rounded-md transition whitespace-nowrap ${
                      filterStatus === status || (status === 'all' && filterStatus === 'all')
                        ? 'bg-white shadow-sm text-gray-900'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {status === 'all' ? 'All' : status}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              >
                <Grid3x3 className="w-4 h-4 text-gray-600" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition ${viewMode === 'list' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              >
                <List className="w-4 h-4 text-gray-600" />
              </button>
              <span className="text-sm text-gray-500 ml-2">
                {filteredHackathons.length} results
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathon Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredHackathons.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500">No hackathons found matching your criteria.</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHackathons.map((hack, index) => (
              <motion.div
                key={hack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow group cursor-pointer"
                onClick={() => setSelectedHackathon(hack)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hack.image}
                    alt={hack.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <StatusBadge status={hack.status} />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg">{hack.title}</h3>
                    <p className="text-white/80 text-sm">{hack.tagline}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {hack.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {hack.location}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{hack.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold text-gray-900">{hack.prize}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Users className="w-3 h-3" />
                      <span>{hack.participants}/{hack.maxParticipants}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredHackathons.map((hack, index) => (
              <motion.div
                key={hack.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 hover:shadow-sm transition cursor-pointer"
                onClick={() => setSelectedHackathon(hack)}
              >
                <div className="w-32 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                  <img src={hack.image} alt={hack.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <StatusBadge status={hack.status} />
                    <span className="text-xs text-gray-500">{hack.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900">{hack.title}</h3>
                  <p className="text-sm text-gray-500 truncate">{hack.tagline}</p>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-gray-500">
                    <MapPin className="w-3 h-3" /> {hack.location}
                  </span>
                  <span className="font-semibold text-gray-900 flex items-center gap-1">
                    <Trophy className="w-3 h-3 text-yellow-500" /> {hack.prize}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Join our community of innovators and turn your space technology ideas into reality.
          </p>
          <button className="px-8 py-3.5 bg-white text-black rounded-lg hover:bg-gray-100 transition font-medium">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedHackathon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedHackathon(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="min-h-screen flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <StatusBadge status={selectedHackathon.status} />
                    <span className="text-sm text-gray-500">{selectedHackathon.date}</span>
                  </div>
                  <button
                    onClick={() => setSelectedHackathon(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="p-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedHackathon.title}</h2>
                    <p className="text-gray-600">{selectedHackathon.tagline}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-gray-500">Prize</div>
                      <div className="font-bold text-gray-900">{selectedHackathon.prize}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-gray-500">Location</div>
                      <div className="font-medium text-gray-900">{selectedHackathon.location}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-gray-500">Timeline</div>
                      <div className="font-medium text-gray-900">{selectedHackathon.timeline}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-gray-500">Participants</div>
                      <div className="font-medium text-gray-900">{selectedHackathon.participants}/{selectedHackathon.maxParticipants}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{selectedHackathon.description}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tracks</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedHackathon.tracks.map(track => (
                        <span key={track} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                          {track}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedHackathon.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-black/5 text-gray-700 rounded-lg text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Prizes</h3>
                    <div className="flex gap-3">
                      {selectedHackathon.prizes.map((prize, i) => (
                        <div key={i} className="flex-1 bg-gray-50 p-3 rounded-lg text-center">
                          <div className="text-xs text-gray-500">{['1st', '2nd', '3rd'][i]}</div>
                          <div className="font-bold text-gray-900">{prize}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <button className="flex-1 bg-black text-white py-2.5 rounded-lg hover:bg-gray-800 transition font-medium">
                      Register Now
                    </button>
                    <button className="px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                      <Share2 className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hackathon;