import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const InterestForm = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Ready to Transform Your Buildings?
          </h2>
          <p className="text-muted-foreground">
            Leave your details and we'll reach out to show you what Symviosis can do.
          </p>
        </div>

        <Card className="max-w-md mx-auto border border-border shadow-lg">
          <CardContent className="p-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="area">Area / Region</Label>
              <Input id="area" placeholder="e.g. New York, Miami" />
            </div>
            <Button className="w-full" size="lg">
              Request Info
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InterestForm;
