import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Publications = () => {
  const articles = [
    {
      title: "Cognitive Predictors of Functional Outcomes in First-Episode Psychosis: A Longitudinal Study",
      authors: "Shi, Y., Johnson, M., & Smith, R.",
      journal: "Schizophrenia Research",
      year: "2024",
      volume: "265",
      pages: "123-134",
      doi: "10.1016/j.schres.2024.01.001",
    },
    {
      title: "Neural Correlates of Social Cognition Deficits in Schizophrenia: An fMRI Investigation",
      authors: "Shi, Y., Chen, L., Davis, P., & Williams, K.",
      journal: "Biological Psychiatry",
      year: "2023",
      volume: "94(8)",
      pages: "645-656",
      doi: "10.1016/j.biopsych.2023.05.012",
    },
    {
      title: "Early Intervention in Psychosis: A Systematic Review of Cognitive Remediation Approaches",
      authors: "Shi, Y., & Thompson, A.",
      journal: "Journal of Clinical Psychology",
      year: "2023",
      volume: "79(3)",
      pages: "456-478",
      doi: "10.1002/jclp.23456",
    },
  ];

  const presentations = [
    {
      title: "Biomarkers of Treatment Response in Early Psychosis",
      event: "Annual Meeting of the Society of Biological Psychiatry",
      location: "Chicago, IL",
      year: "2024",
      type: "Oral Presentation",
    },
    {
      title: "Machine Learning Approaches to Predicting Psychosis Onset",
      event: "International Congress on Schizophrenia Research",
      location: "San Diego, CA",
      year: "2023",
      type: "Poster Presentation",
    },
    {
      title: "Social Functioning Interventions in Schizophrenia: Current Evidence",
      event: "American Psychiatric Association Annual Meeting",
      location: "New York, NY",
      year: "2023",
      type: "Symposium Talk",
    },
  ];

  const achievements = [
    {
      title: "Graduate Research Fellowship",
      organization: "National Institute of Mental Health",
      year: "2023-2026",
      description: "Competitive fellowship supporting doctoral research in psychosis",
    },
    {
      title: "Outstanding Student Research Award",
      organization: "International Society for Psychological and Social Approaches to Psychosis",
      year: "2023",
      description: "Recognition for exceptional contributions to psychosis research",
    },
    {
      title: "Best Poster Award",
      organization: "University Research Symposium",
      year: "2022",
      description: "First place for research on cognitive functioning in psychosis",
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
                  <span className="italic">{article.journal}</span>, {article.year}, {article.volume}, {article.pages}
                </p>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => window.open(`https://doi.org/${article.doi}`, '_blank')}
                  >
                    <ExternalLink size={16} />
                    DOI: {article.doi}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex items-center gap-2"
                  >
                    <FileText size={16} />
                    PDF
                  </Button>
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
