import { Card } from "@/components/ui/card";

const TeachingExperience = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Teaching &amp; <span className="text-gradient">Clinical Experience</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-border">
            <h3 className="text-lg font-semibold mb-2">Graduate Teaching Assistant</h3>
            <p className="text-muted-foreground text-sm mb-2">
              King&apos;s College London • 2022-2024
            </p>
            <p className="text-sm text-muted-foreground">
              Delivered research methods teaching sessions under academic supervision.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border">
            <h3 className="text-lg font-semibold mb-2">MSc Dissertation Supervisor</h3>
            <p className="text-muted-foreground text-sm mb-2">
              King&apos;s College London • 2021-Present
            </p>
            <p className="text-sm text-muted-foreground">
              Supervising MSc projects on research design, analysis, and scientific writing.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border">
            <h3 className="text-lg font-semibold mb-2">Work-Based Clinical Training</h3>
            <p className="text-muted-foreground text-sm mb-2">
              Second Xiangya Hospital, Central South University • 2018-2019
            </p>
            <p className="text-sm text-muted-foreground">
              Completed work-based clinical training across psychiatry and other hospital
              wards, gaining supervised experience in assessment and management of a wide
              range of medical and mental health conditions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeachingExperience;


