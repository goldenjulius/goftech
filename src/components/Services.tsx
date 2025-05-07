
import { 
  Cloud, Server, Database, Code, 
  Settings, MonitorSmartphone, Shield, Users 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const serviceItems = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Design, implementation and management of scalable cloud environments on AWS, Azure, and Google Cloud."
  },
  {
    icon: Code,
    title: "DevOps Automation",
    description: "CI/CD pipeline implementation and optimization for faster, more reliable software delivery."
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Expert setup, migration, and optimization of cloud databases for performance and reliability."
  },
  {
    icon: Server,
    title: "Server Management",
    description: "Proactive monitoring, maintenance, and optimization of your server infrastructure."
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Implementation of best practices for cloud security, compliance, and data protection."
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Seamless integration of cloud services with your existing business applications."
  },
  {
    icon: MonitorSmartphone,
    title: "24/7 Monitoring",
    description: "Around-the-clock monitoring and alert systems to prevent downtime and issues."
  },
  {
    icon: Users,
    title: "Technical Consulting",
    description: "Expert guidance on cloud strategy, architecture, and technology selection."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Cloud & DevOps</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to power your digital transformation and keep your infrastructure running smoothly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((service, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-blue flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={24} />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
