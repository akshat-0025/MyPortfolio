import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ShieldAlert, Award, FileText } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  type: "vault" | "image" | "pdf" | "";
  fileUrl?: string;
}

export default function Modal({ isOpen, onClose, title, subtitle, type, fileUrl }: ModalProps) {
  // Generate a mock secure credential ID based on title
  const generateCredentialId = (titleStr: string) => {
    const slug = titleStr
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase();
    return `ES-AS-2024-${slug}-9841`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-bgPrimary/90 backdrop-blur-md cursor-pointer"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`relative w-full ${
              type === "pdf" ? "max-w-4xl h-[90vh]" : "max-w-2xl"
            } bg-bgSecondary border border-accentGold/20 rounded shadow-2xl p-6 sm:p-8 overflow-hidden z-10`}
          >
            {/* Gold ambient background glow */}
            <div className="absolute inset-0 radial-gradient-glow opacity-30 pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-bgPrimary/60 border border-accentGold/10 text-textSecondary hover:text-accentGold focus:outline-none transition-colors duration-200 z-20"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Vault Certificate View */}
            {type === "vault" && (
              <div className="relative border border-dashed border-accentGold/30 p-6 sm:p-10 rounded bg-bgPrimary/40 flex flex-col items-center text-center">
                {/* Gold Seal background pattern */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accentGold/[0.01] pointer-events-none">
                  <Award size={320} />
                </div>

                {/* Header info */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-accentGold/10 border border-accentGold/30 flex items-center justify-center text-accentGold mb-3">
                    <FileText size={28} />
                  </div>
                  <span className="text-[10px] font-heading font-semibold uppercase tracking-[0.3em] text-accentGold mb-1">
                    Secure Digital Credential
                  </span>
                  <div className="h-[1px] w-12 bg-accentGold/30" />
                </div>

                {/* Content details */}
                <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-textPrimary uppercase tracking-wider mb-2 leading-snug">
                  {title}
                </h3>
                
                <p className="text-xs font-mono tracking-widest text-accentGold uppercase mb-8">
                  {subtitle}
                </p>

                {/* Recipient Details */}
                <div className="w-full max-w-sm border-y border-accentGold/10 py-4 mb-8">
                  <div className="text-[9px] font-mono tracking-widest text-textSecondary uppercase mb-1">
                    Awarded to
                  </div>
                  <div className="font-heading font-bold text-base text-textPrimary uppercase tracking-widest">
                    Akshat Sharma
                  </div>
                  <div className="text-[10px] font-sans font-light text-textSecondary mt-1">
                    BCA Graduate, National PG College
                  </div>
                </div>

                {/* Verification row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full bg-bgPrimary/60 border border-accentGold/10 p-3.5 rounded text-left">
                  <div>
                    <div className="text-[8px] font-mono tracking-widest text-textSecondary uppercase">
                      Credential ID
                    </div>
                    <div className="text-[11px] font-mono text-textPrimary select-all">
                      {generateCredentialId(title)}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-successGreen/10 border border-successGreen/20 px-3 py-1.5 rounded">
                    <CheckCircle size={14} className="text-successGreen" />
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-successGreen">
                      Verified Authenticity
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* PDF Certificate View */}
            {type === "pdf" && fileUrl && (
              <div className="flex flex-col h-full">
                <div className="pr-8 mb-4">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-textPrimary uppercase tracking-wider mb-1">
                    {title}
                  </h3>
                  <h4 className="text-[10px] font-mono tracking-widest text-accentGold uppercase">
                    {subtitle}
                  </h4>
                </div>
                <div className="flex-grow w-full rounded overflow-hidden border border-accentGold/10 bg-bgPrimary relative min-h-0">
                  <iframe
                    src={fileUrl}
                    className="w-full h-full border-none bg-white"
                    title={title}
                  />
                </div>
                <div className="flex justify-end gap-3 pt-4 mt-auto">
                  <a
                    href={fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-accentGold text-bgPrimary border border-accentGold px-5 py-2 rounded font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-transparent hover:text-accentGold focus:outline-none"
                  >
                    Open Full PDF
                  </a>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center justify-center bg-transparent hover:bg-bgSecondary/30 border border-textSecondary/20 hover:border-textPrimary px-5 py-2 rounded font-heading font-semibold text-xs tracking-wider uppercase text-textSecondary hover:text-textPrimary transition-all duration-300 focus:outline-none"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {/* Placeholder Fallback for raw image/pdf types if url is missing */}
            {type !== "vault" && type !== "pdf" && type !== "" && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <ShieldAlert size={48} className="text-accentGold mb-4 animate-bounce" />
                <h3 className="font-heading font-bold text-lg text-textPrimary uppercase tracking-wider mb-2">
                  Document Preview Unavailable
                </h3>
                <p className="text-xs text-textSecondary max-w-sm leading-relaxed mb-6 font-sans font-light">
                  The original scan of this document is stored in the secure institutional database. Please inspect the verified digital credential view instead.
                </p>
                <button
                  onClick={onClose}
                  className="bg-accentGold text-bgPrimary border border-accentGold px-6 py-2 rounded font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-transparent hover:text-accentGold focus:outline-none"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
