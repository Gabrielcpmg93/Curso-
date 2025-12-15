
import React, { useState, useEffect, useRef } from 'react';
import type { Course } from '../types';
import { askGemini } from '../services/geminiService';

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center space-x-2">
    <div className="animate-pulse rounded-full bg-cyan-400 h-3 w-3"></div>
    <div className="animate-pulse rounded-full bg-cyan-400 h-3 w-3 delay-150"></div>
    <div className="animate-pulse rounded-full bg-cyan-400 h-3 w-3 delay-300"></div>
  </div>
);

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, isOpen, onClose }) => {
  const [question, setQuestion] = useState('');
  const [geminiResponse, setGeminiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset Gemini state when modal opens with a new course
    if (isOpen && course) {
      setQuestion('');
      setGeminiResponse('');
      setIsLoading(false);
    }
  }, [isOpen, course]);

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

  const handleAskQuestion = async () => {
    if (!question.trim() || !course) return;
    setIsLoading(true);
    setGeminiResponse('');
    const response = await askGemini(course.title, question);
    setGeminiResponse(response);
    setIsLoading(false);
  };
  
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
              <h3 className="text-lg font-semibold text-white mb-3">Tópicos abordados:</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-300">
                {course.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Pergunte ao Instrutor IA
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Tem alguma dúvida sobre {course.title}? Escreva abaixo e nossa IA especialista irá responder.
                </p>
                <div className="space-y-4">
                  <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ex: Qual a melhor temperatura para remover um conector USB-C?"
                    className="w-full p-3 bg-gray-900 border border-gray-600 rounded-md text-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                    rows={3}
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleAskQuestion}
                    disabled={isLoading || !question.trim()}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center"
                  >
                    {isLoading ? <LoadingSpinner /> : 'Enviar Pergunta'}
                  </button>
                </div>

                {geminiResponse && (
                  <div className="mt-6 p-4 bg-gray-900/50 border border-gray-700 rounded-md">
                     <p className="text-white whitespace-pre-wrap font-mono text-sm leading-relaxed">{geminiResponse}</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
