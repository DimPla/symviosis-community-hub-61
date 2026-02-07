import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const InterestForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear all fields
    setName("");
    setEmail("");
    setPhone("");
    setArea("");
    
    // Show success message
    setShowSuccess(true);
    
    // Hide after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

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

        {showSuccess && (
          <div className="max-w-md mx-auto mb-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg flex items-center gap-3 animate-fade-in-up">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-medium">Info sent to email</span>
          </div>
        )}

        <Card className="max-w-md mx-auto border border-border shadow-lg">
          <CardContent className="p-8 space-y-5">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your full name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="area">Area / Region</Label>
                <Input 
                  id="area" 
                  placeholder="e.g. New York, Miami" 
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Request Info
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InterestForm;
