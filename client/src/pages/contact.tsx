import { HeroSection } from "@/components/HeroSection";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="absolute top-0 right-0 z-20 p-6">
        <ThemeToggle />
      </header>

      <HeroSection />

      <main className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>

        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
