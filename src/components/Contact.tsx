import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertTriangle } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    // Elegant gold/white/dark metallic confetti burst
    const end = Date.now() + 1 * 1000;
    const colors = ["#D4AF37", "#F8F8F8", "#171A21"];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    // Retrieve Formspree endpoint URL from environment variable or use fallback simulation
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mzdlejyz";

    try {
      if (endpoint === "placeholder" || endpoint.includes("your_formspree_id")) {
        // Simulation mode for testing UI and confetti interactions
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Formspree Simulated Submit:", formData);
        triggerConfetti();
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          })
        });

        if (response.ok) {
          triggerConfetti();
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setStatus("error");
        }
      }
    } catch (err) {
      console.error("Formspree Error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-bgPrimary overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 radial-gradient-glow opacity-55 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-heading font-semibold tracking-[0.3em] text-accentGold uppercase mb-2"
          >
            06 / Connect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-textPrimary"
          >
            Start A Project
          </motion.h2>
          <div className="h-[1px] w-20 bg-accentGold mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Details & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-1 lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <h3 className="font-heading font-semibold text-lg text-textPrimary uppercase tracking-wider">
                Let's architect something meaningful together.
              </h3>
              <p className="text-textSecondary font-sans font-light leading-relaxed text-sm sm:text-base">
                Whether you have an early-stage hardware-IoT concept, a complex React stack requirement, or want to outline product milestones, feel free to drop a message.
              </p>

              {/* Direct Info list */}
              <div className="space-y-6 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded border border-accentGold/20 flex items-center justify-center bg-bgSecondary">
                    <Mail size={16} className="text-accentGold" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-mono tracking-widest text-textSecondary">
                      Write Email
                    </h4>
                    <a
                      href="mailto:akshatsharma00025@gmail.com"
                      className="text-sm font-heading font-medium text-textPrimary hover:text-accentGold transition-colors"
                    >
                      akshatsharma00025@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded border border-accentGold/20 flex items-center justify-center bg-bgSecondary">
                    <Phone size={16} className="text-accentGold" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-mono tracking-widest text-textSecondary">
                      Call / Chat
                    </h4>
                    <a
                      href="tel:+917307227072"
                      className="text-sm font-heading font-medium text-textPrimary hover:text-accentGold transition-colors"
                    >
                      +91 7307227072
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded border border-accentGold/20 flex items-center justify-center bg-bgSecondary">
                    <MapPin size={16} className="text-accentGold" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-mono tracking-widest text-textSecondary">
                      Location
                    </h4>
                    <span className="text-sm font-heading font-medium text-textPrimary">
                      Lucknow, Uttar Pradesh, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials links grid */}
            <div className="mt-12 lg:mt-0">
              <h4 className="text-[10px] uppercase font-mono tracking-widest text-textSecondary mb-4">
                Digital Presence
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>, href: "https://github.com/akshat-0025", name: "GitHub" },
                  { icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, href: "https://www.linkedin.com/in/akshat-sharma-011724267/", name: "LinkedIn" },
                  { icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>, href: "https://instagram.com/akshat_0025", name: "Instagram" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded border border-accentGold/20 hover:border-accentGold/60 flex items-center justify-center text-textSecondary hover:text-accentGold bg-bgSecondary transition-all duration-300 focus:outline-none"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-1 lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded relative overflow-hidden">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-bgPrimary/60 border border-accentGold/10 focus:border-accentGold px-4 py-3 rounded text-sm text-textPrimary focus:outline-none transition-all duration-350"
                  />
                  <label className="absolute left-4 top-3.5 text-xs text-textSecondary font-heading uppercase tracking-widest pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-focus:-top-2.5 peer-focus:text-[10px] peer-focus:text-accentGold bg-bgSecondary/90 px-1 rounded peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[10px]">
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-bgPrimary/60 border border-accentGold/10 focus:border-accentGold px-4 py-3 rounded text-sm text-textPrimary focus:outline-none transition-all duration-350"
                  />
                  <label className="absolute left-4 top-3.5 text-xs text-textSecondary font-heading uppercase tracking-widest pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-focus:-top-2.5 peer-focus:text-[10px] peer-focus:text-accentGold bg-bgSecondary/90 px-1 rounded peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[10px]">
                    Your Email
                  </label>
                </div>

                {/* Subject */}
                <div className="relative group">
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-bgPrimary/60 border border-accentGold/10 focus:border-accentGold px-4 py-3 rounded text-sm text-textPrimary focus:outline-none transition-all duration-350"
                  />
                  <label className="absolute left-4 top-3.5 text-xs text-textSecondary font-heading uppercase tracking-widest pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-focus:-top-2.5 peer-focus:text-[10px] peer-focus:text-accentGold bg-bgSecondary/90 px-1 rounded peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[10px]">
                    Subject
                  </label>
                </div>

                {/* Message */}
                <div className="relative group">
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-bgPrimary/60 border border-accentGold/10 focus:border-accentGold px-4 py-3 rounded text-sm text-textPrimary focus:outline-none transition-all duration-350 resize-none"
                  />
                  <label className="absolute left-4 top-3.5 text-xs text-textSecondary font-heading uppercase tracking-widest pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-focus:-top-2.5 peer-focus:text-[10px] peer-focus:text-accentGold bg-bgSecondary/90 px-1 rounded peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[10px]">
                    Project Details
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-accentGold text-bgPrimary border border-accentGold px-6 py-3.5 rounded font-heading font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-transparent hover:text-accentGold disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
                >
                  {loading ? (
                    <span>Dispatching...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={12} />
                    </>
                  )}
                </button>

                {/* Alerts */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-successGreen text-xs font-heading font-semibold uppercase tracking-wider mt-4"
                  >
                    <CheckCircle size={14} />
                    <span>Message transmitted successfully. Confetti fired!</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-500 text-xs font-heading font-semibold uppercase tracking-wider mt-4"
                  >
                    <AlertTriangle size={14} />
                    <span>Transmission failed. Please verify credentials.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
