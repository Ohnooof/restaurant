import React from 'react';
import type { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col group h-full">
      <div className="overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow relative overflow-hidden h-48">
        {/* Default view */}
        <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-full h-full">
            <div className="flex justify-between items-start mb-2">
                <h4 className="font-serif text-xl font-bold text-brand-primary">{item.name}</h4>
                <span className="font-sans font-bold text-lg text-brand-accent ml-4 whitespace-nowrap">{item.price}</span>
            </div>
            <p className="font-sans text-brand-text text-sm">{item.description}</p>
        </div>
        {/* Hover view */}
        <div className="absolute top-0 left-0 w-full h-full p-6 bg-white flex flex-col justify-center transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
            <h5 className="font-sans font-bold text-xs uppercase text-brand-secondary tracking-wider mb-2">Key Ingredients</h5>
            <p className="font-sans text-brand-text text-sm leading-relaxed">{item.ingredients}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;