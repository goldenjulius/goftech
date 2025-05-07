
import { Check } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">GofTech</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our differentiators that make us the preferred choice for cloud and DevOps solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Industry Experience",
              description: "Over a decade of experience working with enterprises across various industries.",
              icon: "🏆"
            },
            {
              title: "Certified Professionals",
              description: "Team of certified cloud and DevOps experts with proven expertise.",
              icon: "📜"
            },
            {
              title: "Custom Solutions",
              description: "Tailored approaches designed to meet your specific business needs.",
              icon: "🛠️"
            },
            {
              title: "Ongoing Support",
              description: "Continuous assistance and proactive monitoring to ensure optimal performance.",
              icon: "🔄"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
