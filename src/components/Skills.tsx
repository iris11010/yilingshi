import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Computational Modelling",
      skills: ["Bayesian Models", "Machine Learning", "XGBoost", "SHAP", "Cross-validation"],
    },
    {
      title: "Neuroimaging & Analysis",
      skills: ["FSL (FEAT, MELODIC)", "fMRI", "1H-MRS", "HPC Pipelines", "Multimodal Integration"],
    },
    {
      title: "Programming & Tools",
      skills: ["Python", "R", "MATLAB", "Data Science", "Reproducible Workflows"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Technical expertise and methodological skills in psychiatric neuroimaging research
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
