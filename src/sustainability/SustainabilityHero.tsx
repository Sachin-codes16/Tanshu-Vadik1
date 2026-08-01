import React from 'react';
import heroImage from '../assets/Capablities/ChatGPT Image Aug 1, 2026, 01_27_13 PM.png';

export const SustainabilityHero: React.FC = () => {
  return (
    <section className="bg-[#FAF8F5]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] items-stretch">
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-[80px] py-12 lg:py-0">
          <span className="font-sans text-xs font-bold tracking-[3px] uppercase text-[#8F533C] mb-3">
            Sustainability
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#2C2623] font-medium leading-tight">
            Sustainability
            <br />
            is Our Responsibility.
            <br />
            Craftsmanship is
            <br />
            Our Promise.
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#615751] leading-relaxed max-w-md mt-6">
            At Tanshu Vaidik, we believe true luxury lies in creating beautiful products
            without compromising the planet or the people who make them.
          </p>
          <p className="font-sans text-sm sm:text-base text-[#615751] leading-relaxed max-w-md mt-4">
            Our commitment to sustainability is woven into every fiber of our business.
          </p>
        </div>

        <div className="relative h-85 lg:h-auto overflow-hidden bg-[#FAF8F5]">
          <img
            src={heroImage}
            alt="Tanshu Vaidik sustainable craftsmanship"
            className="w-full h-full object-cover rounded-none"
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3"
            style={{ background: 'linear-gradient(to right, #FAF8F5, rgba(250,248,245,0))' }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-1/4 lg:hidden"
            style={{ background: 'linear-gradient(to bottom, #FAF8F5, rgba(250,248,245,0))' }}
          />
        </div>
      </div>
    </section>
  );
};
