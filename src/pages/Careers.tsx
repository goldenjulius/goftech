
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobOpening from "@/components/JobOpening";

// Job opening data
const jobOpenings = [
  {
    id: 1,
    title: "Senior Cloud Engineer",
    location: "Remote (US)",
    type: "Full-Time",
    description: "We're looking for an experienced Cloud Engineer to design, implement, and maintain scalable cloud infrastructure solutions for our clients. The ideal candidate will have strong expertise in AWS, Azure, or Google Cloud, with a focus on automation, security, and best practices.",
    responsibilities: [
      "Design and implement cloud infrastructure solutions on AWS, Azure, or GCP",
      "Develop Infrastructure as Code (IaC) using Terraform, CloudFormation, or ARM templates",
      "Optimize cloud resources for cost, performance, and security",
      "Implement monitoring, logging, and alerting solutions",
      "Mentor junior engineers and contribute to technical documentation"
    ],
    requirements: [
      "5+ years of experience in cloud engineering",
      "Expert knowledge of at least one major cloud platform (AWS, Azure, GCP)",
      "Strong experience with Infrastructure as Code tools",
      "Excellent troubleshooting and problem-solving skills",
      "Professional certifications like AWS Solutions Architect, Azure Solutions Architect, or GCP Professional Cloud Architect"
    ]
  },
  {
    id: 2,
    title: "DevOps Engineer",
    location: "Remote (Worldwide)",
    type: "Full-Time",
    description: "We are seeking a skilled DevOps Engineer to streamline our development and deployment processes. This role focuses on implementing CI/CD pipelines, automating infrastructure, and ensuring high reliability and performance of our systems.",
    responsibilities: [
      "Build and maintain CI/CD pipelines using tools like Jenkins, GitLab CI, or GitHub Actions",
      "Implement and manage containerization using Docker and orchestration with Kubernetes",
      "Collaborate with development teams to improve deployment processes",
      "Monitor system performance and respond to incidents",
      "Implement security best practices throughout the infrastructure"
    ],
    requirements: [
      "3+ years of experience in DevOps or similar role",
      "Strong knowledge of CI/CD tools and containerization technologies",
      "Experience with configuration management tools like Ansible, Puppet, or Chef",
      "Understanding of networking concepts and security best practices",
      "Scripting skills in Bash, Python, or similar languages"
    ]
  },
  {
    id: 3,
    title: "Cloud Security Specialist",
    location: "Hybrid (Cloud City)",
    type: "Full-Time",
    description: "We're looking for a Cloud Security Specialist to ensure our client's cloud environments are secure, compliant, and protected from threats. This role will focus on implementing security controls, conducting assessments, and advising on best practices.",
    responsibilities: [
      "Implement and manage cloud security controls and policies",
      "Perform security assessments, audits, and penetration testing",
      "Develop and maintain security documentation and compliance reports",
      "Respond to security incidents and implement remediation measures",
      "Stay updated with the latest cloud security threats and solutions"
    ],
    requirements: [
      "4+ years of experience in cybersecurity with focus on cloud platforms",
      "Deep understanding of cloud security services and compliance frameworks",
      "Experience with security tools and services like AWS Security Hub, Azure Security Center, or GCP Security Command Center",
      "Knowledge of regulatory requirements like GDPR, HIPAA, SOC2, etc.",
      "Security certifications such as CISSP, CCSP, or AWS/Azure/GCP security certifications"
    ]
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 bg-gradient-tech clip-path-slant">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our <span className="text-cloud-400">Team</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Be part of a dynamic team that's revolutionizing cloud and DevOps services.
                We're always looking for talented individuals to help us grow.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Current <span className="text-gradient">Openings</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect opportunity to advance your career in cloud and DevOps.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {jobOpenings.map((job) => (
                <JobOpening key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
