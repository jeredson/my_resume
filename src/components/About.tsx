import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target, TrendingUp, Code2, Database } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: "Manual Testing & Test Case Design", level: 90, icon: Target },
    { name: "Quality Control & Product Inspection", level: 85, icon: Award },
    { name: "Defect Reporting & Bug Tracking", level: 88, icon: TrendingUp },
    { name: "Front-End Development & Responsive Design", level: 82, icon: Code2 },
    { name: "Database Management & Query Optimization", level: 78, icon: Database },
    { name: "Web Deployment & Hosting", level: 80, icon: Code2 }
  ];

  const techSkills = {
    "Languages": ["Python", "SQL", "Java", "JavaScript"],
    "Frameworks": ["Selenium", "Streamlit", "React.js"],
    "Tools": ["Netlify", "Vercel", "Google App Scripts", "JIRA"],
    "Platforms": ["VS Code", "Anaconda", "Windows", "Eclipse"]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-6">
              <Target className="w-4 h-4 mr-2" />
              About Me
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Passionate </span>
              <span className="text-gradient">Professional</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dedicated to ensuring software quality and leveraging data science 
              to solve complex problems. Currently pursuing B.Tech in AI & Data Science 
              with hands-on experience in professional projects.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Professional Profile */}
            <div className={`transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Card className="premium-card p-8 h-full group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                    Professional Profile
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Self-motivated and detail-oriented software testing enthusiast with academic grounding in 
                  Quality Control and hands-on experience in professional software QA projects. Strong 
                  understanding of inspection, auditing, statistical analysis, and requirement validation.
                </p>
              </Card>
            </div>

            {/* Education */}
            <div className={`transition-all duration-800 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Card className="premium-card p-8 h-full group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                    Education
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                    <h4 className="font-bold text-foreground text-lg">Bachelor of Technology (B.Tech)</h4>
                    <p className="text-primary font-medium">Artificial Intelligence and Data Science</p>
                    <p className="text-muted-foreground text-sm">Kings Engineering College • May 2025</p>
                    <div className="mt-2">
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                        GPA: 7.53/10
                      </Badge>
                    </div>
                  </div>
                  <div className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-muted rounded-full" />
                    <h4 className="font-semibold text-foreground">Higher Secondary (H.S.C.)</h4>
                    <p className="text-muted-foreground text-sm">Daniel Thomas Matric Hr Sec School • June 2021 • 76%</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Technical Skills */}
            <div className={`transition-all duration-800 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Card className="premium-card p-8 h-full group">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300 mb-6">
                  Technical Stack
                </h3>
                <div className="space-y-6">
                  {Object.entries(techSkills).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-primary" />
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item, index) => (
                          <Badge
                            key={index}
                            className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Skills Progress Section */}
          <div className={`mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Card className="premium-card p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">Core Competencies</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100 + 1000}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;