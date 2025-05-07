
import { Button } from "@/components/ui/button";
import { Cloud, Server, Database } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-tech clip-path-slant">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Cloud & DevOps <br />
              <span className="text-cloud-400">Support Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Empowering businesses with scalable cloud infrastructure and 
              streamlined DevOps practices for maximum efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-cloud-400 hover:bg-cloud-500 text-goftech-600 font-medium text-lg py-6 px-8">
                Get Started
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium text-lg py-6 px-8">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cloud-400/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
            <div className="relative grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 animate-float">
                <Cloud size={40} className="text-cloud-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-300">Scalable solutions for your growing business needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 mt-12 animate-float" style={{ animationDelay: "1s" }}>
                <Server size={40} className="text-cloud-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">DevOps Excellence</h3>
                <p className="text-gray-300">Automated workflows that deliver results</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 col-span-2 animate-float" style={{ animationDelay: "2s" }}>
                <Database size={40} className="text-cloud-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Expert Support</h3>
                <p className="text-gray-300">Always-on assistance when you need it most</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
