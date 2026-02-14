import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Award, Code, Shield, Cloud } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Deloitte Virtual Internship",
      type: "Virtual Internship",
      icon: Building,
      description: "Gained hands-on experience in data analysis, business intelligence, and strategic consulting methodologies.",
      skills: ["Data Analysis", "Business Intelligence", "Excel", "Strategic Thinking"]
    }
  ];

  const certifications = [
   
    {
      title: "Python Essentials",
      issuer: "Cisco Networking Academy",
      icon: Code,
      description: "Comprehensive training in Python programming fundamentals and advanced concepts.",
      badge: "Certification"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      icon: Shield,
      description: "Understanding cybersecurity principles, threat assessment, and security best practices.",
      badge: "Certification"
    },
    {
      title: "Google Cloud Computing",
      issuer: "Google Cloud Platform",
      icon: Cloud,
      description: "Cloud infrastructure, services, and deployment strategies on Google Cloud Platform.",
      badge: "Certification"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold mb-8 flex items-center"
            >
              <Building className="mr-3 h-6 w-6 text-accent" />
              Professional Experience
            </motion.h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="border-border/50">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg gradient-primary">
                          <exp.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <p className="text-accent font-medium">{exp.company}</p>
                          <Badge variant="secondary" className="mt-2">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="border-primary/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold mb-8 flex items-center"
            >
              <Award className="mr-3 h-6 w-6 text-accent" />
              Certifications & Achievements
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-accent/20">
                          <cert.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{cert.title}</h4>
                            <Badge 
                              variant={cert.badge === "Achievement" ? "default" : "secondary"}
                              className={cert.badge === "Achievement" ? "shadow-glow" : ""}
                            >
                              {cert.badge}
                            </Badge>
                          </div>
                          <p className="text-accent text-sm font-medium mb-2">{cert.issuer}</p>
                          <p className="text-muted-foreground text-sm">{cert.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};