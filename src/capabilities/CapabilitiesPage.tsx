import React from 'react';
import { CapabilitiesHero } from './CapabilitiesHero';
import { CapabilitiesProcess } from './CapabilitiesProcess';
import { CapabilitiesTechniques } from './CapabilitiesTechniques';
import { CapabilitiesInfrastructure } from './CapabilitiesInfrastructure';
import { CapabilitiesWomen } from './CapabilitiesWomen';
import { CapabilitiesGroup } from './CapabilitiesGroup';

export const CapabilitiesPage: React.FC = () => {
  return (
    <div className="pt-16 sm:pt-[76px] bg-[#FAF8F5]">
      <CapabilitiesHero />
      <CapabilitiesProcess />
      <CapabilitiesTechniques />
      <CapabilitiesInfrastructure />
      <CapabilitiesWomen />
      <CapabilitiesGroup />
    </div>
  );
};
