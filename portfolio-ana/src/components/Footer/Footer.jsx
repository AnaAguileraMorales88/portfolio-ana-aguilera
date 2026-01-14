import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 px-4 text-center">
      <p className="text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Ana Aguilera Morales. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
