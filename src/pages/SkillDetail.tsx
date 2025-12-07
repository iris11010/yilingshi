import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";

const SkillDetail = () => {
  const { skillId } = useParams<{ skillId: string }>();
  const skillName = skillId ? decodeURIComponent(skillId) : "Skill";
  const isGcpSkill =
    skillName === "Good Clinical Practice (GCP, CTIMP-certified)";
  const isFslSkill = skillName === "FSL (FEAT, MELODIC)";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 section-padding">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8">
            <Link
              to="/#skills"
              className="text-sm text-primary hover:underline"
            >
              ← Back to Skills
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {skillName}
          </h1>
          <p className="text-muted-foreground mb-8 text-lg">
            {isGcpSkill
              ? "Overview of my Good Clinical Practice (GCP) training and how I apply CTIMP-compliant procedures in clinical research."
              : isFslSkill
              ? "Overview of my FSL-based neuroimaging analysis skills, including FEAT and MELODIC, supported by formal FSL course training."
              : "This page will describe how I use this skill in my research and clinical work, including concrete examples (e.g. CANTRIPS study), workflows, and links to code, protocols, and other materials."}
          </p>

          <div className="space-y-8">
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3">
                How I use this skill
              </h2>
              {isGcpSkill ? (
                <p className="text-muted-foreground">
                  I apply Good Clinical Practice principles to ensure that all CANTRIPS
                  and related studies are conducted in line with CTIMP regulations,
                  including participant safety, data integrity, and appropriate
                  documentation of consent and procedures.
                </p>
              ) : isFslSkill ? (
                <p className="text-muted-foreground">
                  I use FSL (including FEAT and MELODIC) for preprocessing and analysing
                  fMRI and MRS data, for example in THC and CBD studies, handling motion
                  correction, registration, GLM modelling, and ICA-based denoising.
                </p>
              ) : (
                <p className="text-muted-foreground">
                  I&apos;ll add a short narrative here explaining the context in which I
                  use{" "}
                  <span className="font-medium">{skillName}</span> (e.g. specific
                  studies, populations, or analysis pipelines), and what my
                  responsibilities are.
                </p>
              )}
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3">
                Example projects & materials
              </h2>
              {isGcpSkill ? (
                <div className="space-y-4">
                  <p className="text-muted-foreground mb-3">
                    Below is my certificate of completion for{" "}
                    <span className="font-medium">
                      Good Clinical Practice and the Medicines for Human Use (Clinical
                      Trials) Regulations (CTIMP)
                    </span>{" "}
                    at King&apos;s Health Partners Clinical Trials Office (Dec 2021).
                  </p>
                  <div className="border border-border rounded-lg overflow-hidden bg-muted/40">
                    <img
                      src="/yilingshi/posters/GCP Certificate_Yiling Shi_2.jpg"
                      alt="Good Clinical Practice (CTIMP) training certificate"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    This training is TransCelerate-accredited and underpins my work on
                    protocol adherence, informed consent processes, and safety
                    monitoring in clinical research projects.
                  </p>
                </div>
              ) : isFslSkill ? (
                <div className="space-y-4">
                  <p className="text-muted-foreground mb-3">
                    Below is my certificate of completion for the{" "}
                    <span className="font-medium">FSL Course 2023 (Online)</span>,
                    covering advanced fMRI analysis methods including FEAT and MELODIC.
                  </p>
                  <div className="border border-border rounded-lg overflow-hidden bg-muted/40">
                    <img
                      src="/yilingshi/posters/Yiling_Shi_FSL.jpg"
                      alt="FSL Course 2023 certificate"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    This course, delivered by FMRIB / WIN, supports my application of
                    FSL tools to multimodal neuroimaging datasets in my PhD projects.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-muted-foreground mb-3">
                    This section will link to GitHub repositories, preregistrations,
                    ethics documents, interview guides, Gorilla tasks, posters, or
                    other outputs that showcase this skill.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>GitHub repository or code snippet (to be added)</li>
                    <li>Study materials or protocols (to be added)</li>
                    <li>Presentations, posters, or preprints (to be added)</li>
                  </ul>
                </>
              )}
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3">
                Related skills
              </h2>
              <p className="text-muted-foreground">
                Later I can cross-link to other relevant skills (for example,
                ethics applications, clinical interviews, or specific analysis
                tools that are often used together with{" "}
                <span className="font-medium">{skillName}</span>).
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SkillDetail;


