
import { Cloud } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-goftech-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Cloud className="mr-2 text-cloud-400" />
              <span className="font-bold text-2xl">
                Gof<span className="text-cloud-400">Tech</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Expert cloud and DevOps support services to help your business thrive in the digital age.
            </p>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-6">Quick Links</h5>
            <ul className="space-y-3">
              <li><a href="/#home" className="text-gray-300 hover:text-cloud-400 transition-colors">Home</a></li>
              <li><a href="/#services" className="text-gray-300 hover:text-cloud-400 transition-colors">Services</a></li>
              <li><a href="/#about" className="text-gray-300 hover:text-cloud-400 transition-colors">About Us</a></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cloud-400 transition-colors">Careers</Link></li>
              <li><a href="/#contact" className="text-gray-300 hover:text-cloud-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-6">Services</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-cloud-400 transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cloud-400 transition-colors">DevOps Automation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cloud-400 transition-colors">Security Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cloud-400 transition-colors">Technical Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-6">Contact Us</h5>
            <address className="not-italic text-gray-300 space-y-3">
              <p>123 Tech Street</p>
              <p>Cloud City, CC 98765</p>
              <p className="hover:text-cloud-400 transition-colors">
                <a href="mailto:support@goftech.com">support@goftech.com</a>
              </p>
              <p className="hover:text-cloud-400 transition-colors">
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-700 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} GofTech Supports. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-gray-400 hover:text-cloud-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-cloud-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
