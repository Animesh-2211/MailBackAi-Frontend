import { EmailComposer } from "@/components/EmailComposer";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <section id="email-composer">
      <EmailComposer />
      </section>
      <Testimonials />
      {/* <Pricing /> */}
      <FAQ />
      {/* <Footer /> */}
    </main>
  );
};

export default Index;