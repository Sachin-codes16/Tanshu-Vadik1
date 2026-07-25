import React, { useState, useMemo } from 'react';
import { products } from '../data';
import { Product } from '../types';
import { useInquiry } from '../context/InquiryContext';
import { TrustStats } from './TrustStats';
import { Certifications } from './Certifications';
import { ProductShowcaseModal } from './ProductShowcaseModal';
import springCollection from "../assets/collection/Spring.png"
import fallCollection from "../assets/collection/Spring2.png"

const localImages = import.meta.glob('../assets/images/*', { eager: true, import: 'default' }) as Record<string, string>;
const img = (filename: string): string => {
  const match = Object.entries(localImages).find(([path]) => path.endsWith(`/${filename}`));
  return match ? match[1] : `/src/assets/images/${filename}`;
};
import { motion, AnimatePresence } from 'motion/react';

interface CategoryCard {
  name: string;
  image: string;
  itemCount: number;
  subtitle?: string;
}

export const Collections: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Custom Swatch Visualizer State
  const [weftColor, setWeftColor] = useState('#8F533C'); // Terracotta copper
  const [warpColor, setWarpColor] = useState('#2C2623'); // Earth charcoal
  const [patternType, setPatternType] = useState<'herringbone' | 'plaid' | 'waffle'>('herringbone');
  const [weaveDensity, setWeaveDensity] = useState<'standard' | 'double-tension'>('double-tension');
  const [customSize, setCustomSize] = useState('Medium Dining (160x230cm)');
  const [swatchInquired, setSwatchInquired] = useState(false);

  const { addToCart, setIsPortalOpen } = useInquiry();

  // Define Home Decor categories with counts and exact mockup images
  const homeDecorCategories: CategoryCard[] = useMemo(() => [
    {
      name: 'Rugs',
      image: img('WhatsApp Image 2026-07-20 at 11.45.28.jpeg'),
      itemCount: products.filter(p => p.subcategory === 'Rugs').length
    },
    {
      name: 'Carpets',
      image: img('WhatsApp Image 2026-07-18 at 11.12.09.jpeg'),
      itemCount: products.filter(p => p.subcategory === 'Carpets').length
    },
    {
      name: 'Cushions',
      image: img('cushion.jpeg'),
      itemCount: products.filter(p => p.subcategory === 'Cushions').length
    },
    {
      name: 'Throws',
      image: img('WhatsApp Image 2026-07-17 at 15.35.38.jpeg'),
      itemCount: products.filter(p => p.subcategory === 'Kitchen Towel').length
    },
    {
      name: 'Basket',
      image: img('WhatsApp Image 2026-07-17 at 18.18.39.jpeg'),
      itemCount: products.filter(p => p.subcategory === 'Basket').length
    },
    {
      name: 'Planters',
      image: img('WhatsApp Image 2026-07-17 at 15.35.57.jpeg'),
      itemCount: products.filter(p => p.subcategory === 'Planters').length
    },
    ,
    {
      name: 'Bath Mats',
      image: img('WhatsApp Image 2026-07-17 at 15.35.01.jpeg'),
      itemCount: products.filter(p => p.subcategory === 'Bath Mats').length
    },
    {
      name: 'Table Linen',
      image: img('WhatsApp Image 2026-07-17 at 15.40.03.jpeg'),
      itemCount: products.filter(p => p.subcategory === 'Table Linen').length
    },
    {
      name: 'Kitchen Linen',
      image: img('WhatsApp Image 2026-07-17 at 15.40.18.jpeg'),
      itemCount: products.filter(p => p.subcategory === 'Apron').length
    },
    {
      name: 'Tote Bags',
      image: img('WhatsApp Image 2026-07-17 at 15.38.11.jpeg'),
      itemCount: products.filter(p => p.subcategory === 'Tote Bags').length
    },
    {
      name: 'Wall Décor',
      image: img('WhatsApp Image 2026-07-17 at 15.37.21.jpeg'),
      itemCount: products.filter(p => p.subcategory === 'Wall Décor').length
    },
    {
      name: 'Home Accessories',
      image: img('ChatGPT Image Jul 21, 2026, 11_56_04 AM.png'),
      itemCount: products.filter(p => p.subcategory === 'Table Placemat').length
    }
  ], []);

  // Define Pet Living categories with counts and exact mockup images
  const petLivingCategories: CategoryCard[] = useMemo(() => [
    {
      name: 'Pet Beds',
      image: img('WhatsApp Image 2026-07-17 at 15.38.35.jpeg'),
      itemCount: products.filter(p => p.subcategory === 'Pet Beds').length
    },
      {
      name: 'Pet Mat',
      image: img('WhatsApp Image 2026-07-17 at 15.38.51.jpeg'),
      itemCount: products.filter(p => p.subcategory === 'Pet Mat').length
    },
   
    {
      name: 'Pet Toy Baskets',
      image: img('WhatsApp Image 2026-07-17 at 15.34.24.jpeg'),
      itemCount: products.filter(p => p.subcategory === 'Pet Toy Baskets').length
    },
   {
      name: 'Pet Accessories',
      image: img('WhatsApp Image 2026-07-17 at 15.36.54.jpeg'),
      itemCount: products.filter(p => p.subcategory === 'Pet Accessories').length
    },
  ], []);

  // Define Seasonal categories with counts and newly generated collection images
  const seasonalCategories: CategoryCard[] = useMemo(() => [
    {
      name: 'SPRING / SUMMER COLLECTION',
      image: springCollection,
      itemCount: products.filter(p => p.subcategory === 'Christmas Collection').length,
      subtitle: 'Bright, Breezy, Beautiful.'
    },
    {
      name: 'FALL / WINTER COLLECTION',
      image: fallCollection,
      itemCount: products.filter(p => p.subcategory === 'Fall Collection').length,
      subtitle: 'Warm, Cozy, Timeless.'
    }
  ], []);

  // Filter products by selected category
  const activeProducts = useMemo(() => {
    if (!selectedCategory) return [];
    const lowerSel = selectedCategory.toLowerCase();
    if (lowerSel.includes('spring') || lowerSel.includes('summer')) {
      return products.filter((p) => p.subcategory === 'Christmas Collection');
    }
    if (lowerSel.includes('fall') || lowerSel.includes('winter')) {
      return products.filter((p) => p.subcategory === 'Fall Collection');
    }
    if (lowerSel === 'kitchen linen') {
      return products.filter((p) => p.subcategory === 'Apron');
    }
    if (lowerSel === 'throws') {
      return products.filter((p) => p.subcategory === 'Kitchen Towel');
    }
    if (lowerSel === 'home accessories') {
      return products.filter((p) => p.subcategory === 'Table Placemat');
    }
    return products.filter((p) => p.subcategory.toLowerCase() === lowerSel);
  }, [selectedCategory]);

  const handleRequestCustomSwatch = (e: React.FormEvent) => {
    e.preventDefault();
    setSwatchInquired(true);

    const swatchProduct: Product = {
      id: `custom-swatch-${Date.now()}`,
      name: `Bespoke Swatch (${patternType.toUpperCase()} - ${weftColor === '#8F533C' ? 'Terracotta' : 'Deep Ink'} / ${warpColor === '#2C2623' ? 'Charcoal' : 'Sand'})`,
      collection: 'home-decor',
      subcategory: 'Custom Swatch Request',
      image: '/input_file_15.png',
      description: `Bespoke organic swatch sample. Pattern: ${patternType}. Density: ${weaveDensity}. Base warp color: ${warpColor}. Primary weft color: ${weftColor}. Intended showroom dimensions: ${customSize}`,
      material: '80% Recycled Cotton, 20% Jute & Botanical Dye',
      dimensions: '30x30 cm Sample Swatch',
      leadTime: '14 Days Express Looming',
      minOrderQuantity: '1 Unit (Sample)'
    };

    addToCart(swatchProduct);
    setTimeout(() => {
      setSwatchInquired(false);
      setIsPortalOpen(true);
    }, 1200);
  };

  return (
    <section id="collections" className="py-0 bg-[#FAF8F5]">
      <div className="w-full px-[80px]">
        
        {/* Editorial Heading Section exactly styled like the mockup */}
        <div className="flex flex-col items-center text-center gap-3 mb-3">

          <div className="flex items-center gap-3 sm:gap-6 w-full">
            <div className="h-px bg-[#8F533C]/20 flex-1" />
            <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl text-[#2C2623] tracking-tight font-medium leading-tight whitespace-nowrap shrink-0">
              OUR COLLECTIONS
            </h2>
            <div className="h-px bg-[#8F533C]/20 flex-1" />
          </div>


          {/* Mockup Ornament divider (brown line with diamond) */}
          <div className="flex items-center gap-4 w-full justify-center my-3">

            <div className="h-[1px] bg-[#8F533C]/30 w-24 sm:w-40" />
            <div className="w-2.5 h-2.5 rotate-45 bg-[#8F533C]" />
            <div className="h-[1px] bg-[#8F533C]/30 w-24 sm:w-40" />

          </div>
          
        </div>

        {/* 1. HOME DECOR SECTION */}
        <div className="mb-10 sm:mb-12">
          <div className="flex flex-col items-start mb-6 border-b border-[#EBE4DC] pb-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-medium tracking-wide">
              HOME DÉCOR COLLECTION
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#615751] italic mt-1">
              Timeless designs for every space.
            </p>
          </div>

          {/* 12 Grid Layout precisely matched */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {homeDecorCategories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedCategory(cat.name)}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Container with high contrast and hover zooms */}
                <div
                  className="relative overflow-hidden bg-[#F4EFEA] border border-[#EBE4DC] shadow-xs group-hover:border-[#8F533C]/40 group-hover:shadow-md transition-all duration-300"
                  style={{ aspectRatio: cat.name === 'Basket' ? '568 / 316' : '16 / 9' }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Subcategory Label below card */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-sans text-[13px] font-bold tracking-[0.12em] text-[#2C2623] uppercase group-hover:text-[#8F533C] transition-colors">
                    {cat.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. PET LIVING SECTION */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col items-start mb-6 border-b border-[#EBE4DC] pb-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-medium tracking-wide">
              PET LIVING COLLECTION
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#615751] italic mt-1">
              Comfort, care and style for pets.
            </p>
          </div>

          {/* 4 Grid Layout precisely matched */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 sm:gap-x-10 sm:gap-y-20">
            {petLivingCategories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedCategory(cat.name)}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Container with high contrast and hover zooms */}
                <div className="relative aspect-video overflow-hidden bg-[#F4EFEA] border border-[#EBE4DC] shadow-xs group-hover:border-[#8F533C]/40 group-hover:shadow-md transition-all duration-300">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Subcategory Label below card */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-sans text-[13px] font-bold tracking-[0.12em] text-[#2C2623] uppercase group-hover:text-[#8F533C] transition-colors">
                    {cat.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Seasonal & Holiday images, fixed directly below Pet Living (heading removed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {seasonalCategories.map((category) => (
            <div
              key={category.name}
              className="relative group overflow-hidden cursor-pointer w-full aspect-[2/1]"
              onClick={() => setSelectedCategory(category.name)}
            >
              {/* 1. Image Background */}
              <img
                src={category.image}
                alt={category.name}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  category.name.includes('FALL') ? 'brightness-125 contrast-105' : ''
                }`}
              />

              {/* 2. Dark Tint Overlay for Readable Text */}
              <div className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/15" />

              {/* 3. Content Box: Spring/Summer stays centered, Fall/Winter sits to the side */}
              <div
                className={`absolute inset-0 flex flex-col justify-center p-6 sm:p-10 text-white ${
                  category.name.includes('SPRING')
                    ? 'items-center text-center'
                    : 'items-start text-left'
                }`}
              >
                <h3
                  className={`font-serif text-lg sm:text-2xl md:text-3xl tracking-wide sm:tracking-widest uppercase mb-2 leading-snug ${
                    category.name.includes('SPRING') ? 'w-full' : 'max-w-[70%]'
                  }`}
                >
                  {category.name.replace(' COLLECTION', '')}
                  <br />
                  COLLECTION
                </h3>

                {category.subtitle && (
                  <p className="font-serif italic text-sm md:text-base opacity-90 mb-6 tracking-wide">
                    {category.subtitle}
                  </p>
                )}

                {/* Bordered Button Element */}
                <button className="px-6 py-2.5 border border-white text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black">
                  Explore Now &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Trust & Certification badges, fixed directly below Pet Living */}
      <TrustStats />
      <Certifications />

      {/* Product listing + detail modals for the selected category */}
      <AnimatePresence>
        {selectedCategory && (
          <ProductShowcaseModal
            heading={`${selectedCategory} Collection`}
            products={activeProducts}
            onClose={() => setSelectedCategory(null)}
          />
        )}
      </AnimatePresence>

    </section>
  );
};
