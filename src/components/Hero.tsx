import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
          Hi, I'm <span className="text-gradient">Yiling Shi</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          PhD Candidate in Psychiatry | King's College London
        </p>
        <p className="text-lg text-white/80 mb-12 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Investigating mechanisms underlying cannabinoid effects on cognition in psychosis
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="lg" 
            onClick={() => scrollToSection("research")}
            className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-elegant"
          >
            View My Research
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => scrollToSection("contact")}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            Get In Touch
          </Button>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
