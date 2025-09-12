import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7358767387",
      href: "tel:+917358767387"
    },
    {
      icon: Mail,
      label: "Email",
      value: "jeredson12108@gmail.com",
      href: "mailto:jeredson12108@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "jeredson-daniel-raj",
      href: "https://www.linkedin.com/in/jeredson-daniel-raj/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamil Nadu, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-hero mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              I'm always interested in discussing new opportunities in software testing, 
              data science, and quality assurance. Let's talk about how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-text-hero mb-6">Get In Touch</h3>
                <p className="text-text-body mb-8 leading-relaxed">
                  Whether you're looking for a dedicated software tester, a data science enthusiast, 
                  or someone passionate about quality assurance, I'd love to hear from you. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="grid gap-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="p-4 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                    <a 
                      href={item.href}
                      className="flex items-center gap-4"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {item.label}
                        </h4>
                        <p className="text-text-body">{item.value}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4 pt-4">
                <Button
                  size="lg"
                  className="w-full bg-gradient-primary text-primary-foreground hover:shadow-medium transition-all duration-300"
                  asChild
                >
                  <a href="mailto:jeredson12108@gmail.com">
                    <Send className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/jeredson-daniel-raj/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Professional Summary Card */}
            <div>
              <Card className="p-8 bg-gradient-card border-0 shadow-strong h-full">
                <h3 className="text-2xl font-semibold text-text-hero mb-6">
                  Ready to Collaborate
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What I Bring</h4>
                    <ul className="space-y-2 text-text-body">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Strong foundation in manual testing and quality assurance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Experience with data science and machine learning projects
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Proficiency in Python, SQL, and testing frameworks
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Detail-oriented approach to problem solving
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Currently Seeking</h4>
                    <p className="text-text-body">
                      Entry-level positions in Software Testing, Quality Assurance, 
                      or Data Analysis where I can contribute to building reliable 
                      software solutions and grow my professional expertise.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-text-light text-sm">
                      Available for immediate opportunities • Open to remote or on-site positions
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;