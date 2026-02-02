import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-text-hero leading-normal px-1 py-2">
                  JEREDSON
                  <span className="block bg-gradient-primary bg-clip-text text-transparent font-extrabold tracking-wider whitespace-nowrap">
                    DANIEL RAJ
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-text-body font-medium mt-2">
                  Software Testing Enthusiast & Data Science Professional
                </p>
                <p className="text-lg text-text-body max-w-xl leading-relaxed">
                  Self-motivated and detail-oriented professional with expertise in Quality Control, 
                  manual testing, and data science. Passionate about building reliable software solutions 
                  through analytical thinking and continuous learning.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 text-text-body">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91 7358767387</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>jeredson12108@gmail.com</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg"
                  asChild
                  className="bg-gradient-primary text-primary-foreground hover:shadow-medium transition-all duration-300 hover:scale-105"
                >
                  <a 
                    href="https://drive.google.com/file/d/1O8Dh80n6mbKCRTbKBHp8qT0KuyGfdAry/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    View Resume
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <a 
                    href="https://www.linkedin.com/in/jeredson-daniel-raj/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative bg-gradient-card rounded-3xl p-2 shadow-strong">
                  <img
                    src="/lovable-uploads/bfb81025-4cb2-4807-8e07-9a03f7ec5bdb.png"
                    alt="S Jeredson Daniel Raj - Professional headshot"
                    className="w-80 h-96 object-cover rounded-2xl shadow-medium"
                  />
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