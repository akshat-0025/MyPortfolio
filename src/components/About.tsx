import { motion } from "framer-motion";
import { Globe, Zap } from "lucide-react";

interface Interest {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const interests: Interest[] = [
  {
    name: "Web Development",
    description: "Creating highly performance-oriented React and Node.js solutions.",
    icon: <Globe className="text-accentGold" size={20} />
  },
  {
    name: "Internet of Things (IoT)",
    description: "Connecting hardware controllers and sensors to real-time dashboards.",
    icon: <Zap className="text-accentGold" size={20} />
  }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <section id="about" className="relative py-24 bg-bgSecondary overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-heading font-semibold tracking-[0.3em] text-accentGold uppercase mb-2"
          >
            01 / Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-textPrimary"
          >
            Engineering With Intent
          </motion.h2>
          <div className="h-[1px] w-20 bg-accentGold mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-1 lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Rotating outer orbit border */}
              <motion.div
                className="absolute -inset-4 border border-dashed border-accentGold/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Outer floating border */}
              <div className="absolute -inset-2 border border-accentGold/20 rounded-full transition-all duration-500 group-hover:scale-95 group-hover:border-accentGold/60" />
              
              {/* Gold frame shadow */}
              <div className="absolute inset-0 bg-accentGold/5 rounded-full transition-colors duration-500 group-hover:bg-accentGold/0" />

              {/* Main Image Frame */}
              <div className="absolute inset-0 border border-accentGold/40 bg-bgPrimary overflow-hidden rounded-full shadow-2xl">
                <img
                  src="/logo.png"
                  alt="Akshat Sharma Profile Placeholder"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Interests */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <motion.h3
                variants={fadeUpVariants}
                className="text-xl sm:text-2xl font-heading text-textPrimary uppercase tracking-wider"
              >
                Developing software that bridges gaps and drives real solutions.
              </motion.h3>

              <motion.p
                variants={fadeUpVariants}
                className="text-textSecondary font-sans font-light leading-relaxed text-sm sm:text-base"
              >
                As a Bachelor of Computer Applications (BCA) graduate from{" "}
                <span className="text-textPrimary font-medium">National PG College</span>, I've dedicated myself to understanding the full architectural stack of modern tech applications. My path revolves around combining strict programming methodologies with emerging trends.
              </motion.p>

              <motion.p
                variants={fadeUpVariants}
                className="text-textSecondary font-sans font-light leading-relaxed text-sm sm:text-base"
              >
                Rather than acting as a standard developer, I focus on building complete digital products. I value continuous learning, scalability, clean structural patterns, and implementing technology to directly optimize real-world processes.
              </motion.p>

              {/* Grid of Interests */}
              <motion.div variants={fadeUpVariants} className="pt-6">
                <h4 className="text-xs font-heading font-semibold tracking-widest text-accentGold uppercase mb-4">
                  Areas of Direct Exploration
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {interests.map((interest, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 p-3 rounded bg-bgPrimary/40 border border-accentGold/5 transition-all duration-300 hover:border-accentGold/20 hover:bg-bgPrimary/70"
                    >
                      <div className="mt-0.5 p-1 bg-bgSecondary rounded border border-accentGold/10">
                        {interest.icon}
                      </div>
                      <div>
                        <h5 className="font-heading font-medium text-xs text-textPrimary uppercase tracking-wider">
                          {interest.name}
                        </h5>
                        <p className="text-[11px] text-textSecondary font-sans font-light mt-0.5">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
