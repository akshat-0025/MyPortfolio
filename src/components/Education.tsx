import { motion } from "framer-motion";
import { Calendar, BookOpen, GraduationCap } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  coursework: string[];
  description: string;
}

const educationHistory: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "National PG College",
    location: "Lucknow, Uttar Pradesh, India",
    period: "2022 - 2025",
    score: "First Division",
    coursework: [
      "Web Technologies (HTML, CSS, JS)",
      "Database Management Systems (SQL)",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++)",
      "Software Engineering Principles"
    ],
    description:
      "A rigorous computer applications curriculum focusing on programming foundations, system structures, and web deployment. Engaged in multiple collaborative software projects during the coursework."
  }
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 bg-bgSecondary overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-heading font-semibold tracking-[0.3em] text-accentGold uppercase mb-2"
          >
            05 / Background
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-textPrimary"
          >
            Education Path
          </motion.h2>
          <div className="h-[1px] w-20 bg-accentGold mt-4 mb-6" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-accentGold/20 pl-6 sm:pl-8 ml-4 sm:ml-8 max-w-3xl mx-auto">
          {educationHistory.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-12"
            >
              {/* Gold Node Bullet */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-bgPrimary border border-accentGold flex items-center justify-center shadow-lg">
                <GraduationCap size={12} className="text-accentGold" />
              </div>

              {/* Card wrapper */}
              <div className="glass-panel p-6 sm:p-8 rounded relative overflow-hidden group">
                {/* Horizontal flow line inside card */}
                <div className="absolute top-0 left-0 w-[3px] h-full bg-accentGold/20 group-hover:bg-accentGold transition-colors duration-500" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-textPrimary uppercase tracking-wider">
                    {item.degree}
                  </h3>
                  
                  {/* Period Tag */}
                  <div className="inline-flex items-center space-x-1.5 bg-bgPrimary/60 border border-accentGold/10 px-3 py-1 rounded text-xs font-mono text-accentGold w-fit">
                    <Calendar size={12} />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-heading font-semibold text-sm text-textPrimary uppercase tracking-wide">
                    {item.institution}
                  </h4>
                  <p className="text-[11px] text-textSecondary font-sans font-light mt-0.5">
                    {item.location} {item.score && `• ${item.score}`}
                  </p>
                </div>

                <p className="text-xs text-textSecondary font-sans font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Coursework Tags */}
                <div>
                  <h5 className="font-heading font-semibold text-[10px] tracking-wider text-accentGold uppercase mb-3 flex items-center gap-1.5">
                    <BookOpen size={10} />
                    <span>Core Focus Areas</span>
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="font-mono text-[9px] text-textPrimary bg-bgPrimary border border-accentGold/5 px-2.5 py-1 rounded transition-colors duration-300 group-hover:border-accentGold/15"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
