import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  Database, 
  Server, 
  GitBranch, 
  MessageSquare,
  Users,
  Brain,
  Palette,
  Code,
  Github,
  Send,
  FileText
} from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        { name: "HTML", icon: Globe },
        { name: "CSS", icon: Palette },
        { name: "JavaScript", icon: Code },
        { name: "React.js", icon: Code },
        { name: "Tailwind CSS", icon: Palette }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", icon: Server },
        { name: "Express.js", icon: Server }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", icon: Database },
        { name: "MongoDB", icon: Database }
      ],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Tools",
      icon: GitBranch,
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "GitHub", icon: Github },
        { name: "Postman", icon: Send },
        { name: "MS Office", icon: FileText }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const softSkills = [
    { name: "Communication", icon: MessageSquare },
    { name: "Teamwork", icon: Users },
    
    { name: "Critical Thinking", icon: Code }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8"></div>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="border-border/50 h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <skill.icon className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Soft Skills</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <skill.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
                    <p className="font-medium">{skill.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};