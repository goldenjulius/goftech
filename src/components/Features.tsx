
import { Check } from "lucide-react";

const featuresList = [
  "24/7 Expert Technical Support",
  "Proactive Monitoring & Maintenance",
  "Multi-Cloud Platform Expertise",
  "Rapid Response Time & Resolution",
  "Cost Optimization Analysis",
  "Advanced Security Implementations",
  "Automated Backup Solutions",
  "Scalable Infrastructure Design",
  "Performance Tuning & Optimization",
  "Disaster Recovery Planning"
];

const Features = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-gradient">GofTech</span> for Your Cloud & DevOps Needs?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With years of expertise in cloud technologies and DevOps practices, we deliver reliable solutions that help businesses operate more efficiently and securely in the cloud.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuresList.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-blue flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-blue rounded-2xl transform rotate-3 opacity-10"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Our Expertise</h3>
                <p className="text-gray-600">The technologies and platforms we specialize in</p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  "AWS", "Azure", "Google Cloud", 
                  "Kubernetes", "Docker", "Terraform",
                  "Jenkins", "Ansible", "GitHub Actions",
                  "MongoDB", "MySQL", "PostgreSQL"
                ].map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center bg-gray-50 py-4 px-2 rounded-lg border border-gray-100"
                  >
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
