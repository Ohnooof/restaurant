import React, { useRef } from 'react';

interface MagneticLinkProps {
  children: React.ReactNode;
  href: string;
}

const MagneticLink: React.FC<MagneticLinkProps> = ({ children, href }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      ref.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
        ref.current.style.transform = 'translate(0px, 0px)';
    }
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.2s ease-out',
      }}
      className="font-sans text-white hover:text-brand-accent transition-colors duration-200 inline-block"
    >
      {children}
    </a>
  );
};

export default MagneticLink;
