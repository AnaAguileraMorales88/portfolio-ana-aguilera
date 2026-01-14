import React from 'react';

const Cv = () => {
  return (
    <section id="cv" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10">Resumen profesional</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-10">
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-sky-600 mb-3">Experiencia</h3>
            <ul className="list-disc list-inside text-slate-600">
              <li>Fundación Quiero Trabajo</li>
              <li>Acpacys</li>
              <li>Cáritas</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-sky-600 mb-3">Formación</h3>
            <ul className="list-disc list-inside text-slate-600">
              <li>Bootcamp Fullstack</li>
              <li>Grado en Educación Social</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-sky-600 mb-3">Idiomas</h3>
            <ul className="list-disc list-inside text-slate-600">
              <li>Castellano: Nativo</li>
              <li>Inglés: Intermedio</li>
              <li>Catalán: Intermedio</li>
            </ul>
          </div>
        </div>
        <button className="bg-sky-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors shadow-lg">
          Descargar CV (Placeholder)
        </button>
      </div>
    </section>
  );
};

export default Cv;
