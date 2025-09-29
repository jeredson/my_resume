import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="hero" className="pt-16">
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
