import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Building Stronger Communities,{" "}
              <span className="text-accent">One Building at a Time.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Empower your Property Management Company with financial transparency
              and direct communication tools.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <a href="#contact">Join the Waitlist</a>
            </Button>
          </div>

          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Symviosis platform illustration showing connected apartment building with financial and communication tools"
              className="w-full max-w-lg rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
