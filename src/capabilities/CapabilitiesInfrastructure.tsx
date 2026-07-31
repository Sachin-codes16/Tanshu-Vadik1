import React from 'react';
import { Ruler, Cog, Layers, Warehouse, ArrowRight } from 'lucide-react';
import warehouseImage from '../assets/collection/ChatGPT Image Jul 23, 2026, 12_59_04 AM.png';

const stats = [
  { icon: <Ruler size={22} strokeWidth={1.5} />, title: '50,000+ Sq.Ft.', description: 'Manufacturing Area' },
  { icon: <Cog size={22} strokeWidth={1.5} />, title: 'Advanced Machinery', description: 'For large-scale production & dyeing' },
  { icon: <Layers size={22} strokeWidth={1.5} />, title: 'In-house Yarn Processing', description: '& finishing' },
  { icon: <Warehouse size={22} strokeWidth={1.5} />, title: 'Large Warehouse', description: '& finished goods storage' },
];

export const CapabilitiesInfrastructure: React.FC = () => {
  return (
    <section className="bg-[#F4EFEA] py-14">
      <div className="w-full px-6 sm:px-[80px] grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-8 lg:gap-10 items-center">
        <div>
          <span className="font-sans text-xs sm:text-sm font-bold tracking-widest uppercase text-[#2C2623] block mb-6">
            Our Infrastructure
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
            {stats.map((stat) => (
              <div key={stat.title} className="flex items-start gap-3">
                <span className="text-[#8F533C] mt-0.5 shrink-0">{stat.icon}</span>
                <div>
                  <h4 className="font-sans text-sm font-bold text-[#2C2623] leading-tight">{stat.title}</h4>
                  <p className="font-sans text-xs text-[#615751] leading-tight">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p className="font-sans text-sm text-[#615751] leading-relaxed">
            Our state-of-the-art facility is equipped with advanced machinery and traditional skills
            working in harmony to deliver large volume with consistent quality.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-sans text-xs font-bold tracking-widest uppercase text-[#8F533C] hover:text-[#2C2623] transition-colors w-fit"
          >
            View Our Facility <ArrowRight size={14} />
          </a>
        </div>

        <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:h-72 overflow-hidden bg-[#FAF8F5]">
          <img src={warehouseImage} alt="Tanshu Vaidik facility" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};
