import React, { useState } from 'react';
import { InquiryProvider } from './context/InquiryContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Collections } from './components/Collections';
import { VideoBanner } from './components/VideoBanner';
import { About } from './components/About';
import { GlobalPresence } from './components/GlobalPresence';
import { Footer } from './components/Footer';
import { motion } from 'motion/react';
import { HomeCollectionPage } from './homeCollection/HomeCollectionPage';
import { AboutPage } from './about/AboutPage';
import { B2BPortal } from './components/B2BPortal';
import { BlogsPage } from './blogs/BlogsPage';
import { CapabilitiesPage } from './capabilities/CapabilitiesPage';
import { ContactPage } from './contact/ContactPage';
import { SustainabilityPage } from './sustainability/SustainabilityPage';

export default function App() {
  const [showCollectionsPage, setShowCollectionsPage] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showBlogsPage, setShowBlogsPage] = useState(false);
  const [showCapabilitiesPage, setShowCapabilitiesPage] = useState(false);
  const [showSustainabilityPage, setShowSustainabilityPage] = useState(false);
  const [showContactPage] = useState(() => window.location.pathname === '/contact');

  const handleNavigateCollections = () => {
    setShowCollectionsPage(true);
    setShowAboutPage(false);
    setShowBlogsPage(false);
    setShowCapabilitiesPage(false);
    setShowSustainabilityPage(false);
    window.scrollTo({ top: 0 });
  };

  const handleNavigateAbout = () => {
    setShowAboutPage(true);
    setShowCollectionsPage(false);
    setShowBlogsPage(false);
    setShowCapabilitiesPage(false);
    setShowSustainabilityPage(false);
    window.scrollTo({ top: 0 });
  };

  const handleNavigateBlogs = () => {
    setShowBlogsPage(true);
    setShowAboutPage(false);
    setShowCollectionsPage(false);
    setShowCapabilitiesPage(false);
    setShowSustainabilityPage(false);
    window.scrollTo({ top: 0 });
  };

  const handleNavigateCapabilities = () => {
    setShowCapabilitiesPage(true);
    setShowAboutPage(false);
    setShowCollectionsPage(false);
    setShowBlogsPage(false);
    setShowSustainabilityPage(false);
    window.scrollTo({ top: 0 });
  };

  const handleNavigateSustainability = () => {
    setShowSustainabilityPage(true);
    setShowAboutPage(false);
    setShowCollectionsPage(false);
    setShowBlogsPage(false);
    setShowCapabilitiesPage(false);
    window.scrollTo({ top: 0 });
  };

  const handleBackToHome = () => {
    setShowCollectionsPage(false);
    setShowAboutPage(false);
    setShowBlogsPage(false);
    setShowCapabilitiesPage(false);
    setShowSustainabilityPage(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <InquiryProvider>
      <div id="app-root" className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C2623] font-sans overflow-x-hidden selection:bg-[#8F533C] selection:text-white">

        {/* Navigation bar with floating RFQ badge */}
        <Navbar
          onNavigateCollections={handleNavigateCollections}
          onNavigateAbout={handleNavigateAbout}
          onNavigateHome={handleBackToHome}
          onNavigateCapabilities={handleNavigateCapabilities}
          onNavigateSustainability={handleNavigateSustainability}
        />

        <div className="flex-1">
          {showContactPage ? (
            <ContactPage />
          ) : showAboutPage ? (
            <AboutPage />
          ) : showCollectionsPage ? (
            <HomeCollectionPage />
          ) : showBlogsPage ? (
            <BlogsPage />
          ) : showCapabilitiesPage ? (
            <CapabilitiesPage />
          ) : showSustainabilityPage ? (
            <SustainabilityPage />
          ) : (
            /* Master visual sections */
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Editorial Loom Banner Section */}
              <Hero />

              {/* Why Global Buyers Choose TanshU */}
              <WhyChooseUs />

              {/* Interactive Catalog and Bespoke Thread Visualizer */}
              <Collections />

              {/* High Fidelity Video / Story Banner */}
              <VideoBanner />

              {/* Core Handloom & Weaver Narrative (The Heart Behind Every Piece) */}
              <About />

              {/* Interactive World Map Trade Logistics Pins */}
              <GlobalPresence />
            </motion.main>
          )}
        </div>

        {/* Editorial Footnotes and Contacts */}
        <Footer
          onNavigateBlogs={handleNavigateBlogs}
          onNavigateCapabilities={handleNavigateCapabilities}
          onNavigateSustainability={handleNavigateSustainability}
        />

        {/* Selected-products drawer, opened from the navbar's Request Catalogue button */}
        <B2BPortal />

      </div>
    </InquiryProvider>
  );
}
