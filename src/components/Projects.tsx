import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Music, Users, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Assisted Low Code Platform for Machine Learning Development",
      type: "Final Year Project",
      description: "Developed a user-friendly platform for deploying ML models with minimal coding. Integrated Python libraries such as Sci-kit learn and Streamlit for backend logic and visualization. Enabled rapid prototyping for classification and regression problems.",
      technologies: ["Python", "Sci-Kit Learn", "Tkinter", "Streamlit"],
      icon: Brain,
      category: "Machine Learning"
    },
    {
      title: "Spotify Music Recommender Based on Human Emotion",
      type: "Mini Project",
      description: "Designed an emotion-based recommendation engine using sentiment analysis of lyrics and user mood detection. Utilized Python, Pandas, and NLP techniques for feature extraction and classification. Improved recommendation accuracy by mapping user inputs to mood-specific playlists.",
      technologies: ["Python", "Pandas", "NLP", "Sentiment Analysis"],
      icon: Music,
      category: "Data Science"
    },
    {
      title: "Parent Feedback Collection System",
      type: "Internship Project",
      description: "Developed a web-based feedback form for parents to evaluate class teachers, using HTML for the frontend interface. Integrated Google Apps Script to handle form submissions and automate data transfer to Google Sheets for real-time storage and analysis.",
      technologies: ["HTML", "Google Apps Script", "Google Sheets", "JavaScript"],
      icon: Users,
      category: "Web Development",
      codeLink: "https://github.com/jeredson/parents_feeback",
      demoLink: "https://parentsfeedback.netlify.app/"
    }
  ];

  const getIconColor = (category: string) => {
    switch (category) {
      case "Machine Learning":
        return "text-purple-500";
      case "Data Science":
        return "text-green-500";
      case "Web Development":
        return "text-blue-500";
      default:
        return "text-primary";
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-hero mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              A showcase of my technical projects spanning machine learning, data science, 
              and web development, demonstrating practical application of skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-all duration-300 group h-full flex flex-col">
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center ${getIconColor(project.category)}`}>
                      <project.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      {project.type}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>

                <div className="flex-1">
                  <p className="text-text-body mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-secondary/60 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.codeLink || project.demoLink ? (
                    <div className="flex gap-3 pt-2">
                      {project.codeLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demoLink && (
                        <Button
                          size="sm"
                          asChild
                          className="flex-1 bg-gradient-primary text-primary-foreground hover:shadow-medium transition-all duration-300"
                        >
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Project Info */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-card border-0 shadow-soft inline-block">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Code className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-text-hero">More Projects Coming Soon</h3>
              </div>
              <p className="text-text-body max-w-md">
                Currently working on additional projects in automation testing, 
                machine learning applications, and full-stack web development.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;