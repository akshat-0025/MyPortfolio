import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Cpu } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  githubLabel: string;
  live?: string;
  category: string[];
  type: "Group Project" | "Solo Project";
}

const projects: Project[] = [
  {
    title: "Smart Waste Management System",
    description:
      "An IoT-enabled smart bin system featuring automatic lid-opening, level monitoring, and live data telemetry on a MERN-based web dashboard. Developed as a collaborative group project.",
    image: "/smart-waste-mockup.png",
    technologies: ["IoT", "Sensors", "Node.js", "Express.js", "MongoDB", "C++"],
    github: "https://github.com/kr254na/Smart-Waste-Management",
    githubLabel: "Teammate's Repo",
    category: ["iot", "web"],
    type: "Group Project"
  },
  {
    title: "AgroGuardian",
    description:
      "An AI-powered smart farming platform designed to monitor soil parameters, weather conditions, and provide crop disease analysis using a React client and a Spring Boot backend. Developed as a collaborative group project.",
    image: "/agroguardian-mockup.png",
    technologies: ["Spring Boot", "React.js", "MySQL", "IoT", "Python (AI)"],
    github: "https://github.com/kr254na/Agro-Smart-Frontend",
    githubLabel: "Teammate's Repo",
    live: "https://agrofy.vercel.app",
    category: ["ai", "iot", "web"],
    type: "Group Project"
  },
  {
    title: "National PG College Website",
    description:
      "A responsive portal designed for efficient management of academic information, notifications, and student resources, featuring custom navigation structures. Developed as a collaborative group project.",
    image: "/npgc-website.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Python (Chatbot)"],
    github: "https://github.com/kr254na/NPGC---Website",
    githubLabel: "Teammate's Repo",
    live: "https://npgc.vercel.app",
    category: ["web"],
    type: "Group Project"
  },
  {
    title: "Duo Secure Chat App",
    description:
      "A real-time, secure two-party communication platform featuring encrypted instant messaging routing, Socket.io data synchronization, and JWT-based authentication. Developed as a solo project.",
    image: "/duo-securechat.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/akshat-0025/chatapp",
    githubLabel: "Personal Repo",
    live: "https://chatapp-2t91.onrender.com",
    category: ["web"],
    type: "Solo Project"
  },
  {
    title: "Digital Architect Portfolio",
    description:
      "A premium, highly interactive personal portfolio website showcasing professional virtual internships, projects, and event presentations using advanced animations. Developed as a solo project.",
    image: "/portfolio-mockup.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/akshat-0025/MyPortfolio",
    githubLabel: "Personal Repo",
    live: "https://akshatsharmaa.vercel.app",
    category: ["web"],
    type: "Solo Project"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.category.includes(filter);
  });

  return (
    <section id="projects" className="relative py-24 bg-bgSecondary overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

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
              03 / Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-textPrimary"
            >
              Selected Ventures
            </motion.h2>
            <div className="h-[1px] w-20 bg-accentGold mt-4" />
          </div>

          {/* Filter Navigation */}
          <div className="flex gap-2 mt-6 md:mt-0 bg-bgPrimary/60 p-1 border border-accentGold/10 rounded">
            {["all", "iot", "ai", "web"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`relative px-4 py-1.5 font-heading text-[10px] uppercase tracking-wider transition-colors duration-300 rounded focus:outline-none ${
                  filter === category ? "text-bgPrimary font-semibold" : "text-textSecondary hover:text-textPrimary"
                }`}
              >
                {filter === category && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-accentGold rounded"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={project.title}
                className="glass-panel glass-panel-hover flex flex-col justify-between h-[520px] rounded overflow-hidden group relative"
              >
                <div>
                  {/* Project Image Panel */}
                  <div className="relative h-48 bg-bgPrimary overflow-hidden border-b border-accentGold/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                      loading="lazy"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary/60 via-transparent to-transparent" />
                    
                    {/* Floating top category badge and project type badge */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <span className="px-2.5 py-1 rounded bg-bgSecondary/90 border border-accentGold/20 text-accentGold text-[9px] font-heading font-semibold uppercase tracking-widest backdrop-blur-sm shadow-md">
                        {project.type}
                      </span>
                    </div>

                    {/* Category Icon */}
                    <div className="absolute top-4 left-4 p-1.5 rounded-full bg-bgSecondary/85 border border-accentGold/20 text-accentGold backdrop-blur-sm">
                      <Cpu size={14} />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    {/* Technologies tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[9px] tracking-wider text-accentGold/80 uppercase bg-bgPrimary/50 border border-accentGold/10 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="font-mono text-[9px] tracking-wider text-textSecondary bg-bgPrimary/50 border border-accentGold/5 px-2 py-0.5 rounded">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-lg text-textPrimary tracking-wide uppercase mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-textSecondary font-sans font-light text-xs leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 border-t border-accentGold/5 flex gap-4 mt-auto">
                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`${project.live ? "flex-1" : "w-full"} inline-flex items-center justify-center space-x-2 border border-accentGold/20 hover:border-accentGold/50 py-2.5 rounded text-xs font-heading font-medium uppercase tracking-widest text-textSecondary hover:text-textPrimary transition-all duration-300 focus:outline-none`}
                  >
                    <svg className="w-3.5 h-3.5 text-accentGold fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span>{project.githubLabel}</span>
                  </a>

                  {/* Live Demo Link */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 bg-accentGold hover:bg-transparent border border-accentGold py-2.5 rounded text-xs font-heading font-semibold uppercase tracking-widest text-bgPrimary hover:text-accentGold transition-all duration-300 focus:outline-none"
                    >
                      <span>Launch</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
