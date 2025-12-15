
import type React from 'react';

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  topics: string[];
}
