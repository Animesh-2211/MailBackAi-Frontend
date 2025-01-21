import { Mail, Zap, Clock, Sparkles } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Powerful Email Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Mail className="h-8 w-8" />,
              title: "Smart Suggestions",
              description: "AI-powered writing suggestions that match your style",
            },
            {
              icon: <Zap className="h-8 w-8" />,
              title: "Instant Responses",
              description: "Generate professional responses in seconds",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              title: "Time Saving",
              description: "Cut email writing time by up to 80%",
            },
            {
              icon: <Sparkles className="h-8 w-8" />,
              title: "Multiple Tones",
              description: "Adjust your message tone to fit any situation",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};