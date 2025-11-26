import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Cognitive Deficits in Early Psychosis",
      description: "Investigating cognitive impairments in first-episode psychosis patients and their impact on functional outcomes",
      tags: ["Clinical Study", "Neuropsychology", "Longitudinal Design"],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
    },
    {
      title: "Treatment Response Predictors",
      description: "Analyzing biomarkers and clinical factors that predict response to antipsychotic medications",
      tags: ["Data Analysis", "Pharmacology", "Predictive Modeling"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
    {
      title: "Social Functioning Interventions",
      description: "Evaluating effectiveness of psychosocial interventions on social outcomes in schizophrenia",
      tags: ["RCT", "Intervention Study", "Quality of Life"],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    },
  ];

  return (
    <section id="research" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Research <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Current and recent research in psychosis and related disorders
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden card-hover bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    Publication
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
