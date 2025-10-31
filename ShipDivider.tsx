import React from 'react';

interface ShipDividerProps {
  direction: 'ltr' | 'rtl';
}

const ShipDivider: React.FC<ShipDividerProps> = ({ direction }) => {
  const isLtr = direction === 'ltr';

  // Define the SVG path for the wave based on direction
  const pathD = isLtr 
    ? "M0,50 Q250,0 500,50 T1000,50" 
    : "M1000,50 Q750,0 500,50 T0,50";
  
  // With the new centered SVG graphic, transform for RTL is just a horizontal flip.
  // No vertical or horizontal translation is needed anymore as the ship's origin (0,0) is its bottom-center.
  const shipTransform = isLtr ? "" : "scale(-1, 1)";

  return (
    <div className={`w-full h-32 flex items-center justify-center overflow-hidden my-4 direction-${direction}`}>
      <svg
        viewBox="0 -50 1000 150"
        preserveAspectRatio="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <path
          d={pathD}
          stroke="#a08a7b"
          strokeWidth="2"
          fill="none"
          className="ship-divider-path"
        />
        {/* Ship graphic re-centered at (0,0) for stable animation */}
        <g className="ship-icon" transform={shipTransform}>
          {/* Hull, centered around x=0, with base at y=0 */}
          <path
            d="M -18,-5 C -10,0 10,0 18,-5 L 12,-9 H -12 Z"
            fill="#4a3f35"
            stroke="#2a231f"
            strokeWidth="1"
          />
          {/* Mast, centered on x=0 */}
          <path
            d="M 0,-9 V -40"
            stroke="#2a231f"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Sail - An isosceles right triangle. The coordinates are adjusted
              to counteract the visual distortion from the non-uniform scaling 
              of the parent SVG, ensuring it appears visually correct. */}
          <path
            d="M 1,-40 L 16,-15 L 1,-15 Z"
            fill="#f5f0e6"
            stroke="#2a231f"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default ShipDivider;
