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
                question: "How does the AI email assistant work?",
                answer: "Our AI email assistant uses advanced natural language processing to understand your writing style and context. It then generates suggestions that match your tone and intent while maintaining professionalism.",
              },
              {
                question: "Is my email data secure?",
                answer: "Yes, we take data security seriously. All email content is encrypted and processed securely. We never store your email content or share it with third parties.",
              },
              {
                question: "Which email clients are supported?",
                answer: "Our extension works with Gmail, Outlook, and most major web-based email clients. We're constantly adding support for more platforms.",
              },
              {
                question: "Can I customize the AI's writing style?",
                answer: "Absolutely! You can choose from multiple tones (professional, friendly, formal, etc.) and the AI will adapt its suggestions accordingly.",
              },
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