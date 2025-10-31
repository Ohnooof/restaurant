import React, { useRef, useEffect, useState } from 'react';
import { MENU_DATA } from './constants';
import MenuItemCard from './components/MenuItemCard';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';
import StaggeredText from './components/StaggeredText';
import LegacyCard from './components/LegacyCard';
import ShipDivider from './components/ShipDivider';

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (bgRef.current) {
            bgRef.current.style.transform = `translateY(${window.pageYOffset * 0.5}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center parallax-bg" 
        style={{ 
          backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')",
        }} 
      />
      <div className="absolute inset-0 bg-brand-primary bg-opacity-70"></div>
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <AnimatedSection replay={true} threshold={0.5}>
          <StaggeredText text="Confluence" className="font-serif text-6xl md:text-8xl font-bold tracking-tighter leading-tight" />
          <p className="font-sans text-lg md:text-2xl mt-4 max-w-2xl animate-fade-in-up" style={{ transitionDelay: '800ms' }}>Where Worlds Collide on a Plate.</p>
        </AnimatedSection>
      </div>
    </div>
  );
};

const About = () => (
  <section id="about" className="py-20 px-6 md:px-12 bg-brand-bg">
    <AnimatedSection>
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-reveal-container">
            <h2 className="font-serif text-4xl font-bold text-brand-primary mb-6 text-reveal-content">A Culinary Voyage</h2>
        </div>
        <p className="font-sans text-lg text-brand-text leading-relaxed">
          At Confluence, we celebrate the most significant moment in culinary history: the Columbian Exchange. Our menu is a curated journey through the transformative exchange of foods, cultures, and ideas between the Eastern and Western Hemispheres. Each dish tells a story of connection, a delicious fusion of ingredients that were once worlds apart.
        </p>
      </div>
    </AnimatedSection>
  </section>
);

const Menu = () => (
  <section id="menu" className="py-20 px-6 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
         <div className="text-reveal-container text-center mb-12">
            <h2 className="font-serif text-5xl font-bold text-brand-primary text-reveal-content">Our Menu</h2>
        </div>
      </AnimatedSection>
      {MENU_DATA.map((category) => (
        <div key={category.title} className="mb-16">
          <AnimatedSection>
             <div className="text-reveal-container text-center mb-8">
                <h3 className="font-serif text-3xl font-bold text-brand-secondary border-b-2 border-brand-accent pb-2 inline-block text-reveal-content">{category.title}</h3>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.items.map((item, index) => (
               <AnimatedSection key={item.name} delay={index * 150}>
                <MenuItemCard item={item} />
               </AnimatedSection>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Legacy = () => (
    <section id="legacy" className="py-20 px-6 md:px-12 bg-brand-bg">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto text-center">
            <div className="text-reveal-container mb-6">
                <h2 className="font-serif text-4xl font-bold text-brand-primary text-reveal-content">More Than a Meal</h2>
            </div>
            <p className="font-sans text-lg text-brand-text leading-relaxed mb-10">
                The Columbian Exchange was more than just an exchange of foods. It irrevocably connected the world, bringing new technologies, animals, and knowledge, which we honor in our philosophy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left perspective-container">
                <LegacyCard title="The Equine Advantage">
                  The introduction of the horse to the Americas revolutionized transportation, labor, and culture. This powerful symbol of connection and strength inspires our commitment to robust flavors and hearty, nourishing meals.
                </LegacyCard>
                 <LegacyCard title="The Navigator's Knowledge">
                  Maritime innovations like the caravel and the astrolabe made the exchange possible. We are inspired by this spirit of discovery, constantly exploring new culinary combinations and techniques to bring the best of both worlds to your table.
                </LegacyCard>
            </div>
        </div>
      </AnimatedSection>
    </section>
);

const Footer = () => (
  <footer className="py-8 px-6 bg-brand-primary text-brand-bg">
    <div className="max-w-7xl mx-auto text-center font-sans">
      <p>&copy; {new Date().getFullYear()} Confluence Restaurant. All Rights Reserved.</p>
      <p className="text-sm text-brand-secondary mt-2">A project for AP World History, designed to showcase the profound legacies of the Columbian Exchange.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [shipAnimationCount, setShipAnimationCount] = useState(0);

  const handleShipVisible = () => {
    // We use the functional form of setState to ensure we get the latest state
    // and avoid any potential race conditions.
    setShipAnimationCount(prevCount => prevCount + 1);
  };

  // Determine direction based on whether the count is even or odd.
  // 0, 2, 4... -> ltr
  // 1, 3, 5... -> rtl
  const shipDirection = shipAnimationCount % 2 === 0 ? 'ltr' : 'rtl';

  return (
    <div className="font-sans bg-brand-bg">
      <Header />
      <main>
        <Hero />
        <About />
        <AnimatedSection threshold={0.5} replay onVisible={handleShipVisible}>
          <ShipDivider direction={shipDirection} key={shipAnimationCount} />
        </AnimatedSection>
        <Menu />
        <Legacy />
      </main>
      <Footer />
    </div>
  );
};

export default App;
