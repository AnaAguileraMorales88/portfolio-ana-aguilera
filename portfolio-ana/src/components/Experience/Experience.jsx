import React from 'react';
import { experience } from '../../data/experience.js';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">Experiencia con enfoque social</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-700">{exp.organization}</h3>
              <p className="text-sky-600 font-semibold mb-2">{exp.role}</p>
              <p className="text-slate-600 font-light">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
