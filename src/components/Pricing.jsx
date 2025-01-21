// export const Pricing = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           Simple, Transparent Pricing
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Free",
//               price: "$0",
//               description: "Perfect for trying out our service",
//               features: [
//                 "5 emails per day",
//                 "Basic tone adjustments",
//                 "Standard response time",
//                 "Email templates",
//               ],
//               // cta: "Get Started",
//               popular: true,
//             },
//             {
//               title: "Pro",
//               price: "$9.99",
//               period: "/month",
//               description: "Best for professionals",
//               features: [
//                 "Unlimited emails",
//                 "Advanced tone control",
//                 "Priority response time",
//                 "Custom templates",
//                 "API access",
//                 "Premium support",
//               ],
//               // cta: "Start Pro Trial",
//               popular: true,
//             },
//             {
//               title: "Enterprise",
//               price: "Custom",
//               description: "For large organizations",
//               features: [
//                 "Everything in Pro",
//                 "Custom integration",
//                 "Dedicated support",
//                 "SLA guarantee",
//                 "Team management",
//                 "Advanced analytics",
//               ],
//               cta: "Contact Sales",
//               popular: false,
//             },
//           ].map((plan, index) => (
//             <div
//               key={index}
//               className={`glass-card p-8 rounded-xl animate-fade-up ${
//                 plan.popular
//                   ? "border-2 border-primary relative transform scale-105"
//                   : ""
//               }`}
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               {plan.popular && (
//                 <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
//                   Most Popular
//                 </span>
//               )}
//               <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
//               <div className="mb-4">
//                 <span className="text-4xl font-bold">{plan.price}</span>
//                 {plan.period && (
//                   <span className="text-gray-600">{plan.period}</span>
//                 )}
//               </div>
//               <p className="text-gray-600 mb-6">{plan.description}</p>
//               <ul className="space-y-3 mb-8">
//                 {plan.features.map((feature, featureIndex) => (
//                   <li key={featureIndex} className="flex items-center">
//                     <svg
//                       className="w-5 h-5 text-green-500 mr-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
//                   plan.popular
//                     ? "bg-primary text-white hover:bg-primary/90"
//                     : "bg-gray-100 hover:bg-gray-200"
//                 }`}
//               >
//                 {plan.cta}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };