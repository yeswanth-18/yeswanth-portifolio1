import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:munnamajii1@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yeswanth18",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/munnamajii",
      label: "GitHub"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">Majii Yeswanth</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Full-Stack Developer passionate about creating innovative web solutions 
              and building meaningful digital experiences.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="p-3 rounded-lg bg-card hover:bg-primary/20 transition-colors group"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-center"
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:text-right"
          >
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>munnamajii1@gmail.com</p>
              <p>+91 9100187849</p>
              <p>Andhra Pradesh, India</p>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-6 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group"
            >
              <ArrowUp className="h-5 w-5 text-primary group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-border/50 mt-12 pt-8 text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made by Majii Yeswanth Venkata Sai
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};