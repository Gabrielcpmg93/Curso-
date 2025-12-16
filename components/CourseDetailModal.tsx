
import React, { useEffect, useRef } from 'react';
import type { Course } from '../types';

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, isOpen, onClose }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  
  if (!isOpen && !course) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        ref={modalContentRef}
        className={`bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col transform transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {course && (
          <>
            <div className="p-6 border-b border-gray-700 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-cyan-400">{course.title}</h2>
                <p className="text-gray-400 mt-1">{course.longDescription}</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-white transition-colors p-1 rounded-full"
                aria-label="Fechar modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-grow">
              <h3 className="text-lg font-semibold text-white mb-4">Tópicos abordados:</h3>
              <ul className="space-y-3 list-inside text-gray-300">
                {course.topics.map((topic, index) => (
                  <li key={index} className="leading-relaxed">{topic}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};