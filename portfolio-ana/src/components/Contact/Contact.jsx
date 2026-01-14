import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Este es un formulario de demostración y tu mensaje no ha sido enviado.');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Contacto</h2>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="mailto:ana.aguilera.morales@example.com" className="text-slate-600 hover:text-sky-600">Email</a>
          <a href="#" className="text-slate-600 hover:text-sky-600">LinkedIn</a>
          <a href="#" className="text-slate-600 hover:text-sky-600">GitHub</a>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input type="text" placeholder="Nombre" className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" required />
          </div>
          <div>
            <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" required />
          </div>
          <div>
            <textarea placeholder="Mensaje" rows="4" className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" required></textarea>
          </div>
          <button type="submit" className="w-full bg-sky-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors shadow-lg">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
