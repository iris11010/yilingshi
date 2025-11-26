import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Research Methods",
      skills: ["Clinical Trials", "Statistical Analysis", "Literature Review", "Data Collection", "Case Studies"],
    },
    {
      title: "Technical Skills",
      skills: ["SPSS", "R", "Python", "Neuroimaging", "Psychometric Testing"],
    },
    {
      title: "Areas of Expertise",
      skills: ["Schizophrenia", "Bipolar Disorder", "Early Intervention", "Cognitive Assessment", "Treatment Outcomes"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Research methodologies and areas of expertise in psychosis study
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
