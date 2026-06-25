import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: Record<string, SkillCategory> = {
  frontend: {
    title: "Frontend Development",
    skills: [
      { name: "HTML5 / CSS3" },
      { name: "JavaScript (ES6+)" },
      { name: "React / Redux" },
      { name: "Tailwind CSS" }
    ]
  },
  backend: {
    title: "Backend & Database",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "REST APIs" },
      { name: "SQL" },
      { name: "MERN Stack" },
      { name: "IoT Systems" }
    ]
  },
  programming: {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript" },
      { name: "Python" },
      { name: "C++" }
    ]
  },
  tools: {
    title: "Tools & Systems",
    skills: [
      { name: "Git / GitHub" },
      { name: "VS Code" },
      { name: "Postman" }
    ]
  }
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("frontend");

  const tabKeys = Object.keys(skillCategories);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as any }
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-bgPrimary overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 radial-gradient-glow opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-heading font-semibold tracking-[0.3em] text-accentGold uppercase mb-2"
            >
              02 / Stack
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-textPrimary"
            >
              Technical Arsenal
            </motion.h2>
            <div className="h-[1px] w-20 bg-accentGold mt-4" />
          </div>
          <p className="mt-4 md:mt-0 text-textSecondary font-sans font-light max-w-sm text-sm sm:text-base">
            Categorized technical capabilities honed through project-oriented engineering.
          </p>
        </div>

        {/* Tab Buttons Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-accentGold/10 pb-4 mb-10 overflow-x-auto scrollbar-none">
          {tabKeys.map((key) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative px-5 py-2.5 font-heading text-xs uppercase tracking-widest transition-all duration-300 rounded focus:outline-none whitespace-nowrap ${
                  isActive ? "text-bgPrimary" : "text-textSecondary hover:text-textPrimary"
                }`}
              >
                {/* Active backgrounds slide */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-accentGold rounded"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10 font-medium">
                  {skillCategories[key].title.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {skillCategories[activeTab].skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                className="glass-panel glass-panel-hover py-4 px-5 rounded relative overflow-hidden flex items-center justify-between"
              >
                {/* Accent border flow on hover */}
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-accentGold transition-all duration-500 group-hover:h-full" />

                <h3 className="font-heading font-medium text-xs tracking-wider uppercase text-textPrimary">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
