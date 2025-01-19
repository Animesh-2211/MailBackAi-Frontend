import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 animate-fade-down">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
        Smart Email Assistant
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
        Write better emails faster with AI-powered suggestions. Perfect tone, clear message, every time.
      </p>
      <Button className="button-gradient text-lg px-8 py-6 rounded-full animate-slide-up-fade">
        Download Extension
        <ArrowDown className="ml-2 h-5 w-5" />
      </Button>
    </section>
  );
};