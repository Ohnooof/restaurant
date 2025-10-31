import React, { useRef, useEffect, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  replay?: boolean;
  threshold?: number;
  onVisible?: () => void;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0, replay = false, threshold = 0.1, onVisible }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const wasVisible = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentlyVisible = entry.isIntersecting;
        
        if (replay) {
          setIsVisible(currentlyVisible);
          // Only trigger onVisible when transitioning from not visible to visible
          if (currentlyVisible && !wasVisible.current && onVisible) {
            onVisible();
          }
        } else {
           if (currentlyVisible) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }
        // Update wasVisible ref after the logic runs
        wasVisible.current = currentlyVisible;
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [replay, threshold, onVisible]);

  const sectionStyle: React.CSSProperties = {
    transitionDelay: `${delay}ms`
  };

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={sectionStyle}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
