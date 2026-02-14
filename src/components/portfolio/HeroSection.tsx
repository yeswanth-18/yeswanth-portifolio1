import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as any,
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1] as any
      }
    },
    hover: {
      scale: 1.05,
      y: -3,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-30"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative mb-8"
          variants={itemVariants}
        >
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full gradient-primary p-1">
              <div className="w-full h-full rounded-full bg-card overflow-hidden">
                <img 
                  src="/profile-picture.jpeg" 
                  alt="Majii Yeswanth Venkata Sai"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="text-gradient">Majii Yeswanth</span>
          <br />
          <span className="text-foreground">Venkata Sai</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-4"
          variants={itemVariants}
        >
          Full-Stack Developer
        </motion.p>

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          variants={itemVariants}
        >
          Building interactive, secure, and scalable web applications with modern technologies
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.a
            href="/yeswanth_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="shadow-glow inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium bg-primary text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Download className="mr-2 h-5 w-5" />
            View Resume
          </motion.a>
          
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};