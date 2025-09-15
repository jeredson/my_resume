import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target } from "lucide-react";

const About = () => {
  const skills = [
    "Manual Testing & Test Case Design",
    "Quality Control & Product Inspection",
    "Defect Reporting & Bug Tracking",
    "Front-End Development & Responsive Design",
    "Database Management & Query Optimization",
    "Web Deployment & Hosting"
  ];

  const techSkills = {
    "Languages": ["Python", "SQL", "Java", "JavaScript"],
    "Frameworks": ["Selenium", "Streamlit"],
    "Tools": ["Netlify", "Vercel", "Google App Scripts", "JIRA"],
    "Platforms": ["VS Code", "Anaconda", "Windows", "Eclipse"]
  };

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-hero mb-4">
              About Me
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              Passionate about ensuring software quality and leveraging data science 
              to solve complex problems. Currently pursuing B.Tech in AI & Data Science.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Professional Profile */}
            <div>
              <Card className="p-8 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-text-hero">Professional Profile</h3>
                </div>
                <p className="text-text-body leading-relaxed">
                  Self-motivated and detail-oriented software testing enthusiast with academic grounding in 
                  Quality Control and hands-on experience in personal software QA projects. Strong 
                  understanding of inspection, auditing, statistical analysis, and requirement validation.
                </p>
              </Card>
            </div>

            {/* Education */}
            <div>
              <Card className="p-8 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-text-hero">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Bachelor of Technology (B.Tech)</h4>
                    <p className="text-text-body">Artificial Intelligence and Data Science</p>
                    <p className="text-text-light">Kings Engineering College • May 2025 • GPA: 7.3/10</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Higher Secondary (H.S.C.)</h4>
                    <p className="text-text-light">Daniel Thomas Matric Hr Sec School • June 2021 • 76%</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">High School (S.S.L.C.)</h4>
                    <p className="text-text-light">Daniel Thomas Matric. Hr. Sec. School • June 2019 • 78%</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Technical Skills */}
            <div>
              <Card className="p-8 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <h3 className="text-2xl font-semibold text-text-hero mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {Object.entries(techSkills).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-foreground mb-3">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item, index) => (
                          <Badge
                            key={index}
                            className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
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

          {/* Professional Skills Row */}
          <div className="mb-16">
            <Card className="p-8 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-text-hero">Professional Skills</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm py-2 px-4 justify-start bg-secondary/60 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
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