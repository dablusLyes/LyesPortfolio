import React from 'react';
import { Code, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Sat-Track",
    description: "Real-Time Satellite Tracking to pinpoint the location of hundreds of active satellites orbiting Earth. The 2D map allows users to see their exact position in the sky relative to their location.",
    technologies: ["React", "Express", "Node.Js"],
    github: "https://github.com/dablusLyes/sat-track",
    demo: ""
  },
  {
    title: "Lyra torrent",
    description: "Lyra-Torrent is a lightweight BitTorrent client that runs directly on your browser.",
    technologies: ["Node.js"],
    github: "https://github.com",
    demo: ""
  },
  {
    title: "Moonchies",
    description: "Quickly find recipes using only the ingredients you have at home. Just input what’s in your kitchen, and the app suggests meals instantly—saving time and avoiding extra grocery trips!.",
    technologies: ["Javascript", "React", "Express", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export function Projects() {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Code className="w-6 h-6 text-blue-400" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
              <div className="flex gap-2 flex-wrap mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}