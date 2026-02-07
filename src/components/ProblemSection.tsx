import { FileSpreadsheet, AlertTriangle, Users } from "lucide-react";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Spreadsheet Chaos",
    description: "Tracking expenses across dozens of spreadsheets leads to errors, delays, and zero accountability.",
  },
  {
    icon: AlertTriangle,
    title: "Lack of Transparency",
    description: "Tenants never know where their money goes, breeding frustration and mistrust.",
  },
  {
    icon: Users,
    title: "Poor Coordination",
    description: "Important building decisions are lost in group chats or ignored emails.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">The Problem</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Managing Buildings Shouldn't Be This Hard
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Property management companies juggle countless spreadsheets, disconnected tools, and frustrated tenants every single day.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {problems.map((p) => (
            <div key={p.title} className="flex flex-col items-center gap-3 p-6">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <p.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
