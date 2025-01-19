import { Button } from "./ui/button";
import { ArrowDown, Chrome } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto animate-fade-down">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Write Better Emails Faster
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Transform your email communication with AI-powered suggestions. Perfect tone,
          clear message, every time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="button-gradient text-lg px-8 py-6 rounded-full animate-slide-up-fade group">
            <Chrome className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Download Extension
          </Button>
          <Button
            variant="outline"
            className="text-lg px-8 py-6 rounded-full animate-slide-up-fade"
            onClick={() => {
              const composer = document.querySelector("#email-composer");
              composer?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Try Demo
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};