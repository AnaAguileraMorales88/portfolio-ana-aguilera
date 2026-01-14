import React from 'react';

const skills = [
  { name: 'Frontend', technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular'] },
  { name: 'Backend', technologies: ['Java (LTS)', 'Spring Boot', 'Node.js'] },
  { name: 'Bases de datos', technologies: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { name: 'Otras herramientas', technologies: ['Git', 'GitHub', 'GitFlow', 'Vitest', 'Scrum'] },
];

const Bootcamp = () => {
  return (
    <section id="bootcamp" className="py-20 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Bootcamp Fullstack (850h)</h2>
        <p className="text-slate-500 mb-12">Factoría 5 | Junio 2025 – Enero 2026</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-sky-600 mb-4">{skill.name}</h3>
              <ul className="text-slate-600 space-y-2">
                {skill.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bootcamp;
