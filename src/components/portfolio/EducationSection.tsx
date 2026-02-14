import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <Card className="border-border/50 overflow-hidden">
              <CardHeader className="relative">
                <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="flex items-start space-x-6">
                  <div className="p-4 rounded-xl gradient-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">
                      Bachelor of Technology in Computer Science & Engineering
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>SRKR Engineering College</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>2nd Year Student</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="shadow-glow">
                        <Award className="mr-1 h-3 w-3" />
                        GPA: 8.0/10
                      </Badge>
                      <Badge variant="secondary">
                        Current Student
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Core Subjects</h4>
                    <ul className="space-y-2">
                      {[
                        "Data Structures & Algorithms",
                        "Object-Oriented Programming",
                        "Database Management Systems",
                        "Computer Networks",
                        "Software Engineering"
                      ].map((subject, index) => (
                        <motion.li
                          key={subject}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center space-x-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{subject}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Academic Highlights</h4>
                    <ul className="space-y-2">
                      {[
                        "Consistent academic excellence",
                        "Active participation in coding competitions",
                        "Member of Computer Science Club",
                        "Volunteer in tech events",
                        "Research interest in web technologies"
                      ].map((highlight, index) => (
                        <motion.li
                          key={highlight}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center space-x-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-border/50 pt-6">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-muted-foreground leading-relaxed"
                  >
                    Currently pursuing my Bachelor's degree with a focus on modern software development 
                    practices, algorithms, and system design. My academic journey has provided me with 
                    a strong foundation in computer science fundamentals while allowing me to explore 
                    practical applications through various projects and internships.
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};