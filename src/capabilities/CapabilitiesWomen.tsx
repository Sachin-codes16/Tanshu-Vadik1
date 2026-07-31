import React from 'react';
import { Home, GraduationCap, Coins, Users, ArrowRight } from 'lucide-react';

const values = [
  { icon: <Home size={24} strokeWidth={1.5} />, title: 'Work From Home', description: 'Flexible & safe working environment' },
  { icon: <GraduationCap size={24} strokeWidth={1.5} />, title: 'Skill Development', description: 'Training, guidance & artisan practices' },
  { icon: <Coins size={24} strokeWidth={1.5} />, title: 'Fair Wages', description: 'Timely payments & ethical practices' },
  { icon: <Users size={24} strokeWidth={1.5} />, title: 'Women Empowerment', description: 'Building confidence & better livelihood' },
];

export const CapabilitiesWomen: React.FC = () => {
  return (
    <section className="bg-[#FAF8F5] py-14">
      <div className="w-full px-6 sm:px-[80px]">
        <span className="font-sans text-xs sm:text-sm font-bold tracking-widest uppercase text-[#8F533C] block mb-2">
          The Heart of Tanshu
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-medium mb-4">
          Empowering Women. Crafting Futures.
        </h2>
        <p className="font-sans text-sm text-[#615751] leading-relaxed max-w-2xl mb-8">
          A large part of our meaningful & handcrafted collections are made by skilled women artisans
          working from the comfort of their homes. We provide training, materials & fair wages, helping
          them achieve financial independence while keeping our traditional crafts alive.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-3 bg-white border border-[#EBE4DC] p-6"
            >
              <span className="text-[#8F533C]">{item.icon}</span>
              <h4 className="font-sans text-xs font-bold tracking-wide uppercase text-[#2C2623]">
                {item.title}
              </h4>
              <p className="font-sans text-xs text-[#615751] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 px-6 py-3 border border-[#8F533C] text-[#8F533C] hover:bg-[#8F533C] hover:text-white transition-all duration-300 font-sans text-xs font-bold tracking-widest uppercase w-fit"
        >
          Meet Our Artisans <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
};
