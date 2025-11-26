import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Publications = () => {
  const articles = [
    {
      title: "A single dose of cannabidiol modulates hippocampal glutamate–prefrontal coupling in individuals at clinical high risk of psychosis",
      authors: "Shi, Y. et al.",
      journal: "Under Revision",
      year: "2025",
      volume: "Preprint",
      pages: "",
      doi: "10.1101/2024.11.06.24316831",
    },
    {
      title: "The effect of cannabinoids on cognition: A Bayesian meta-analysis",
      authors: "Shi, Y. et al.",
      journal: "In Preparation",
      year: "2025",
      volume: "",
      pages: "",
      doi: "",
    },
    {
      title: "A systematic evidence map of the association between cannabis use and psychosis-related outcomes across the psychosis continuum: An umbrella review of systematic reviews and meta-analyses",
      authors: "Groening, J., Shi, Y. et al.",
      journal: "Psychiatry Research",
      year: "2023",
      volume: "330",
      pages: "115626",
      doi: "10.1016/j.psychres.2023.115626",
    },
    {
      title: "Analysis of the Prediction of Adolescent Depressive Diseases and the Mediating Effect of Exercise Factors Based on Basic Census Data",
      authors: "Li, Q., Shi, Y. et al.",
      journal: "The Journal of Physical Activity & Health",
      year: "2024",
      volume: "3(3)",
      pages: "65",
      doi: "10.18122/ijpah.3.3.65.boisestate",
    },
  ];

  const presentations = [
    {
      title: "Cannabinoid Effects on Cognition in Psychosis",
      event: "Schizophrenia International Research Society",
      location: "Chicago, IL",
      year: "2025",
      type: "Poster Presentation",
    },
    {
      title: "CBD and Hippocampal-Prefrontal Connectivity in Clinical High Risk",
      event: "European College of Neuropsychopharmacology",
      location: "Barcelona, Spain",
      year: "2023",
      type: "Poster Presentation",
    },
    {
      title: "Neuroimaging Mechanisms of Cannabinoid Effects",
      event: "British Association of Psychopharmacology",
      location: "Manchester, UK",
      year: "2023",
      type: "Poster Presentation",
    },
  ];

  const achievements = [
    {
      title: "King's–China Scholarship Council PhD Scholarship",
      organization: "King's College London & China Scholarship Council",
      year: "2021-2025",
      description: "Full doctoral funding for research on cannabinoids and psychosis",
    },
    {
      title: "Early Career Travel Award",
      organization: "Schizophrenia International Research Society",
      year: "2025",
      description: "Supporting presentation at SIRS conference in Chicago",
    },
    {
      title: "Brain Charity Travel Award",
      organization: "The Brain Charity",
      year: "2023, 2025",
      description: "Travel funding for international conference presentations",
    },
  ];

  return (
    <section id="publications" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Publications & <span className="text-gradient">Achievements</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Academic contributions to the field of psychosis research
        </p>

        <Tabs defaultValue="articles" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="articles">Journal Articles</TabsTrigger>
            <TabsTrigger value="presentations">Presentations</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-6">
            {articles.map((article, index) => (
              <Card 
                key={index}
                className="p-6 card-hover bg-card border-border"
              >
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {article.authors}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="italic">{article.journal}</span>, {article.year}
                  {article.volume && `, ${article.volume}`}
                  {article.pages && `, ${article.pages}`}
                </p>
                <div className="flex gap-3">
                  {article.doi && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex items-center gap-2"
                      onClick={() => window.open(`https://doi.org/${article.doi}`, '_blank')}
                    >
                      <ExternalLink size={16} />
                      {article.doi.includes('10.1101') ? 'Preprint' : 'DOI'}
                    </Button>
                  )}
                  {!article.doi && (
                    <span className="text-sm text-muted-foreground italic">In Preparation</span>
                  )}
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="presentations" className="space-y-6">
            {presentations.map((presentation, index) => (
              <Card 
                key={index}
                className="p-6 card-hover bg-card border-border"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground flex-1">
                    {presentation.title}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full whitespace-nowrap ml-4">
                    {presentation.type}
                  </span>
                </div>
                <p className="text-muted-foreground mb-1">
                  {presentation.event}
                </p>
                <p className="text-sm text-muted-foreground">
                  {presentation.location} • {presentation.year}
                </p>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="p-6 card-hover bg-card border-border"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground flex-1">
                    {achievement.title}
                  </h3>
                  <span className="text-sm text-primary font-medium whitespace-nowrap ml-4">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-muted-foreground font-medium mb-2">
                  {achievement.organization}
                </p>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Publications;
