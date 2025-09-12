import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "ERP Testing and Webpage Development Intern",
      company: "Daniel Thomas Institutions",
      period: "June 2025",
      type: "Internship",
      description: "Specialized in ERP system testing and web development projects"
    },
    {
      title: "Data Science Intern",
      company: "Kaashiv Infotech",
      period: "October 2024",
      type: "Internship",
      description: "Focused on data science projects and analytical solutions"
    },
    {
      title: "Data Science Intern",
      company: "Retech Solutions",
      period: "May 2023",
      type: "Internship",
      description: "Worked on data analytics and machine learning projects"
    }
  ];

  const certifications = [
    {
      title: "Data Analytics Certification",
      issuer: "Retech Solutions",
      icon: Award
    },
    {
      title: "Data Science Internship",
      issuer: "Kaashiv Infotech",
      icon: Award
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-hero mb-4">
              Experience & Certifications
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              Building expertise through hands-on internships and professional certifications 
              in software testing and data science.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-text-hero mb-8 flex items-center gap-3">
                <Building className="w-6 h-6 text-primary" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <div className="flex items-center gap-2 text-text-light">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <Badge variant="outline" className="w-fit border-primary text-primary">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-text-body">{exp.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-text-hero mb-8 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <cert.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                          {cert.title}
                        </h4>
                        <p className="text-text-body">{cert.issuer}</p>
                      </div>
                    </div>
                  </Card>
                ))}
                
                {/* Languages & Interests */}
                <Card className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Languages & Interests</h4>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-text-body">Languages: </span>
                      <span className="text-text-light">English, Tamil</span>
                    </div>
                    <div>
                      <span className="font-medium text-text-body">Interests: </span>
                      <span className="text-text-light">Exploring Automation Tools, Problem Solving Puzzles</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;