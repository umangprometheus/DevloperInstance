import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_communication_hero_background_060c3b3c.png";

export function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/20" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight" data-testid="text-hero-heading">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-hero-subheading">
          Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
        </p>
        <button
          onClick={scrollToForm}
          className="inline-flex items-center justify-center text-white/80 hover:text-white transition-colors"
          aria-label="Scroll to contact form"
          data-testid="button-scroll-to-form"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
