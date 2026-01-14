import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Sobre mí</h2>
      <div className="max-w-3xl mx-auto text-slate-600 space-y-4 text-lg font-light">
        <p>
          Disfruto creando proyectos que ayuden a las personas y promuevan la inclusión.
        </p>
        <p>
          Acabo de completar un bootcamp Fullstack donde descubrí mi pasión por programar y aprender cada día.
        </p>
        <p>
          Me motiva trabajar en equipo, aportar ideas y construir soluciones con impacto social, enfrentando retos con enfoques creativos.
        </p>
      </div>
    </section>
  );
};

export default About;
