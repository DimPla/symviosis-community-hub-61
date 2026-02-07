import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import TrustSection from "@/components/TrustSection";
import InterestForm from "@/components/InterestForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ValuePropsSection />
        <TrustSection />
        <InterestForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
