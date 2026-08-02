import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  FileText,
  Layers,
  Hammer,
  Ruler,
  Droplets,
  PackageCheck,
  ClipboardList,
  Printer,
  Paintbrush,
  Settings2,
  Check,
  ExternalLink,
} from 'lucide-react';
import storyImage from '../assets/images/Carpet.jpeg';

// Pulls the image up on desktop so its top lines up with the "Our Manufacturing" heading
// instead of the content box below it; height grows by the same amount to keep the bottom aligned.
const IMAGE_LIFT_PX = 80;

interface StorySection {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  highlights?: string[];
  pdfUrl?: string;
}

const sections: StorySection[] = [
  {
    id: 'story',
    icon: <FileText size={22} strokeWidth={1.5} />,
    label: 'Hand Woven',
    description:
      'Every Handwoven we manufacture begins with careful design thinking, blending traditional craftsmanship with modern functionality for global home and lifestyle markets.',
    highlights: [
      'Premium handwoven quality',
      'Soft texture for superior comfort',
      'Strong & durable for long-lasting use',
      'Neutral design fits every interior',
      'Sustainable & eco-friendly materials',
    ],
  },
  {
    id: 'Braided',
    icon: <Layers size={22} strokeWidth={1.5} />,
    label: 'Braided',
    description:
      'Crafted from natural, recycled & sustainable fibers including cotton, jute, wool and linen, chosen for durability, texture and a natural finish.',
  },
  {
    id: 'Hand tufted',
    icon: <Hammer size={22} strokeWidth={1.5} />,
    label: 'Hand tufted',
    description:
      'Hand-finished construction built for durability and consistent quality at scale, combining traditional technique with careful quality checks at every stage.',
  },
  {
    id: 'Hand Knotted',
    icon: <Ruler size={22} strokeWidth={1.5} />,
    label: 'Hand Knotted',
    description: 'Available in a wide range of standard and fully custom sizes to match buyer specifications.',
  },
  {
    id: 'Macrame',
    icon: <Droplets size={22} strokeWidth={1.5} />,
    label: 'Macrame',
    description:
      'Spot clean with a damp cloth. Avoid harsh chemicals and prolonged direct sunlight to preserve colour and texture. Professional cleaning recommended for deep stains.',
  },
  {
    id: 'Jute Weaving',
    icon: <PackageCheck size={22} strokeWidth={1.5} />,
    label: 'Jute Weaving',
    description:
      'Compression-packed in moisture-resistant wrapping with reinforced cartons, tested for safe, cost-efficient global shipping.',
    pdfUrl: '/documents/sample-spec-sheet.pdf',
  },
  {
    id: 'Stitched',
    icon: <ClipboardList size={22} strokeWidth={1.5} />,
    label: 'Stitched',
    description:
      'Minimum order quantities and lead times are tailored to each product category and order volume — get in touch for a tailored quote.',
  },
  {
    id: 'Printed',
    icon: <Printer size={22} strokeWidth={1.5} />,
    label: 'Printed',
    description: 'Manufactured in a facility that follows ISO 9001:2015 quality management practices.',
  },
   {
    id: 'Dyeing & Finishing',
    icon: <Paintbrush size={22} strokeWidth={1.5} />,
    label: 'Dyeing & Finishing',
    description: 'Manufactured in a facility that follows ISO 9001:2015 quality management practices.',
  },
   {
    id: 'Custom Construction',
    icon: <Settings2 size={22} strokeWidth={1.5} />,
    label: 'Custom Construction',
    description: 'Manufactured in a facility that follows ISO 9001:2015 quality management practices.',
  },
];

export const CapabilitiesProductStory: React.FC = () => {
  const [activeId, setActiveId] = useState(sections[0].id);
  const active = sections.find((section) => section.id === activeId) ?? sections[0];
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    const measure = () => {
      if (window.innerWidth >= 1024 && contentRef.current) {
        const measured = contentRef.current.getBoundingClientRect().height;
        setContentHeight((prev) => (prev ? Math.max(prev, measured) : measured));
      } else {
        setContentHeight(undefined);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [activeId]);

  return (
    <section className="bg-white pt-8 pb-6">
      <div className="w-full px-6 sm:px-[80px]">
        <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#2C2623] font-medium whitespace-nowrap mb-8">
          Our Manufacturing Styles &amp; Techniques
        </h2>
      </div>
      <div className="w-full px-5 sm:px-[80px] grid grid-cols-1 lg:grid-cols-[220px_1fr_1.1fr] gap-8 items-start">
        {/* Sidebar */}
        <div className="flex flex-col bg-[#FAF8F5] rounded-2xl shadow-lg p-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveId(section.id)}
              className={`flex items-center gap-3 px-3 py-2.5 text-left font-sans text-sm transition-colors cursor-pointer border-l-2 ${
                active.id === section.id
                  ? 'bg-[#F4EFEA] text-[#2C2623] font-bold border-[#8F533C]'
                  : 'text-[#615751] hover:bg-[#FAF8F5] border-transparent'
              }`}
            >
              <span className="text-[#8F533C] shrink-0">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div ref={contentRef} className="min-w-0 bg-[#FAF8F5] rounded-2xl shadow-lg p-15">
          <h3 className="font-sans text-sm font-bold tracking-widest uppercase text-[#2C2623] mb-4">
            {active.label}
          </h3>
          <p className="font-sans text-sm text-[#615751] leading-relaxed">{active.description}</p>

          {active.highlights && (
            <div className="bg-[#F4EFEA] border border-[#EBE4DC] p-5 mt-6">
              <span className="font-sans text-xs font-bold tracking-widest uppercase text-[#8F533C] block mb-3">
                Why Buyers Love It
              </span>
              <ul className="flex flex-col gap-2">
                {active.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2 font-sans text-sm text-[#615751]">
                    <Check size={18} className="text-[#8F533C] shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {active.pdfUrl && (
            <a
              href={active.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 border border-[#8F533C] text-[#8F533C] hover:bg-[#8F533C] hover:text-white font-button text-xs tracking-widest uppercase transition-colors cursor-pointer"
            >
              View More <ExternalLink size={16} />
            </a>
          )}
        </div>

        {/* Image */}
        <div
          className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#F4EFEA] lg:-mt-12"
          style={contentHeight ? { height: contentHeight + IMAGE_LIFT_PX } : undefined}
        >
          <img
            src={storyImage}
            alt="Tanshu Vaidik craftsmanship"
            className="w-full h-full object-cover scale-[1.8] object-center"
          />
        </div>
      </div>
    </section>
  );
};
