import React from 'react';

interface StaggeredTextProps {
  text: string;
  className?: string;
}

const StaggeredText: React.FC<StaggeredTextProps> = ({ text, className }) => {
  return (
    <div aria-label={text} className={className}>
      {text.split('').map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="staggered-char"
          style={{ transitionDelay: `${50 * index}ms` }}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default StaggeredText;