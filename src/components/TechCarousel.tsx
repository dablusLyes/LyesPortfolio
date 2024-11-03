import React, { useState, useEffect } from 'react';
import {
    Github,
    Database,
    Globe2,
    Cpu,
    Monitor,
    Boxes,
    Code2,
    ServerCog,
    Shield,
    Rocket,
    TabletSmartphone,
} from 'lucide-react';

const technologies = [
    { icon: Github, name: 'Git' },
    { icon: Database, name: 'SQL' },
    { icon: Boxes, name: 'Docker' },
    { icon: Monitor, name: 'Frontend' },
    { icon: Globe2, name: 'Web' },
    { icon: Cpu, name: 'API' },
    { icon: Code2, name: 'Backend' },
    { icon: ServerCog, name: 'DevOps' },
    { icon: Shield, name: 'Security' },
    { icon: Rocket, name: 'Performance' },
    { icon: TabletSmartphone, name: 'Mobile' }
];

export default function TechCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === technologies.length - 5 ? 0 : prevIndex + 1
            );
        }, 2500);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full  py-8">
            <div className="max-w-6xl mx-auto px-4">


                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}
                    >
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="flex-none w-1/5 px-4"
                            >
                                <div className="flex flex-col items-center group">
                                    <div className="w-16 h-20 flex items-center justify-center rounded-xl bg-gray-800 text-white transition-all duration-300 transform ">
                                        <tech.icon className="w-8 h-8" />
                                    </div>
                                    <span className="mt-2 text-sm text-gray-300 group-hover:text-white">
                                        {tech.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}