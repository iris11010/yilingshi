import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CANTRIPS Study - Recruiting Participants Now!",
      description: "Longitudinal study investigating the relationship between cannabis use 🍃 and subclinical psychotic symptoms 👀 as well as the cognitive mechanisms 🧠 that may underlie this association (e.g. predictive processing, memory). Includes online survey and optional follow-up interview.",
      tags: ["Recruitment Active", "Longitudinal", "Cannabis", "Cognition", "Psychosis"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      featured: true,
      links: {
        website: "https://lnkd.in/eB4zfxsM",
        instagram: "https://lnkd.in/er7TXbYU",
        facebook: "https://lnkd.in/eCT8C7UB",
        twitter: "https://lnkd.in/eagbRiVQ",
      },
      contact: {
        email: "cantrips@kcl.ac.uk",
        phone: "+44 7404 690103",
        address: "Floor 6 Institute of Psychiatry, Psychology and Neuroscience, King's College London Denmark Hill Campus, 16 De Crespigny Park, London, SE5 8AF"
      },
      team: {
        supervisors: ["Prof. Sagnik Bhattacharyya", "Dr. Kelly M.J. Diederen"],
        phd: ["Johanna Manja Groening", "Yiling/依灵 Shi/石", "Yuhan Deng"],
        msc: ["Ariel Taylor", "Bahar Bashir"],
        bsc: ["Emiola Oke"]
      }
    },
    {
      title: "Cannabidiol and Hippocampal-Prefrontal Coupling in Psychosis",
      description: "Published research investigating how a single dose of CBD modulates the relationship between hippocampal glutamate and learning-related prefrontal activation in individuals at clinical high risk of psychosis",
      tags: ["fMRI", "1H-MRS", "Clinical High Risk", "Published 2025"],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
      publicationUrl: "https://doi.org/10.1016/j.pscychresns.2025.112095",
      posterUrl: "/posters/cbd-hippocampal-prefrontal-poster.pdf",
    },
    {
      title: "Bayesian Meta-Analysis of Cannabinoid Effects on Cognition",
      description: "Comprehensive meta-analysis across 45 THC and 17 CBD RCTs using Bayesian hierarchical models and machine learning to identify moderators of cognitive effects",
      tags: ["Meta-Analysis", "Bayesian Models", "XGBoost", "Cognitive Function"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
    {
      title: "PhD Thesis: Cannabinoids, Cognition & Psychosis",
      description: "Multimodal investigation integrating neuroimaging, metabolite measures, and behavioural data to understand mechanisms underlying cannabinoid effects on cognition",
      tags: ["Multimodal Integration", "HPC Pipelines", "Computational Modelling"],
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
          Current PhD research and ongoing projects at King's College London
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`overflow-hidden card-hover bg-card border-border ${project.featured ? 'lg:col-span-2' : ''}`}
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

                {project.featured && project.contact && (
                  <div className="mb-4 p-4 bg-secondary/20 rounded-lg space-y-2">
                    <h4 className="font-semibold text-sm mb-2">Contact Information:</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail size={14} />
                      <a href={`mailto:${project.contact.email}`} className="hover:text-primary">{project.contact.email}</a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone size={14} />
                      <span>{project.contact.phone}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} className="mt-1 flex-shrink-0" />
                      <span>{project.contact.address}</span>
                    </div>
                  </div>
                )}

                {project.featured && project.team && (
                  <div className="mb-4 p-4 bg-secondary/20 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Team Members:</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium">Supervisors:</span> {project.team.supervisors.join(", ")}
                      </div>
                      <div>
                        <span className="font-medium">PhD Candidates:</span> {project.team.phd.join(", ")}
                      </div>
                      <div>
                        <span className="font-medium">MSc Students:</span> {project.team.msc.join(", ")}
                      </div>
                      <div>
                        <span className="font-medium">BSc Student:</span> {project.team.bsc.join(", ")}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {project.publicationUrl && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex items-center gap-2"
                      asChild
                    >
                      <a href={project.publicationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Publication
                      </a>
                    </Button>
                  )}
                  {project.posterUrl && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex items-center gap-2"
                      asChild
                    >
                      <a href={project.posterUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Poster
                      </a>
                    </Button>
                  )}
                  {project.links && (
                    <>
                      <Button 
                        size="sm" 
                        className="flex items-center gap-2"
                        asChild
                      >
                        <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Study Website
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        asChild
                      >
                        <a href={project.links.instagram} target="_blank" rel="noopener noreferrer">
                          Instagram
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        asChild
                      >
                        <a href={project.links.facebook} target="_blank" rel="noopener noreferrer">
                          Facebook
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        asChild
                      >
                        <a href={project.links.twitter} target="_blank" rel="noopener noreferrer">
                          X
                        </a>
                      </Button>
                    </>
                  )}
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
