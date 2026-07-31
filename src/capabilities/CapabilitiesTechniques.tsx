import React from 'react';
import { Hand, Link2, Layers, Settings2, Sparkles, Leaf, Scissors, Printer, Droplets, Puzzle } from 'lucide-react';
import rugPatternImage from '../assets/images/Carpet.jpeg';
import loomImage from '../assets/images/Rug.jpeg';

const stylesList = [
  { icon: <Hand size={18} strokeWidth={1.5} />, title: 'Hand Woven', description: 'Timeless handloom techniques' },
  { icon: <Link2 size={18} strokeWidth={1.5} />, title: 'Braided', description: 'Durable & elegant braided construction' },
  { icon: <Layers size={18} strokeWidth={1.5} />, title: 'Hand Tufted', description: 'Yarn tufted with intricate detailing' },
  { icon: <Settings2 size={18} strokeWidth={1.5} />, title: 'Hand Knotted', description: 'Premium quality knotting craftsmanship' },
  { icon: <Sparkles size={18} strokeWidth={1.5} />, title: 'Macrame', description: 'Artisanal knotwork patterns & beauty' },
];

const techniquesList = [
  { icon: <Leaf size={18} strokeWidth={1.5} />, title: 'Jute Weaving', description: 'Natural strength & rustic appeal' },
  { icon: <Scissors size={18} strokeWidth={1.5} />, title: 'Stitched', description: 'Tailored pieces with refined finishing' },
  { icon: <Printer size={18} strokeWidth={1.5} />, title: 'Printed', description: 'High quality patterns & prints' },
  { icon: <Droplets size={18} strokeWidth={1.5} />, title: 'Dyeing & Finishing', description: 'Long-lasting colours with eco-friendly processes' },
  { icon: <Puzzle size={18} strokeWidth={1.5} />, title: 'Custom Constructions', description: 'Developed to match unique buyer requirements' },
];

const ListRow: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex items-start gap-3">
    <span className="text-[#8F533C] mt-0.5 shrink-0">{icon}</span>
    <div>
      <h4 className="font-sans text-xs font-bold tracking-wide uppercase text-[#2C2623]">{title}</h4>
      <p className="font-sans text-xs text-[#615751]">{description}</p>
    </div>
  </div>
);

export const CapabilitiesTechniques: React.FC = () => {
  return (
    <section className="bg-[#FAF8F5] py-14">
      <div className="w-full px-6 sm:px-[80px] grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-medium">
              Our Manufacturing Styles &amp; Techniques
            </h2>
            <p className="font-sans text-sm text-[#615751] leading-relaxed mt-2 mb-6 max-w-sm">
              Diverse techniques. Timeless craft. Made to match every design vision.
            </p>
            <div className="flex flex-col gap-4">
              {stylesList.map((item) => (
                <ListRow key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-[#F4EFEA]">
            <img src={rugPatternImage} alt="Hand-woven rug pattern" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-72 overflow-hidden bg-[#F4EFEA]">
            <img src={loomImage} alt="Loom weaving in progress" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col gap-4">
            {techniquesList.map((item) => (
              <ListRow key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
