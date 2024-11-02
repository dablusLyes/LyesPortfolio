import { Briefcase } from 'lucide-react';

const experiences = [
  {
    period: "2022 - 2024",
    role: "Frontend Developer",
    company: "Accenture",
    description: "Building user interfaces for the global PHILLIP MORRIS INTERNATIONAL E-commerce platform. Tasks include crafting dynamic interfaces for the IQOS e-commerce platform, writing unit tests, and improving code quality and performance.",
    technologies: ["TypeScript", "React", "Redux", "Jest", "AEM"]
  },
  {
    period: "2020 - 2022",
    role: "Fullstack Software Developer",
    company: "Update Fitness",
    description: "Built a comprehensive suite of systems including an in-house ERP, desktop and mobile applications for customer care and monitoring. Implemented data analytics and reporting features for administrative decision-making.",
    technologies: ["PHP", "React Native", "DHTMLX", "jQuery Mobile", "JavaScript"]
  }
];

export function Experience() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Briefcase className="w-6 h-6 text-blue-400" />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-400">
              <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-0"></div>
              <div className="mb-1 text-blue-400">{exp.period}</div>
              <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
              <div className="text-gray-400 mb-2">{exp.company}</div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex gap-2 flex-wrap">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}