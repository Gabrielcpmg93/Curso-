
import React from 'react';

export const Header = () => {
  return (
    <header className="bg-gray-800/80 backdrop-blur-sm shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span className="text-xl font-bold text-white tracking-wider">
            ReparoPro
          </span>
        </div>
        <nav>
          <a
            href="#cursos"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
          >
            Cursos
          </a>
        </nav>
      </div>
    </header>
  );
};
