import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="max-w-3xl mx-auto">
          {[
            {
              step: "1",
              title: "Install the Extension",
              description: "Download and install our browser extension in seconds",
            },
            {
              step: "2",
              title: "Write Your Message",
              description: "Start composing your email as you normally would",
            },
            {
              step: "3",
              title: "Choose Your Tone",
              description: "Select the perfect tone for your message",
            },
            {
              step: "4",
              title: "Generate & Send",
              description: "Get AI-powered suggestions and send your perfect email",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-6 mb-8 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              {index < 3 && (
                <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground mt-3" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};