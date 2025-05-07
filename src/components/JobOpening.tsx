
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, MapPin, Clock } from "lucide-react";

interface JobProps {
  job: {
    id: number;
    title: string;
    location: string;
    type: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
  };
}

const JobOpening = ({ job }: JobProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="mb-6 border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="cursor-pointer" onClick={toggleExpand}>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">{job.title}</CardTitle>
            <CardDescription className="flex items-center gap-4 mt-2">
              <span className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-1" /> {job.location}
              </span>
              <span className="flex items-center text-gray-600">
                <Clock size={16} className="mr-1" /> {job.type}
              </span>
            </CardDescription>
          </div>
          <Button variant="ghost" className="p-2">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </Button>
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="pt-2">
          <div className="mb-6">
            <p className="text-gray-700">{job.description}</p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-bold text-lg mb-3">Responsibilities</h4>
            <ul className="list-disc pl-5 space-y-1">
              {job.responsibilities.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="font-bold text-lg mb-3">Requirements</h4>
            <ul className="list-disc pl-5 space-y-1">
              {job.requirements.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6">
            <Button className="bg-gradient-blue hover:opacity-90 transition-opacity">
              Apply Now
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default JobOpening;
