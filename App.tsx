
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CourseCard } from './components/CourseCard';
import { CourseDetailModal } from './components/CourseDetailModal';
import { courses } from './constants';
import type { Course } from './types';

function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing the course to allow for fade-out animation
    setTimeout(() => {
      setSelectedCourse(null);
    }, 300);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Torne-se um Mestre em Manutenção de Celulares
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Nossa plataforma oferece um caminho completo, do iniciante ao especialista,
            com cursos práticos e detalhados.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => handleCourseClick(course)}
            />
          ))}
        </div>
      </main>
      <Footer />
      <CourseDetailModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
