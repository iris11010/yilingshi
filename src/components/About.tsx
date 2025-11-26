import { Brain, BookOpen, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Neuroimaging",
      description: "Multimodal integration of fMRI, MRS, and behavioural data",
    },
    {
      icon: BookOpen,
      title: "Meta-Analysis",
      description: "Bayesian hierarchical models and machine learning approaches",
    },
    {
      icon: Users,
      title: "Clinical Research",
      description: "Focus on cannabinoids and cognition in psychosis",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          I'm a PhD candidate at King's College London investigating how cannabinoids affect cognition in psychosis.
          My research combines neuroimaging, computational modelling, and meta-analytic approaches to understand these mechanisms.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 text-center card-hover bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
