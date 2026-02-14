import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yaswanthmajji20@gmail.com",
      href: "mailto:yaswanthmajji20@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8712141242",
      href: "tel:+918712141242"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yeswanth18",
      href: "https://www.linkedin.com/in/yeswanth18/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yeswanth-18",
      href: "https://github.com/yeswanth-18"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === "LinkedIn" || contact.label === "GitHub" ? "_blank" : undefined}
                  rel={contact.label === "LinkedIn" || contact.label === "GitHub" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="block"
                >
                  <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="p-3 rounded-lg gradient-primary"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <contact.icon className="h-5 w-5 text-primary-foreground" />
                        </motion.div>
                        <div>
                          <p className="font-medium">{contact.label}</p>
                          <p className="text-muted-foreground">{contact.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-2 text-muted-foreground"
            >
              <MapPin className="h-4 w-4" />
              <span>Andhra Pradesh, India</span>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Send me a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <Input
                    placeholder="Subject"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                  
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                  
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(157, 78, 221, 0.4)",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full shadow-glow hover:shadow-glow transition-all duration-300"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};