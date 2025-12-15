
import React from 'react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  const Icon = course.icon;

  return (
    <div
      onClick={onClick}
      className="bg-gray-800 rounded-xl shadow-lg hover:shadow-cyan-500/20 overflow-hidden cursor-pointer group transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 hover:border-cyan-500/50"
    >
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-900 p-3 rounded-lg">
             <Icon className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {course.title}
          </h3>
        </div>
        <p className="mt-4 text-gray-400 text-base leading-relaxed">
          {course.description}
        </p>
      </div>
      <div className="bg-gray-700/50 px-6 py-3">
        <span className="text-sm font-semibold text-cyan-400">
          Ver detalhes do módulo &rarr;
        </span>
      </div>
    </div>
  );
};
