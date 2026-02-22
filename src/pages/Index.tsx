import { Navigation } from "@/components/portfolio/Navigation";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <>
      <title>Majji yeswanth - Full-Stack Developer</title>
      <meta name="description" content="Full-Stack Web Developer specializing in React, Node.js, and modern web technologies. Building interactive, secure, and scalable applications." />
      <meta name="keywords" content="Full-Stack Developer, React Developer, Node.js, Web Development, JavaScript, Portfolio" />
      <meta name="author" content="Majji yeswanth" />
      <meta property="og:title" content="Majji yeswanth - Full-Stack Developer" />
      <meta property="og:description" content="Full-Stack Web Developer specializing in React, Node.js, and modern web technologies." />
      <meta property="og:type" content="website" />
      
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
