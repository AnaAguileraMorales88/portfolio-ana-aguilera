import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-slate-50 p-4">
      <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-3">
        Ana Aguilera Morales
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 mb-6">
        Fullstack Developer
      </p>
      <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-10 font-light">
        “Desarrollo soluciones digitales accesibles con impacto social.”
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <a href="#projects" className="bg-sky-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-sky-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Ver proyectos
        </a>
        <a href="#contact" className="border border-sky-600 text-sky-600 font-medium px-8 py-3 rounded-lg hover:bg-sky-600 hover:text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Contacto
        </a>
      </div>
    </section>
  );
};

export default Hero;
