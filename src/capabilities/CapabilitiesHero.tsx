import React from 'react';
import rugTextureImage from '../assets/images/Rug.jpeg';

export const CapabilitiesHero: React.FC = () => {
  return (
    <section className="bg-[#FAF8F5]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-[80px] py-12 lg:py-0">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#2C2623] font-medium leading-tight">
            Our Capabilities.
            <br />
            From Concept to
            <br />
            Global Delivery.
          </h1>
          <div className="h-[2px] w-12 bg-[#8F533C] my-5" />
          <p className="font-sans text-sm sm:text-base text-[#615751] leading-relaxed max-w-sm">
            Integrated craftsmanship. Scalable production. Ethical practices. Complete control from
            design to doorstep.
          </p>
        </div>

       <div className="relative flex items-center justify-center bg-[#FAF8F5] py-10 px-6">
  <img
    src={rugTextureImage}
    alt="Tanshu Vaidik manufacturing"
    className="w-full max-w-[500px] h-[320px] lg:h-[380px] object-cover rounded-none"
  />
</div>
      </div>
    </section>
  );
};
