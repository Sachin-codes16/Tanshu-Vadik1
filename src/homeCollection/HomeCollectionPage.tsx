import React, { useRef, useState } from 'react';
import { HeroBanner } from './HeroBanner';
import { CollectionCardsSection } from './CollectionCardsSection';
import { TrustStrip } from './TrustStrip';
import { HomeCollectionDetailPage } from './homecollection1';
import { SeasonalCollectionDetailPage } from './SeasonalCollectionDetailPage';

export const HomeCollectionPage: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [homeDetailSlug, setHomeDetailSlug] = useState<string | null>(null);
  const [showSeasonalDetail, setShowSeasonalDetail] = useState(false);

  const scrollToCards = () => {
    cardsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (homeDetailSlug) {
    return <HomeCollectionDetailPage categorySlug={homeDetailSlug} onBack={() => setHomeDetailSlug(null)} />;
  }

  if (showSeasonalDetail) {
    return <SeasonalCollectionDetailPage onBack={() => setShowSeasonalDetail(false)} />;
  }

  return (
    <div className="pt-16 sm:pt-[76px]">
      <HeroBanner onExploreCollections={scrollToCards} />
      <div ref={cardsRef}>
        <CollectionCardsSection
          onOpenHomeCollection={(categorySlug) => setHomeDetailSlug(categorySlug)}
          onOpenSeasonalCollection={() => setShowSeasonalDetail(true)}
        />
      </div>
      <TrustStrip />
    </div>
  );
};
