
const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The technologies and platforms we specialize in to deliver cutting-edge solutions for your business.
          </p>
        </div>
        
        <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              "AWS", "Azure", "Google Cloud", 
              "Kubernetes", "Docker", "Terraform",
              "Jenkins", "Ansible", "GitHub Actions",
              "MongoDB", "MySQL", "PostgreSQL"
            ].map((tech, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center bg-gray-50 py-4 px-2 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
