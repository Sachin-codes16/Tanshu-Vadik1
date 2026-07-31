import React, { useMemo, useState } from 'react';
import { Leaf, Hand, Globe } from 'lucide-react';
import { RugsProductListing, getAllRugItems } from './RugsProductListing';
import { RugProductDetailPage } from './RugProductDetailPage';
import { getProductsForHomeCategory } from './HomeCollectionClick';
import { Product } from '../types';
import rugsHeroImage from '../assets/collection/ChatGPT Image Jul 23, 2026, 12_59_04 AM.png';

interface RugsDetailsPageProps {
  onBack: () => void;
}

const features = [
  { icon: <Leaf size={14} />, label: 'Natural Materials' },
  { icon: <Hand size={14} />, label: 'Handmade' },
  { icon: <Globe size={14} />, label: 'Export Quality' },
];

export const RugsDetailsPage: React.FC<RugsDetailsPageProps> = ({ onBack }) => {
  const rugsProducts = useMemo(() => getProductsForHomeCategory('Rugs'), []);
  const allRugItems = useMemo(() => getAllRugItems(rugsProducts), [rugsProducts]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0 });
  };

  if (selectedProduct) {
    return (
      <RugProductDetailPage
        product={selectedProduct}
        relatedProducts={allRugItems.filter((item) => item.id !== selectedProduct.id)}
        onBack={() => setSelectedProduct(null)}
        onSelectRelated={openProduct}
      />
    );
  }

  return (
    <div className="pt-16 sm:pt-[76px] bg-[#FAF8F5]">
      {/* Hero */}
      <section className="relative min-h-[280px] sm:min-h-[320px] flex items-end overflow-hidden bg-[#2C2623]">
        <img
          src={rugsHeroImage}
          alt="Handcrafted Rugs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_75%_at_0%_100%,_rgba(44,38,35,0.88)_0%,_rgba(44,38,35,0.5)_40%,_transparent_75%)]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 pb-14 w-full">
          {/* Breadcrumb */}
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-sm sm:text-base font-sans font-bold text-[#D99A78] hover:text-white transition-colors cursor-pointer mb-4"
          >
            <span className="hover:underline">Home</span>
            <span>&gt;</span>
            <span className="hover:underline">Home Collection</span>
            <span>&gt;</span>
            <span className="text-white">Rugs</span>
          </button>

          <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium">Handcrafted Rugs</h1>
          <div className="h-[2px] w-12 bg-[#8F533C] my-2.5" />
          <p className="font-sans text-sm text-white/80 max-w-md leading-relaxed">
            Premium quality rugs made with natural fibers and timeless designs.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-5">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-2 text-white/85">
                <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center">
                  {feature.icon}
                </span>
                <span className="font-sans text-xs font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rugs product listing */}
      <RugsProductListing products={rugsProducts} onSelectProduct={openProduct} />
    </div>
  );
};
