import { useState } from "react";
import SEO from "./components/SEO";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Hackathons from "./components/Hackathons";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    subtitle: string;
    type: "vault" | "image" | "pdf" | "";
    fileUrl: string;
  }>({
    isOpen: false,
    title: "",
    subtitle: "",
    type: "",
    fileUrl: ""
  });

  const openModal = (
    title: string,
    subtitle: string,
    type: "vault" | "image" | "pdf",
    fileUrl?: string
  ) => {
    setModalState({
      isOpen: true,
      title,
      subtitle,
      type,
      fileUrl: fileUrl || ""
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      {/* Search Engine Optimization Meta tags */}
      <SEO />

      {/* Modern Cursor Tracking on Desktop */}
      <CustomCursor />

      {/* Premium Loader Animation */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Main Portfolio Shell */}
      {!isLoading && (
        <div className="relative min-h-screen bg-bgPrimary overflow-hidden">
          {/* Global Ambient Glow */}
          <div className="fixed inset-0 radial-gradient-glow opacity-80 pointer-events-none z-0" />

          {/* Core Layout */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Certifications onOpenModal={openModal} />
              <Hackathons />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      )}

      {/* Global Document Viewer Modal */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        subtitle={modalState.subtitle}
        type={modalState.type}
        fileUrl={modalState.fileUrl}
      />
    </>
  );
}
