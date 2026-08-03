import React from 'react';
import heroImage from '../assets/images/Rug.jpeg';

export const CapabilitiesHero: React.FC = () => {
  return (
    <section className="bg-[#FAF8F5]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] items-stretch">
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-[80px] py-12 lg:py-0">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-[#2C2623] font-medium leading-tight">
            Our Capabilities.
            <br />
            From Concept to
            <br />
            Global Delivery.
          </h1>
          <div className="h-[2px] w-12 bg-[#8F533C] my-5" />
          <p className="font-sans text-base sm:text-lg text-[#615751] leading-relaxed max-w-sm">
            Integrated craftsmanship. Scalable production. Ethical practices. Complete control from
            design to doorstep.
          </p>
        </div>

        <div className="relative h-85 lg:h-auto overflow-hidden bg-[#FAF8F5]">
          <img
            src={heroImage}
            alt="Tanshu Vaidik manufacturing"
            className="w-full h-full object-cover rounded-none"
          />
        </div>
      </div>
    </section>
  );
};
