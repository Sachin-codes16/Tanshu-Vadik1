import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { products } from '../data';
import { Product } from '../types';
import { ProductShowcaseModal } from '../components/ProductShowcaseModal';
import homeCollectionImage from '../assets/collection/HomeCollection.png';
import petUtilityImage from '../assets/collection/Petutility.png';
import seasonalCollectionImage from '../assets/collection/SesonalCollection.png';
import homeIcon from '../assets/Icons/HomeCollection.png';
import petIcon from '../assets/Icons/Petutility.png';
import seasonalIcon from '../assets/Icons/Sesonal.png';

interface CardConfig {
  key: Product['collection'];
  title: string;
  description: string;
  cta: string;
  image: string;
  icon: React.ReactNode;
}

const cards: CardConfig[] = [
  {
    key: 'home-decor',
    title: 'Home Collection',
    description: 'Beautiful handcrafted home décor designed for comfort, style, and everyday living.',
    cta: 'Explore Home Collection',
    image: homeCollectionImage,
    icon: <img src={homeIcon} alt="" className="w-7 h-7 object-contain" />,
  },
  {
    key: 'pet-living',
    title: 'Pet Utility',
    description: 'Premium handmade pet essentials combining comfort, durability and elegant design.',
    cta: 'Explore Pet Utility',
    image: petUtilityImage,
    icon: <img src={petIcon} alt="" className="w-7 h-7 object-contain" />,
  },
  {
    key: 'seasonal',
    title: 'Seasonal Collection',
    description: 'Fresh collections inspired by every season and celebration around the world.',
    cta: 'Explore Seasonal Collection',
    image: seasonalCollectionImage,
    icon: <img src={seasonalIcon} alt="" className="w-7 h-7 object-contain" />,
  },
];

interface CollectionCardsSectionProps {
  onOpenHomeCollection: () => void;
  onOpenSeasonalCollection: () => void;
}

export const CollectionCardsSection: React.FC<CollectionCardsSectionProps> = ({
  onOpenHomeCollection,
  onOpenSeasonalCollection,
}) => {
  const [activeCollection, setActiveCollection] = useState<CardConfig | null>(null);

  const activeProducts = useMemo(
    () => (activeCollection ? products.filter((p) => p.collection === activeCollection.key) : []),
    [activeCollection]
  );

  const handleCardClick = (card: CardConfig) => {
    if (card.key === 'home-decor') {
      onOpenHomeCollection();
    } else if (card.key === 'seasonal') {
      onOpenSeasonalCollection();
    } else {
      setActiveCollection(card);
    }
  };

  return (
    <section className="bg-[#FAF8F5] pb-2">
      <div className="w-full px-6 sm:px-10 lg:px-20 pt-8">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => handleCardClick(card)}
              className="group cursor-pointer flex flex-col bg-[#FAF8F5] border border-[#EBE4DC] shadow-xs hover:border-[#16294B]/30 hover:shadow-md rounded-xl overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/8] overflow-hidden bg-[#F4EFEA]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Icon badge straddling the image / body seam */}
              <div className="relative flex justify-center">
                <div className="absolute -top-6 w-12 h-12 rounded-full bg-white shadow-sm border border-[#EBE4DC] flex items-center justify-center text-[#16294B]">
                  {card.icon}
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col items-center text-center gap-2 px-6 pt-8 pb-6">
                <h3 className="font-serif text-lg text-black font-semibold">{card.title}</h3>
                <p className="font-sans text-xs text-black leading-relaxed font-normal">
                  {card.description}
                </p>
                <span className="mt-1 inline-flex items-center gap-1.5 font-sans text-xs font-bold tracking-widest uppercase text-[#A76043] group-hover:gap-2.5 transition-all">
                  {card.cta}
                  <ArrowRight size={13} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product listing modal for the selected collection */}
      <AnimatePresence>
        {activeCollection && (
          <ProductShowcaseModal
            heading={activeCollection.title}
            products={activeProducts}
            onClose={() => setActiveCollection(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
