import React from 'react';
import { Building2, Globe, Palette, Truck, ArrowRight } from 'lucide-react';

const companies = [
  {
    icon: <Building2 size={22} strokeWidth={1.5} />,
    name: 'Tanshu Vaidik India Pvt. Ltd.',
    description: 'Manufacturing & Export of Home Décor Textiles & Pet Lifestyle Products',
    location: 'Punjab, India',
  },
  {
    icon: <Globe size={22} strokeWidth={1.5} />,
    name: 'Tanshu Australia Pty. Ltd.',
    description: 'Marketing, Sales & Business Development for Global Markets',
    location: 'Australia',
  },
  {
    icon: <Palette size={22} strokeWidth={1.5} />,
    name: '7T Designs Studio',
    description: 'Creative Design, Product Development & Trend Forecast',
    location: 'India',
  },
  {
    icon: <Truck size={22} strokeWidth={1.5} />,
    name: 'Tanshu Sourcing Solutions',
    description: 'Material Sourcing, Quality Control & Supply Chain Management',
    location: 'India',
  },
];

export const CapabilitiesGroup: React.FC = () => {
  return (
    <section className="bg-[#F4EFEA] py-14">
      <div className="w-full px-6 sm:px-[80px]">
        <span className="font-sans text-xs sm:text-sm font-bold tracking-widest uppercase text-[#8F533C] block mb-2">
          The Tanshu Group
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-medium mb-4">
          One Group. Many Strengths.
        </h2>
        <p className="font-sans text-sm text-[#615751] leading-relaxed max-w-2xl mb-8">
          The Tanshu Group brings together design, manufacturing, innovation and global expertise
          through a family of companies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {companies.map((company) => (
            <div key={company.name} className="bg-white border border-[#EBE4DC] p-6 flex flex-col gap-3">
              <span className="text-[#8F533C]">{company.icon}</span>
              <h4 className="font-serif text-sm font-bold text-[#2C2623] uppercase tracking-wide leading-tight">
                {company.name}
              </h4>
              <p className="font-sans text-xs text-[#615751] leading-relaxed flex-1">{company.description}</p>
              <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-[#8F533C]">
                {company.location}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 px-6 py-3 border border-[#8F533C] text-[#8F533C] hover:bg-[#8F533C] hover:text-white transition-all duration-300 font-sans text-xs font-bold tracking-widest uppercase w-fit"
        >
          Explore The Group <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
};
