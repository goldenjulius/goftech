
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

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">GofTech</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With years of expertise in cloud technologies and DevOps practices, we deliver reliable solutions 
            that help businesses operate more efficiently and securely in the cloud.
          </p>
          <p className="text-lg font-medium text-goftech-600 mt-4">
            Based in Nigeria, serving clients globally
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Why Choose <span className="text-gradient">GofTech</span> for Your Cloud & DevOps Needs?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our team of certified professionals is dedicated to providing excellence in every aspect of cloud and DevOps services.
              We work closely with clients to understand their unique requirements and deliver tailored solutions.
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
            <div className="h-full bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To empower businesses with cutting-edge cloud and DevOps solutions that drive innovation, efficiency, and growth.
                We are committed to excellence, continuous improvement, and building lasting client relationships.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To be the leading provider of cloud and DevOps services in Nigeria and across Africa, recognized for our technical expertise, 
                client-focused approach, and contribution to digital transformation across industries.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Our Location</h3>
              <p className="text-gray-600">
                Headquartered in Lagos, Nigeria with satellite offices in Abuja and Port Harcourt, 
                enabling us to serve clients throughout Nigeria and across the African continent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
