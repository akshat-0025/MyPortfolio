import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const numParticles = Math.min(Math.floor(width / 15), 80);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid overlay
      ctx.strokeStyle = "rgba(212, 175, 55, 0.02)";
      ctx.lineWidth = 1;
      const gridSize = 50;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap borders
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Attract/Repel mouse force
        if (mouse.x > -500) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.x -= (dx / dist) * force * 0.5;
            p.y -= (dy / dist) * force * 0.5;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, idx) => {
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (100 - dist) / 100 * 0.08;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-bgPrimary overflow-hidden pt-20"
    >
      {/* Dynamic Interactive Particles Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 radial-gradient-glow opacity-80 pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Subtle Tagline */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-bgSecondary/60 border border-accentGold/20 px-3.5 py-1.5 rounded-full text-xs font-heading font-medium tracking-widest text-accentGold mb-6 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-successGreen animate-pulse" />
            <span>Available for innovative ventures</span>
          </motion.div>

          {/* Large Bold Statement */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-textPrimary font-heading uppercase max-w-4xl leading-[1.08] mb-6"
          >
            Building Digital Products <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentGold via-[#EBC75A] to-accentGold">
              That Solve Real Problems
            </span>
          </motion.h1>

          {/* Subheading bio */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-textSecondary font-sans font-light max-w-2xl leading-relaxed mb-10"
          >
            I am <strong className="text-textPrimary font-medium">Akshat Sharma</strong>, a Full Stack Web Developer passionate about creating modern web applications, scalable software solutions, and technology-driven products that make a meaningful impact.
          </motion.p>

          {/* CTA Buttons Group */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* View Projects Button */}
            <button
              onClick={() => handleScrollTo("projects")}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-accentGold text-bgPrimary border border-accentGold px-8 py-3.5 rounded font-heading font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-transparent hover:text-accentGold focus:outline-none"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </button>

            {/* Download Resume Button */}
            <a
              href="/resume-placeholder.pdf"
              download="Akshat_Sharma_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-bgSecondary hover:bg-bgSecondary/60 border border-accentGold/20 px-8 py-3.5 rounded font-heading font-semibold text-sm tracking-wider uppercase text-textPrimary transition-all duration-300 hover:border-accentGold/60 focus:outline-none"
            >
              <Download size={16} className="text-accentGold" />
              <span>Resume</span>
            </a>

            {/* Contact Me Button */}
            <button
              onClick={() => handleScrollTo("contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-bgSecondary/30 border border-textSecondary/20 hover:border-textPrimary px-8 py-3.5 rounded font-heading font-semibold text-sm tracking-wider uppercase text-textSecondary hover:text-textPrimary transition-all duration-300 focus:outline-none"
            >
              <Mail size={16} />
              <span>Contact Me</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-8 bottom-0 top-0 w-[1px] bg-accentGold/5 hidden xl:block" />
      <div className="absolute right-8 bottom-0 top-0 w-[1px] bg-accentGold/5 hidden xl:block" />
    </section>
  );
}
