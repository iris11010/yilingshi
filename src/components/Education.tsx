import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "PhD in Psychiatry (Candidate)",
      institution: "King's College London",
      location: "United Kingdom",
      years: "2021 - Present",
      thesis: "Mechanisms underlying the effects of cannabinoids on cognition: implications for psychosis",
      highlights: [
        "Designed multimodal neuroimaging analyses (fMRI + 1H-MRS + behaviour)",
        "Built high-performance computing pipelines for MRI preprocessing",
        "Conducted Bayesian hierarchical meta-analysis across 62 RCTs",
        "Applied machine learning (XGBoost, SHAP) for moderator identification",
      ],
    },
    {
      degree: "MSc Psychiatric Research (Distinction)",
      institution: "King's College London",
      location: "United Kingdom",
      years: "2020 - 2021",
      thesis: "Acute use of cannabidiol modulates amygdala functional connectivity during fear processing in CHR",
      highlights: [
        "Research Methods",
        "Statistics",
        "Biological Psychiatry",
        "Therapeutic Research",
      ],
    },
    {
      degree: "Bachelor of Medicine (MBBS equivalent)",
      institution: "Central South University",
      location: "China",
      years: "Completed",
      thesis: "",
      highlights: [
        "Comprehensive medical training",
        "Preclinical and clinical disciplines",
        "Psychiatry and neurosciences",
      ],
    },
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Education & <span className="text-gradient">Training</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Academic background and qualifications in psychiatry and neuroscience
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 card-hover bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                  {index === 0 ? (
                    <Award className="w-6 h-6 text-primary" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-primary" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.degree}
                    </h3>
                    <span className="text-sm text-primary font-medium whitespace-nowrap">
                      {item.years}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground font-medium mb-1">
                    {item.institution}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.location}
                  </p>
                  
                  {item.thesis && (
                    <p className="text-sm text-foreground mb-4 italic">
                      <strong>Thesis:</strong> {item.thesis}
                    </p>
                  )}
                  
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
