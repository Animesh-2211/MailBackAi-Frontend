export const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "This tool has completely transformed how I handle my email communications. The time savings are incredible!",
              author: "Sarah Johnson",
              role: "Marketing Director",
            },
            {
              quote: "The tone adjustment feature is a game-changer. I can maintain professionalism while being friendly and approachable.",
              author: "Michael Chen",
              role: "Sales Manager",
            },
            {
              quote: "As a non-native English speaker, this tool helps me write more confidently and professionally.",
              author: "Anna Kowalski",
              role: "Product Designer",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="mb-4 text-lg">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};