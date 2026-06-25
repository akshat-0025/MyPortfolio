import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, 600); // Wait for fade-out to unmount
    }, 1600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Framer Motion Variants
  const containerVariants = {
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as any
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    })
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bgPrimary grid-overlay select-none"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Subtle Radial Glow */}
          <div className="absolute inset-0 radial-gradient-glow opacity-60 pointer-events-none" />

          {/* Branding Content */}
          <div className="relative flex flex-col items-center text-center">
            {/* Minimal Logo Icon */}
            <motion.div
              className="w-12 h-12 mb-6 rounded-sm border border-accentGold/30 flex items-center justify-center text-accentGold font-heading font-semibold text-lg relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              AS
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-accentGold/0 via-accentGold/20 to-accentGold/0"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
              />
            </motion.div>

            {/* Main Name Header */}
            <h1 className="overflow-hidden flex space-x-1 text-2xl font-bold tracking-[0.25em] text-textPrimary font-heading uppercase md:text-3xl">
              {"AKSHAT SHARMA".split(" ").map((word, wIdx) => (
                <span key={wIdx} className="flex">
                  {word.split("").map((char, cIdx) => (
                    <motion.span
                      key={cIdx}
                      custom={cIdx + wIdx * 6}
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wIdx === 0 && <span className="w-2 md:w-3" />}
                </span>
              ))}
            </h1>

            {/* Sub-header */}
            <motion.p
              className="mt-3 text-xs tracking-[0.3em] text-textSecondary uppercase font-medium"
              custom={15}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Full Stack Web Developer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
