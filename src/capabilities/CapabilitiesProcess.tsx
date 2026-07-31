import React from 'react';
import { PenTool, Sprout, FlaskConical, Factory, ShieldCheck, PackageCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <PenTool size={26} strokeWidth={1.5} />,
    title: 'Design & Concept',
    description: 'Trend research, sketches, CADs & mood boards as per buyer needs.',
  },
  {
    number: '02',
    icon: <Sprout size={26} strokeWidth={1.5} />,
    title: 'Material Sourcing',
    description: 'Carefully selected natural, recycled & sustainable yarns from trusted sources.',
  },
  {
    number: '03',
    icon: <FlaskConical size={26} strokeWidth={1.5} />,
    title: 'Sampling & Prototyping',
    description: 'Rapid sampling, custom sizes, colours construction for perfect evaluation.',
  },
  {
    number: '04',
    icon: <Factory size={26} strokeWidth={1.5} />,
    title: 'Production',
    description: 'Skilled artisans & advanced machines work together for consistent quality at scale.',
  },
  {
    number: '05',
    icon: <ShieldCheck size={26} strokeWidth={1.5} />,
    title: 'Quality Control',
    description: 'In-line & final inspection at multiple stages as per AQL & buyer standards.',
  },
  {
    number: '06',
    icon: <PackageCheck size={26} strokeWidth={1.5} />,
    title: 'Packing & Logistics',
    description: 'Careful packing, labelling & reliable shipping to global destinations.',
  },
];

export const CapabilitiesProcess: React.FC = () => {
  return (
    <section className="bg-[#F4EFEA] py-14">
      <div className="w-full px-6 sm:px-[80px] flex flex-col items-center text-center gap-1 mb-10">
        <span className="font-sans text-xs sm:text-sm font-bold tracking-widest uppercase text-[#2C2623]">
          Our End-to-End Process
        </span>
        <div className="h-[2px] w-10 bg-[#8F533C] mt-2" />
      </div>

      <div className="w-full px-6 sm:px-[80px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4">
        {steps.map((step, index) => (
          <div key={step.title} className="relative flex flex-col items-center text-center gap-3 px-2">
            <span className="text-[#8F533C]">{step.icon}</span>
            <span className="font-serif text-lg font-bold text-[#8F533C]">{step.number}</span>
            <h4 className="font-sans text-xs font-bold tracking-wide uppercase text-[#2C2623]">
              {step.title}
            </h4>
            <p className="font-sans text-xs text-[#615751] leading-relaxed">{step.description}</p>

            {index < steps.length - 1 && (
              <span className="hidden lg:block absolute top-3 -right-2 text-[#8F533C]/50">›</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
