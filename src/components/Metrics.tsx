
import { 
  Database, 
  Users, 
  ChartBar, 
  Handshake 
} from "lucide-react";

const Metrics = () => {
  return (
    <section className="py-16 bg-gradient-tech clip-path-slant text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-cloud-400">Impact</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Delivering exceptional cloud and DevOps solutions across Nigeria and beyond
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Database size={28} className="text-cloud-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">250+</h3>
            <p className="text-sm md:text-base mt-2 opacity-80">Cloud Deployments</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Users size={28} className="text-cloud-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">120+</h3>
            <p className="text-sm md:text-base mt-2 opacity-80">Clients Served</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <ChartBar size={28} className="text-cloud-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">98%</h3>
            <p className="text-sm md:text-base mt-2 opacity-80">Uptime Guarantee</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Handshake size={28} className="text-cloud-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">30+</h3>
            <p className="text-sm md:text-base mt-2 opacity-80">Years Combined Staff Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
