// @vsc repo:vsc-project-298-frontend file:src/components/ui/Card.tsx task:f6-src-components-ui-card-tsx module:frontend session:298
import React from 'react';

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className = '', children }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
}
