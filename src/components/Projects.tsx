import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Music, Users, Code, ArrowUpRight, Calendar, Building } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "Ministry Management System",
      type: "Professional Project",
      description: "Developed a comprehensive Web application for the ministry to manage employee databases, payroll processing, and administrative operations. Implemented secure data handling, user authentication, and reporting features, enhancing operational efficiency and record-keeping accuracy.",
      technologies: ["JavaScript", "SQL", "React.js"],
      icon: Users,
      category: "Web Development",
      period: "November '25",
      client: "Bethel Missionary Movement",
      gradient: "from-blue-500/20 to-purple-500/20",
      featured: true
    },
    {
      title: "ERP Application Development and Testing",
      type: "Professional Project", 
      description: "Developed a centralized ERP for staff to automate daily work reporting, enhancing operational oversight and enabling data-driven decision-making for institutional management.",
      technologies: ["React.js", "JavaScript", "SQL"],
      icon: Code,
      category: "Web Development",
      period: "June '25 - Oct '25",
      client: "Daniel Thomas Institutions",
      gradient: "from-green-500/20 to-blue-500/20",
      featured: true
    },
    {
      title: "AI Assisted Low Code Platform for Machine Learning Development",
      type: "Final Year Project",
      description: "Developed a user-friendly platform for deploying ML models with minimal coding. Integrated Python libraries such as Sci-kit learn and Streamlit for backend logic and visualization. Enabled rapid prototyping for classification and regression problems.",
      technologies: ["Python", "Sci-Kit Learn", "Tkinter", "Streamlit"],
      icon: Brain,
      category: "Machine Learning",
      codeLink: "https://github.com/jeredson/AI_Flow/tree/main",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Spotify Music Recommender Based on Human Emotion",
      type: "Mini Project",
      description: "Designed an emotion-based recommendation engine using sentiment analysis of lyrics and user mood detection. Utilized Python, Pandas, and NLP techniques for feature extraction and classification. Improved recommendation accuracy by mapping user inputs to mood-specific playlists.",
      technologies: ["Python", "Pandas", "NLP", "Sentiment Analysis"],
      icon: Music,
      category: "Data Science",
      codeLink: "https://github.com/jeredson/Spoti-Finder",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      title: "Parent Feedback Collection System",
      type: "Internship Project",
      description: "Developed a web-based feedback form for parents to evaluate class teachers, using HTML for the frontend interface. Integrated Google Apps Script to handle form submissions and automate data transfer to Google Sheets for real-time storage and analysis.",
      technologies: ["HTML", "Google Apps Script", "Google Sheets", "JavaScript"],
      icon: Users,
      category: "Web Development",
      codeLink: "https://github.com/jeredson/parents_feeback",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Machine Learning":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      case "Data Science":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Web Development":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 section-reveal">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-6">
              <Code className="w-4 h-4 mr-2" />
              Featured Work
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Selected </span>
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my technical projects spanning machine learning, data science, 
              and web development, demonstrating practical application of skills and innovation.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                data-index={index}
                className={`group premium-card p-8 h-full flex flex-col relative overflow-hidden transition-all duration-700 ${
                  visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${project.featured ? 'lg:col-span-1' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <project.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="border-primary/30 text-primary mb-2">
                          {project.type}
                        </Badge>
                        {project.featured && (
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Featured
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Title and Meta */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300 mb-3 leading-tight">
                      {project.title}
                    </h3>
                    
                    {project.client && (
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span>{project.client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{project.period}</span>
                        </div>
                      </div>
                    )}
                    
                    <Badge className={`${getCategoryColor(project.category)} border`}>
                      {project.category}
                    </Badge>
                  </div>

                  {/* Description */}
                  <div className="flex-1 mb-8">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-secondary/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  {project.codeLink && (
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        asChild
                        className="flex-1 group/btn border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                      >
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                          View Code
                          <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">More Projects Coming Soon</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Currently working on additional projects in automation testing, 
                machine learning applications, and full-stack web development. 
                Stay tuned for more innovative solutions!
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>In Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;