import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl h-20 font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Lyes Ramdane
        </h1>
        <p className="text-2xl text-gray-300 mb-8">Full Stack Developer & Software Engineer</p>
        <div className="flex gap-4 justify-center mb-12">
          <a href="https://github.com/dablusLyes" className="hover:text-blue-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/lyesramdane/" className="hover:text-blue-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:ramdanelyes96@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      <ChevronDown className="w-6 h-6 absolute bottom-8 animate-bounce" />
    </header>
  );
}