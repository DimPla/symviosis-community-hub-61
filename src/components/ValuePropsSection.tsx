import { Eye, MessageCircle, Vote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const props = [
  {
    icon: Eye,
    title: "Financial Transparency",
    description: "Give every stakeholder a clear, real-time view of expenses, payments, and building finances.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "Seamless messaging between managers and tenants — no more lost emails or noisy group chats.",
  },
  {
    icon: Vote,
    title: "Smarter Decision Making",
    description: "Built-in voting and polling tools so every building decision is informed and democratic.",
  },
];

const ValuePropsSection = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Why Symviosis</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
          Everything You Need in One Place
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {props.map((p) => (
            <Card key={p.title} className="border border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <p.icon className="text-accent" size={28} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
