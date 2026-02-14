import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, Calendar, Plane } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "SkillSwap",
      description: "A comprehensive platform for skill exchange with secure user authentication and real-time communication features.",
      icon: Users,
      features: [
        "JWT-based authentication system",
        "Real-time skill matching algorithm",
        "User profile management",
        "Secure messaging system",
        "Rating and review system"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/munnamajii/exchange-skills-live",
      demo: "#",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "MediConnect",
      description: "Healthcare platform connecting patients with doctors, featuring appointment scheduling and health management tools.",
      icon: Calendar,
      features: [
        "Doctor appointment booking",
        "Medicine reminder system",
        "AI-powered chatbot assistance",
        "Patient health records",
        "Telemedicine integration"
      ],
      techStack: ["React.js", "Node.js", "MySQL", "Socket.io", "AI/ML"],
      github: "#",
      demo: "#",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Travel Buddy",
      description: "Social travel platform for finding travel companions and sharing travel costs with fellow adventurers and geolocation features.",
      icon: Plane,
      features: [
        "Travel partner matching",
        "Cost sharing calculator",
        "Trip planning tools",
        "Location-based search",
        "Community reviews"
      ],
      techStack: ["React.js", "Express.js", "MongoDB", "Maps API", "PayPal"],
      github: "https://github.com/munnamajii/roadie-sync-app",
      demo: "#",
      color: "from-orange-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
                transition: {
                  duration: 0.4,
                  ease: "easeOut"
                }
              }}
              className="group h-full"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="border-border/50 h-full overflow-hidden flex flex-col backdrop-blur-sm bg-card/95">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-r ${project.color} shadow-lg`}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <project.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-6 flex flex-col flex-1">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -30, scale: 0.8 }}
                          whileInView={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: featureIndex * 0.08,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          whileHover={{
                            x: 8,
                            transition: { duration: 0.2 }
                          }}
                          className="flex items-center space-x-2 text-sm text-muted-foreground cursor-default"
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-primary rounded-full"
                            whileHover={{ 
                              scale: 1.5,
                              backgroundColor: "hsl(180 100% 50%)",
                              transition: { duration: 0.2 }
                            }}
                          ></motion.div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: techIndex * 0.05,
                            ease: "easeOut"
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-muted/50 hover:bg-primary/20 transition-colors cursor-default"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex space-x-3 pt-4 mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                        onClick={() => {
                          if (project.github !== "#") {
                            window.open(project.github, "_blank", "noopener,noreferrer");
                          }
                        }}
                        disabled={project.github === "#"}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 8px 25px rgba(157, 78, 221, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full shadow-glow transition-all duration-300"
                        onClick={() => {
                          if (project.demo !== "#") {
                            window.open(project.demo, "_blank", "noopener,noreferrer");
                          }
                        }}
                        disabled={project.demo === "#"}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};