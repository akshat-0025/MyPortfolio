import { motion } from "framer-motion";
import { Award, Cloud, Code, Database, Shield, TrendingUp, CheckCircle } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  pdfUrl: string;
}

const certificates: Certificate[] = [
  {
    id: "aws-ai-ml",
    title: "AWS Cloud AI-ML Virtual Internship",
    issuer: "EduSkills Foundation | AWS Academy",
    description: "Hands-on experience in machine learning pipelines, data preparation, SageMaker deployments, and statistical modeling.",
    icon: <TrendingUp className="text-accentGold" size={24} />,
    tags: ["AWS", "AI-ML", "SageMaker"],
    pdfUrl: "/ai-ml_certificate.pdf"
  },
  {
    id: "android-dev",
    title: "Android App Development Virtual Internship",
    issuer: "EduSkills Foundation | Google Developers",
    description: "Designed responsive mobile apps using modern architectures, lifecycle handlers, UI layouts, and local database integrations.",
    icon: <Code className="text-accentGold" size={24} />,
    tags: ["Android", "Kotlin", "Mobile Dev"],
    pdfUrl: "/android-dev_certificate.pdf"
  },
  {
    id: "celonis-pm",
    title: "Process Mining Virtual Internship",
    issuer: "EduSkills Foundation | Celonis",
    description: "Configured business process analyses, mapped workflow efficiencies, identified bottlenecks, and modeled analytics schemas.",
    icon: <Database className="text-accentGold" size={24} />,
    tags: ["Celonis", "Process Mining", "Data Science"],
    pdfUrl: "/celonis_certificate.pdf"
  },
  {
    id: "data-science",
    title: "Altair x Data Science Virtual Internship",
    issuer: "EduSkills Foundation | Alteryx Academy",
    description: "Constructed data preparation flows, joined structured sources, executed exploratory analytics, and formatted predictive outputs.",
    icon: <TrendingUp className="text-accentGold" size={24} />,
    tags: ["Altair", "Data Science", "Analytics"],
    pdfUrl: "/data-science_certificate.pdf"
  },
  {
    id: "employability-skills",
    title: "Employability Skills Virtual Internship",
    issuer: "EduSkills Foundation | AICTE",
    description: "Developed core business communication methods, professional collaboration styles, workplace coordination, and project dynamics.",
    icon: <Award className="text-accentGold" size={24} />,
    tags: ["Soft Skills", "Business", "Coordination"],
    pdfUrl: "/employability_certificate.pdf"
  },
  {
    id: "gen-ai",
    title: "AWS Cloud Generative AI Virtual Internship",
    issuer: "EduSkills Foundation | AWS Academy",
    description: "Explored generative foundations, LLMs, prompt engineering paradigms, secure integrations, and AWS Bedrock development.",
    icon: <Cloud className="text-accentGold" size={24} />,
    tags: ["Generative AI", "LLM", "Prompting"],
    pdfUrl: "/gen-ai_certificate.pdf"
  },
  {
    id: "juniper-network",
    title: "Juniper Networks Cloud & Networking Virtual Internship",
    issuer: "EduSkills Foundation | Juniper Academy",
    description: "Configured networking protocols, router subnets, cloud routing architectures, system topologies, and secure firewall rules.",
    icon: <Shield className="text-accentGold" size={24} />,
    tags: ["Juniper", "Networking", "Security"],
    pdfUrl: "/juniper_certificate.pdf"
  }
];

interface CertificationsProps {
  onOpenModal: (
    title: string,
    subtitle: string,
    type: "vault" | "image" | "pdf",
    fileUrl?: string
  ) => void;
}

export default function Certifications({ onOpenModal }: CertificationsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <section id="certifications" className="relative py-24 bg-bgSecondary overflow-hidden">
      {/* Background Subtle Grid */}
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
              04 / Credentials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-textPrimary"
            >
              Virtual Internships
            </motion.h2>
            <div className="h-[1px] w-20 bg-accentGold mt-4" />
          </div>
          <p className="mt-4 md:mt-0 text-textSecondary font-sans font-light max-w-sm text-sm sm:text-base">
            Professional certifications verified through EduSkills Foundation in partnership with AICTE.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              onClick={() => onOpenModal(cert.title, cert.issuer, "pdf", cert.pdfUrl)}
              className="glass-panel glass-panel-hover p-6 rounded flex flex-col justify-between cursor-pointer relative overflow-hidden group min-h-[280px]"
            >
              {/* Premium gold vertical accent line */}
              <div className="absolute top-0 left-0 w-[3px] h-full bg-accentGold/20 group-hover:bg-accentGold transition-colors duration-500" />
              
              {/* Gold seal background watermark */}
              <div className="absolute -right-4 -bottom-4 text-accentGold/[0.02] transform -rotate-12 group-hover:text-accentGold/[0.04] transition-colors duration-500 pointer-events-none">
                <Award size={140} />
              </div>

              <div>
                {/* Top header within card */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 bg-bgPrimary rounded border border-accentGold/10">
                    {cert.icon}
                  </div>
                  
                  {/* Verified Badge */}
                  <span className="inline-flex items-center space-x-1 bg-successGreen/10 border border-successGreen/20 px-2 py-0.5 rounded text-[9px] font-heading font-medium tracking-wider text-successGreen uppercase">
                    <CheckCircle size={10} />
                    <span>Verified</span>
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-textPrimary uppercase tracking-wider mb-2 group-hover:text-accentGold transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <h4 className="text-[10px] font-mono tracking-widest text-textSecondary uppercase mb-3">
                  {cert.issuer}
                </h4>
                
                <p className="text-xs text-textSecondary font-sans font-light leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Tags & Action row */}
              <div className="flex justify-between items-center pt-4 border-t border-accentGold/5 mt-auto">
                <div className="flex flex-wrap gap-1">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] text-accentGold/80 bg-bgPrimary/60 px-2 py-0.5 rounded border border-accentGold/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-accentGold group-hover:text-textPrimary transition-colors duration-300">
                  View Certificate
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
