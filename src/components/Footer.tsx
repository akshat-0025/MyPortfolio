import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-bgSecondary border-t border-accentGold/10 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Left column info */}
        <div className="text-center md:text-left">
          <p className="font-heading font-medium text-xs uppercase tracking-widest text-textPrimary">
            Akshat Sharma
          </p>
          <p className="font-sans font-light text-[11px] text-textSecondary mt-1.5">
            © 2026 Akshat Sharma. Crafted with passion and curiosity.
          </p>
        </div>

        {/* Center Nav tags */}
        <div className="flex space-x-6 text-[10px] uppercase tracking-widest font-heading text-textSecondary">
          <a href="#about" className="hover:text-accentGold transition-colors">About</a>
          <a href="#projects" className="hover:text-accentGold transition-colors">Projects</a>
          <a href="#contact" className="hover:text-accentGold transition-colors">Contact</a>
        </div>

        {/* Right column: Back to top button */}
        <button
          onClick={handleScrollToTop}
          aria-label="Back to top"
          className="w-10 h-10 rounded-full border border-accentGold/20 hover:border-accentGold/60 flex items-center justify-center text-textSecondary hover:text-accentGold bg-bgPrimary transition-all duration-300 focus:outline-none"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
