import React, { useEffect, useRef, useState } from 'react';
import { HeroBanner } from './HeroBanner';
import { CollectionCardsSection } from './CollectionCardsSection';
import { TrustStrip } from './TrustStrip';
import { HomeCollectionDetailPage } from './homecollection1';
import { SeasonalCollectionDetailPage } from './SeasonalCollectionDetailPage';
import { getCollectionPathSegments, pushCollectionPath } from './collectionRouting';

export const HomeCollectionPage: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [categorySlug, setCategorySlug] = useState<string | null>(() => getCollectionPathSegments()[0] ?? null);

  useEffect(() => {
    const onPopState = () => setCategorySlug(getCollectionPathSegments()[0] ?? null);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const scrollToCards = () => {
    cardsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCategory = (slug: string) => {
    setCategorySlug(slug);
    pushCollectionPath([slug]);
  };

  const closeCategory = () => {
    setCategorySlug(null);
    pushCollectionPath([]);
  };

  if (categorySlug) {
    if (categorySlug.toLowerCase().includes('season')) {
      return <SeasonalCollectionDetailPage onBack={closeCategory} />;
    }
    return <HomeCollectionDetailPage categorySlug={categorySlug} onBack={closeCategory} />;
  }

  return (
    <div className="pt-16 sm:pt-[76px]">
      <HeroBanner onExploreCollections={scrollToCards} />
      <div ref={cardsRef}>
        <CollectionCardsSection
          onOpenHomeCollection={openCategory}
          onOpenSeasonalCollection={openCategory}
        />
      </div>
      <TrustStrip />
    </div>
  );
};
