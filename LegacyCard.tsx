import React, { useRef } from 'react';

interface LegacyCardProps {
  title: string;
  children: React.ReactNode;
}

const LegacyCard: React.FC<LegacyCardProps> = ({ title, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      
      const rotateX = -((y - height / 2) / (height / 2)) * 10;
      const rotateY = ((x - width / 2) / (width / 2)) * 10;
      
      ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
        ref.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transition: 'transform 0.2s ease-out'
      }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div style={{ transform: 'translateZ(20px)' }}>
          <h4 className="font-serif text-xl font-bold text-brand-primary mb-2">{title}</h4>
          <p className="font-sans text-brand-text">{children}</p>
      </div>
    </div>
  );
};

export default LegacyCard;