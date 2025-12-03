import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TeachingExperience from "@/components/TeachingExperience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <TeachingExperience />
      <Projects />
      <Education />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
