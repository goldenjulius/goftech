
import { Badge } from "@/components/ui/badge";

const Partners = () => {
  const partners = [
    { name: "Microsoft", type: "Cloud Provider" },
    { name: "AWS", type: "Cloud Provider" },
    { name: "Google Cloud", type: "Cloud Provider" },
    { name: "HashiCorp", type: "DevOps Tools" },
    { name: "Datadog", type: "Monitoring" },
    { name: "Atlassian", type: "DevOps Tools" },
    { name: "Red Hat", type: "Enterprise Solutions" },
    { name: "Cloudflare", type: "Security" }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Working with industry leaders to deliver excellence in cloud and DevOps solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
              <Badge variant="secondary" className="bg-cloud-100 text-goftech-600">
                {partner.type}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
