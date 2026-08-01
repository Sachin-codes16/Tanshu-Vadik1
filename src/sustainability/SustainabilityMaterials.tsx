import React from 'react';
import juteImg from '../assets/images/basket_rope_twotone_1783702315626.jpeg';
import cottonImg from '../assets/images/Rug.jpeg';
import woolImg from '../assets/images/throws.jpeg';
import recycledCottonImg from '../assets/images/pot_holders_terracotta_1783704070207.jpg';
import seagrassImg from '../assets/images/Rugs.jpeg';
import waterHyacinthImg from '../assets/images/wall_decor_macrame_1783701205440.jpg';

const materials = [
  { label: 'Jute', image: juteImg },
  { label: 'Cotton', image: cottonImg },
  { label: 'Wool', image: woolImg },
  { label: 'Recycled Cotton', image: recycledCottonImg },
  { label: 'Seagrass', image: seagrassImg },
  { label: 'Water Hyacinth', image: waterHyacinthImg },
];

export const SustainabilityMaterials: React.FC = () => {
  return (
    <section className="bg-white border-t border-[#EBE4DC] py-10">
      <div className="w-full px-6 sm:px-[80px] grid grid-cols-1 lg:grid-cols-[0.7fr_2fr] gap-8 items-center">
        {/* Left Content */}
        <div>
          <span className="font-sans text-sm font-bold tracking-[3px] uppercase text-[#8F533C]">
            Materials We Love
          </span>
          <div className="h-[2px] w-10 bg-[#8F533C] my-4" />
          <p className="font-sans text-base text-[#615751] leading-relaxed max-w-xs">
            We use natural and sustainable materials that are durable, biodegradable and kind to
            the environment.
          </p>
        </div>

        {/* Right Circles */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 justify-items-center">
          {materials.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-3">
              <div
                style={{ backgroundImage: `url(${m.image})` }}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-cover bg-center shrink-0"
              />
              <span className="font-sans text-xs sm:text-sm font-bold tracking-wider uppercase text-[#2C2623] text-center">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
