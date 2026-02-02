import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Download, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="hero-glow absolute inset-0" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10" style={{ animation: 'float 6s ease-in-out infinite' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 animate-fade-in">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                  Available for opportunities
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground block animate-slide-in-left">
                    JEREDSON
                  </span>
                  <span className="text-gradient block font-extrabold tracking-tight animate-slide-in-right" style={{ animationDelay: '200ms' }}>
                    DANIEL RAJ
                  </span>
                </h1>
                
                <div className="space-y-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
                  <p className="text-2xl lg:text-3xl font-semibold text-foreground/90">
                    Software Testing Enthusiast &
                  </p>
                  <p className="text-2xl lg:text-3xl font-semibold text-gradient">
                    Data Science Professional
                  </p>
                  <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    Self-motivated and detail-oriented professional with expertise in Quality Control, 
                    manual testing, and data science. Passionate about building reliable software solutions 
                    through analytical thinking and continuous learning.
                  </p>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className={`flex flex-wrap gap-6 text-muted-foreground transition-all duration-800 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="group-hover:text-foreground transition-colors duration-300">+91 7358767387</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="group-hover:text-foreground transition-colors duration-300">jeredson12108@gmail.com</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className={`flex flex-wrap gap-4 pt-6 transition-all duration-1000 delay-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                <Button 
                  size="lg"
                  asChild
                  className="premium-button group px-8 py-6 text-base font-semibold"
                >
                  <a 
                    href="https://drive.google.com/file/d/1O8Dh80n6mbKCRTbKBHp8qT0KuyGfdAry/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    View Resume
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="px-8 py-6 text-base font-semibold border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                >
                  <a 
                    href="https://www.linkedin.com/in/jeredson-daniel-raj/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1200 delay-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 animate-pulse" />
                
                {/* Main Image Container */}
                <div className="relative premium-card rounded-3xl p-3 group-hover:scale-105 transition-all duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/lovable-uploads/bfb81025-4cb2-4807-8e07-9a03f7ec5bdb.png"
                      alt="Jeredson Daniel Raj - Professional headshot"
                      className="w-80 h-96 object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;