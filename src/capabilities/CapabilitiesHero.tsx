import React from 'react';
import heroImage from '../assets/Capablities/cpapiblitieshero.png';

export const CapabilitiesHero: React.FC = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
      <img
        src={heroImage}
        alt="Tanshu Vaidik manufacturing"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,38,35,0.85)_0%,rgba(44,38,35,0.75)_35%,rgba(44,38,35,0.2)_75%)]" />

      <div className="relative z-10 h-full w-full px-6 sm:px-12 lg:px-[80px] flex flex-col justify-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-white font-medium leading-tight">
          Our Capabilities.
          <br />
          From Concept to
          <br />
          Global Delivery.
        </h1>
        <div className="h-[2px] w-12 bg-[#8F533C] my-5" />
        <p className="font-sans text-base sm:text-lg text-[#F4EFEA] leading-relaxed max-w-sm">
          Integrated craftsmanship. Scalable production. Ethical practices. Complete control from
          design to doorstep.
        </p>
      </div>
    </section>
  );
};
