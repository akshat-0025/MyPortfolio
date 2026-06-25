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
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

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
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
