import { Shield } from "lucide-react";

const TrustSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Shield className="text-primary" size={28} />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Built by Experts You Can Trust
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Symviosis is crafted by a team specialized in Software Development, with deep knowledge
          of the property management industry. We build technology that works for real people,
          solving real problems.
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
