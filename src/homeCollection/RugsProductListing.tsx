import React, { useState } from 'react';
import {
  SlidersHorizontal,
  Minus,
  Plus,
  Heart,
  ArrowRight,
  Hand,
  Leaf,
  ShieldCheck,
  Globe,
} from 'lucide-react';
import { Product } from '../types';
import stripedRugImage from '../assets/images/WhatsApp Image 2026-07-20 at 11.45.28.jpeg';
import trellisRugImage from '../assets/images/WhatsApp Image 2026-07-18 at 11.12.09.jpeg';
import woolRugImage from '../assets/images/Rug.jpeg';

interface RugsProductListingProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

const swatchTones = ['#D9C7AC', '#A9744F', '#8C8378', '#5C4A3A'];

// Groups with no backing data field on the product model yet (no color/collection/
// shape/weave attributes exist), left as visual expand/collapse until that data exists.
const collapsedFilterGroups = ['Color', 'Collection', 'Shape', 'Weave'];

// Fiber vocabulary used to pull real material tags out of each product's free-text
// `material` string (e.g. "70% Sustainable Jute, 30% Unbleached Cotton" -> Jute, Cotton).
const KNOWN_MATERIAL_KEYWORDS = ['Jute', 'Cotton', 'Wool', 'Recycled Cotton', 'Linen', 'Silk', 'Bamboo'];

// Display-only fillers so the grid shows a fuller catalog feel; each is a full Product
// so it can open the same detail page and "Add to RFQ" flow as real catalog items.
const displayFillers: Product[] = [
  {
    id: 'rug-filler-jute-braided',
    name: 'Jute Braided Rug',
    collection: 'home-decor',
    subcategory: 'Rugs',
    image: stripedRugImage,
    description:
      'Densely braided jute rug finished with a hand-knotted fringe, bringing warm natural texture to entryways and living spaces.',
    material: '100% Jute',
    dimensions: '150 x 150 cm, Custom sizes',
    leadTime: '6-8 weeks',
    minOrderQuantity: '100 pcs',
  },
  {
    id: 'rug-filler-trellis-woven',
    name: 'Trellis Woven Rug',
    collection: 'home-decor',
    subcategory: 'Rugs',
    image: trellisRugImage,
    description:
      'Quatrefoil trellis pattern woven from recycled cotton yarns for a soft, durable rug with a refined geometric look.',
    material: 'Recycled Cotton',
    dimensions: '160 x 230 cm, Custom sizes',
    leadTime: '6-8 weeks',
    minOrderQuantity: '100 pcs',
  },
  {
    id: 'rug-filler-wool-tufted',
    name: 'Wool Hand Tufted Rug',
    collection: 'home-decor',
    subcategory: 'Rugs',
    image: woolRugImage,
    description:
      'Hand-tufted 100% wool rug with a plush pile and a classic bordered motif, built for long-lasting everyday comfort.',
    material: '100% Wool',
    dimensions: '170 x 240 cm, Custom sizes',
    leadTime: '7-9 weeks',
    minOrderQuantity: '100 pcs',
  },
];

// Combines real catalog rugs with the display fillers into one ordered list, used
// both for the product grid here and for computing "related products" elsewhere.
export const getAllRugItems = (products: Product[]): Product[] => [...products, ...displayFillers];

const trustItems = [
  {
    icon: <Hand size={22} />,
    title: 'Crafted with Care',
    description: 'Skilled artisans create each rug with precision and passion.',
  },
  {
    icon: <Leaf size={22} />,
    title: 'Sustainable Choice',
    description: 'Eco-friendly materials for a better tomorrow.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Built to Last',
    description: 'Durable, high-quality rugs made for everyday living.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Global Standards',
    description: 'Manufactured to meet international quality standards.',
  },
];

export const RugsProductListing: React.FC<RugsProductListingProps> = ({ products, onSelectProduct }) => {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  const allItems = getAllRugItems(products);

  // Only show a material checkbox if it's actually present in a listed product's
  // material string, so the filter always reflects what's really in the catalog.
  const materialFilters = KNOWN_MATERIAL_KEYWORDS.filter((keyword) =>
    allItems.some((item) => item.material.toLowerCase().includes(keyword.toLowerCase()))
  );

  // Sizes come straight from each product's dimensions field, split on commas and
  // de-duplicated, so new sizes show up automatically as the catalog grows.
  const sizeFilters = Array.from(
    new Set(
      allItems
        .flatMap((item) => item.dimensions.split(','))
        .map((size) => size.trim())
        .filter((size) => size && !/custom/i.test(size))
    )
  );

  return (
    <section className="pt-6 pb-0">
      <div className="w-full px-6 sm:px-10 lg:px-20 relative flex flex-col lg:flex-row lg:items-start gap-10 lg:pb-4">
        {/* Filter sidebar (visual only) */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="flex items-center justify-between pb-4 border-b border-[#EBE4DC]">
            <h3 className="font-sans text-sm font-bold text-[#2C2623] uppercase tracking-wide">Filter By</h3>
            <SlidersHorizontal size={16} className="text-[#615751]" />
          </div>

          <div className="py-3 border-b border-[#EBE4DC]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-sm font-bold text-[#2C2623]">Material</span>
              <Minus size={14} className="text-[#615751]" />
            </div>
            <div className="flex flex-col gap-1.5">
              {materialFilters.map((material) => (
                <label
                  key={material}
                  className="flex items-center gap-2 font-sans text-xs text-[#615751] cursor-pointer"
                >
                  <input type="checkbox" className="accent-[#8F533C]" />
                  {material}
                </label>
              ))}
            </div>
          </div>

          <div className="py-3 border-b border-[#EBE4DC]">
            <button
              onClick={() => setExpandedGroup(expandedGroup === 'Size' ? null : 'Size')}
              className="w-full flex items-center justify-between mb-2 cursor-pointer"
            >
              <span className="font-sans text-sm font-bold text-[#2C2623]">Size</span>
              {expandedGroup === 'Size' ? (
                <Minus size={14} className="text-[#615751]" />
              ) : (
                <Plus size={14} className="text-[#615751]" />
              )}
            </button>
            {expandedGroup === 'Size' && (
              <div className="flex flex-col gap-1.5">
                {sizeFilters.map((size) => (
                  <label
                    key={size}
                    className="flex items-center gap-2 font-sans text-xs text-[#615751] cursor-pointer"
                  >
                    <input type="checkbox" className="accent-[#8F533C]" />
                    {size}
                  </label>
                ))}
              </div>
            )}
          </div>

          {collapsedFilterGroups.map((group) => (
            <button
              key={group}
              onClick={() => setExpandedGroup(expandedGroup === group ? null : group)}
              className="w-full flex items-center justify-between py-1.5 border-b border-[#EBE4DC] cursor-pointer"
            >
              <span className="font-sans text-sm font-bold text-[#2C2623]">{group}</span>
              {expandedGroup === group ? (
                <Minus size={14} className="text-[#615751]" />
              ) : (
                <Plus size={14} className="text-[#615751]" />
              )}
            </button>
          ))}

          <button className="w-full mt-4 py-2 border border-[#8F533C] text-[#8F533C] font-button text-xs tracking-widest uppercase hover:bg-[#8F533C] hover:text-white transition-colors cursor-pointer">
            Clear All Filters
          </button>
        </aside>

        {/* Product grid */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-6">
            <span className="font-sans text-xs text-[#615751]">
              Showing {allItems.length} of {allItems.length} results
            </span>
            <div className="flex items-center gap-2 font-sans text-xs text-[#615751]">
              Sort by:
              <span className="font-bold text-[#2C2623]">Newest</span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {allItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer bg-[#FAF8F5] border border-[#EBE4DC] hover:border-[#8F533C]/40 hover:shadow-md transition-all duration-300"
                onClick={() => onSelectProduct(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F4EFEA]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#2C2623]">
                    <Heart size={14} />
                  </span>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2.5">
                    {swatchTones.map((tone) => (
                      <span
                        key={tone}
                        className="w-3.5 h-3.5 rounded-full border border-[#EBE4DC]"
                        style={{ backgroundColor: tone }}
                      />
                    ))}
                  </div>
                  <h4 className="font-serif text-base text-[#2C2623] font-medium line-clamp-1">{item.name}</h4>
                  <p className="font-sans text-xs text-[#615751] mt-1.5 line-clamp-1">{item.material}</p>
                  <p className="font-sans text-xs text-[#615751] mt-0.5 line-clamp-1">{item.dimensions}</p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-[#8F533C]">
                      Quick View&nbsp;&nbsp;|&nbsp;&nbsp;Spec Sheet
                    </span>
                    <span className="w-7 h-7 shrink-0 flex items-center justify-center bg-[#8F533C] text-white group-hover:bg-[#2C2623] transition-colors">
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="w-full mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 bg-[#F4EFEA] border border-[#EBE4DC] px-8 py-6">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="text-[#8F533C] shrink-0 mt-0.5">{item.icon}</span>
              <div className="flex flex-col gap-0.5">
                <h5 className="font-serif text-sm text-[#2C2623] font-medium">{item.title}</h5>
                <p className="font-sans text-[11px] text-[#615751] leading-snug">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
