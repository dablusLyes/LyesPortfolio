import React from 'react';
import { User } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <User className="w-6 h-6 text-blue-400" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>
        <p className="text-gray-300 leading-relaxed">
          I'm a passionate software engineer with expertise in building scalable web applications
          and solving complex problems. With a strong foundation in both frontend and backend
          technologies, I create efficient and user-friendly solutions that drive business value.
        </p>
      </div>
    </section>
  );
}