import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { initAnimations } from "@/lib/animations";

const Index = () => {
  useEffect(() => {
    const controller = initAnimations();
    
    return () => {
      controller?.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
