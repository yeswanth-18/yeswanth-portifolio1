import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("#")}
          >
            KM
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
                whileHover={{ 
                  y: -2,
                  color: "hsl(263 100% 68%)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
                <motion.span 
                  className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ 
                    scaleX: 1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                ></motion.span>
              </motion.button>
            ))}
            
            <motion.a
              href="/yeswanth_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="shadow-glow inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(157, 78, 221, 0.4)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              transition: {
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.1,
                delayChildren: 0.1
              }
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.05,
                staggerDirection: -1
              }
            }
          }}
          className="md:hidden overflow-hidden py-4 border-t border-border/50"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
                variants={{
                  open: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  },
                  closed: {
                    opacity: 0,
                    x: -20,
                    transition: {
                      duration: 0.2
                    }
                  }
                }}
                whileHover={{
                  x: 4,
                  color: "hsl(263 100% 68%)",
                  transition: { duration: 0.2 }
                }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.a
              href="/yeswanth_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="self-start mt-4 shadow-glow inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              variants={{
                open: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut"
                  }
                },
                closed: {
                  opacity: 0,
                  y: 20,
                  transition: {
                    duration: 0.2
                  }
                }
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(157, 78, 221, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};