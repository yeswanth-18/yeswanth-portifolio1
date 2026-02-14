import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Code, Lightbulb, Target } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Web Development",
      description: "Passionate about creating modern, responsive web applications"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Enjoy tackling complex challenges with innovative solutions"
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on continuous learning and professional growth"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 gradient-primary mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">
                  Computer Science Student & Developer
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I’m a third-year Computer Science Engineering student with a strong passion for building dynamic and responsive web applications. With a CGPA of 8.09, I’ve developed a solid foundation in JavaScript, React.js, Node.js, Express.js, MongoDB, Python, Java, and SQL, and have hands-on experience creating full-stack applications.
                  data management, and algorithmic problem-solving.My goal is to start my career as a MERN Stack Developer, building scalable and user-friendly applications while continuously learning in the fast-evolving world of web development. I’m actively seeking opportunities to contribute
                  grow, and make an impact through innovative web solutions.
                  I’ve applied my skills in projects like a MERN stack web application, where I built a complete frontend and backend system, implementing user authentication, API integration, and responsive design. My experience with Python, Java, and SQL further strengthens my ability to handle backend logic, data management, and algorithmic problem-solving.

                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  My goal is to start my career as a MERN Stack Developer, building scalable and user-friendly applications
                   while continuously learning in the fast-evolving world of web development. 
                  I’m actively seeking opportunities to contribute, grow, and make an impact through innovative web solutions.
                </p>
                <a
                  href="/yeswanth_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Button className="shadow-glow">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg gradient-primary">
                        <highlight.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                        <p className="text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};