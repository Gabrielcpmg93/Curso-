
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-4 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} ReparoPro Cursos. Todos os direitos reservados.</p>
        <p className="text-sm mt-1">Transformando curiosos em profissionais.</p>
      </div>
    </footer>
  );
};
