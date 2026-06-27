import { motion } from "framer-motion";
import { Award, Calendar, Layers, MapPin, Users } from "lucide-react";

interface EventParticipation {
  title: string;
  eventName: string;
  location: string;
  date: string;
  projectShowcased: string;
  description: string;
  highlights: string[];
  image?: string;
}

const participations: EventParticipation[] = [
  {
    title: "AgroGuardian AI & Smart Farming Presentation",
    eventName: "Inter-College Hackathon & Tech Fest",
    location: "Lucknow, India",
    date: "2026",
    projectShowcased: "AgroGuardian (Smart Agriculture Platform)",
    description: "Presented our AI-powered agricultural monitoring system designed to optimize soil irrigation and crop yield algorithms to a panel of academic and industry experts.",
    highlights: [
      "Designed and presented predictive analytics slide-decks and UI prototypes",
      "Demonstrated real-time soil data collection workflows using sensor simulation",
      "Received official Participation & Outstanding Presentation Certificate"
    ],
    image: "/agroguardian-present.jpeg"
  },
  {
    title: "Smart Waste Management IoT Demonstration",
    eventName: "National PG College Science & Tech Expo",
    location: "Lucknow, India",
    date: "2025",
    projectShowcased: "Smart Waste Management System",
    description: "Showcased our automated smart bin model to the college administration, faculty, and visiting examiners during the annual college project demonstration expo.",
    highlights: [
      "Configured and demonstrated automated bin-lid servo mechanics live",
      "Explained server-side data logs and level-indicator API integrations",
      "Recognized for innovative hardware-to-software conceptual design"
    ],
    image: "/smart-waste-present.jpg"
  }
];

export default function Hackathons() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <section id="hackathons" className="relative py-24 bg-bgPrimary overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 radial-gradient-glow opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-heading font-semibold tracking-[0.3em] text-accentGold uppercase mb-2"
          >
            05 / Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-textPrimary"
          >
            Events & Hackathons
          </motion.h2>
          <div className="h-[1px] w-20 bg-accentGold mt-4 mb-6" />
          <p className="text-textSecondary font-sans font-light max-w-lg text-sm leading-relaxed">
            Active project presentations and collaborative challenges showcasing software builds and technical concepts.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l border-accentGold/20 pl-6 sm:pl-8 ml-4 sm:ml-8 max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {participations.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Node marker */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-bgPrimary border border-accentGold flex items-center justify-center shadow-lg">
                  <Award size={12} className="text-accentGold" />
                </div>

                {/* Event Card */}
                <div className="glass-panel p-6 sm:p-8 rounded relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-[3px] h-full bg-accentGold/20 group-hover:bg-accentGold transition-colors duration-500" />
                  
                  {/* Grid Layout inside Event Card */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    
                    {/* Event details Column */}
                    <div className={item.image ? "md:col-span-8 space-y-4" : "md:col-span-12 space-y-4"}>
                      {/* Title & Date */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="font-heading font-bold text-base sm:text-lg text-textPrimary uppercase tracking-wider">
                          {item.title}
                        </h3>
                        
                        <div className="inline-flex items-center space-x-1.5 bg-bgPrimary/60 border border-accentGold/10 px-2.5 py-1 rounded text-[10px] font-mono text-accentGold w-fit h-fit uppercase">
                          <Calendar size={11} />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {/* Event Meta */}
                      <div className="flex flex-wrap gap-4 text-xs text-textSecondary font-sans font-light">
                        <span className="flex items-center gap-1.5">
                          <Layers size={12} className="text-accentGold/60" />
                          <span>{item.eventName}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-accentGold/60" />
                          <span>{item.location}</span>
                        </span>
                      </div>

                      {/* Project Showcase tag */}
                      <div className="inline-flex items-center space-x-2 bg-bgPrimary/40 border border-accentGold/10 px-3 py-1.5 rounded text-xs text-textPrimary font-sans">
                        <Users size={12} className="text-accentGold" />
                        <span className="font-light">Showcased:</span>
                        <span className="font-medium text-accentGold">{item.projectShowcased}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-textSecondary font-sans font-light leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights list */}
                      <div className="space-y-2 pt-2">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start text-xs font-sans font-light text-textSecondary">
                            <span className="text-accentGold mr-2.5">•</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Optional Event Showcase Image Column */}
                    {item.image && (
                      <div className="md:col-span-4 w-full h-40 bg-bgPrimary border border-accentGold/10 rounded overflow-hidden relative group-hover:border-accentGold/30 transition-all duration-300 shadow-lg">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary/60 via-transparent to-transparent pointer-events-none" />
                      </div>
                    )}

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
