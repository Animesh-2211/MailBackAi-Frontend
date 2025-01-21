import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {[
             {
              question: "How does the AI Email Assistant work?",
              answer: "The AI Email Assistant analyzes the content of your emails and generates a reply based on the tone and style you select. It helps you respond quickly and professionally by understanding your context and intent."
            },
            {
              question: "Is the AI Email Assistant free to use?",
              answer: "Yes! Our basic features are completely free to use, giving you access to unlimited email replies with no cost. However, we offer additional premium features for users who need more advanced capabilities."
            },
            {
              question: "Is there a limit to how many emails I can generate replies for?",
              answer: "For free users, there is a daily limit to how many replies you can generate. Premium users enjoy unlimited access without any restrictions."
            },
            {
              question: "Can I use the AI Assistant for all my email responses?",
              answer: "Absolutely! You can use the AI Email Assistant for replying to any email content you receive, whether personal or professional. It's designed to adapt to different tones and styles."
            },
            {
              question: "Do I need an internet connection to use the assistant?",
              answer: "Yes, you’ll need an internet connection to access the AI Email Assistant as it processes your email content through the cloud for accurate and quick replies."
            },
            {
              question: "Will the assistant store my email data?",
              answer: "No, we value your privacy. The AI Assistant processes your email content in real time and does not store any of your emails. All data is encrypted and discarded after use."
            }
            
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};