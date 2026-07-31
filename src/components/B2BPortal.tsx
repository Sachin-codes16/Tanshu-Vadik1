import React, { useState } from 'react';
import { useInquiry } from '../context/InquiryContext';
import { X, ChevronDown, Check, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COUNTRIES } from '../data/countries';

export const B2BPortal: React.FC = () => {
  const { cart, clearCart, isPortalOpen, setIsPortalOpen } = useInquiry();
  const [notRobotChecked, setNotRobotChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    () => COUNTRIES.find((c) => c.iso2 === 'IN') ?? COUNTRIES[0]
  );
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  const filteredCountries = COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const subtitle =
    cart.length === 0
      ? 'General Inquiry'
      : cart.length === 1
      ? cart[0].name
      : `${cart.length} products selected`;

  const handleClose = () => {
    setIsPortalOpen(false);
    setCountryDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setNotRobotChecked(false);
    setTermsChecked(false);
    setIsPortalOpen(false);
  };

  return (
    <AnimatePresence>
      {isPortalOpen && (
        <div className="fixed inset-y-0 right-0 z-[100] flex justify-end w-full max-w-full">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-xs cursor-pointer"
          />

          {/* Drawer Sheet */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="relative w-full max-w-md bg-[#FAF8F5] border-l border-[#EBE4DC] shadow-2xl flex flex-col h-full z-10 overflow-y-auto"
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-serif text-3xl font-bold text-[#2C2623]">Enquire Now</h3>
                <button
                  onClick={handleClose}
                  className="p-1.5 hover:bg-[#F4EFEA] text-[#615751] hover:text-[#2C2623] transition-colors rounded-none cursor-pointer shrink-0"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="font-sans text-sm text-[#615751] mb-8">{subtitle}</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-sm text-[#2C2623]">
                    Full Name <span className="text-[#C0392B]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-[#D8CFC4] bg-white px-4 py-3 font-sans text-sm text-[#2C2623] focus:outline-none focus:border-[#8F533C]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-sm text-[#2C2623]">
                    Email Address <span className="text-[#C0392B]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-[#D8CFC4] bg-white px-4 py-3 font-sans text-sm text-[#2C2623] focus:outline-none focus:border-[#8F533C]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-sm text-[#2C2623]">
                    Phone Number <span className="text-[#C0392B]">*</span>
                  </label>
                  <div className="relative flex border border-[#D8CFC4] bg-white focus-within:border-[#8F533C]">
                    <button
                      type="button"
                      onClick={() => setCountryDropdownOpen((v) => !v)}
                      className={`flex items-center gap-1.5 px-3 border-r border-[#D8CFC4] text-sm text-[#2C2623] shrink-0 cursor-pointer ${
                        countryDropdownOpen ? 'ring-1 ring-inset ring-[#8F533C]' : ''
                      }`}
                    >
                      <img src={selectedCountry.flagUrl} alt="" className="w-5 h-3.5 object-cover shrink-0" />
                      <span>+{selectedCountry.dialCode}</span>
                      <ChevronDown size={14} className="text-[#615751]" />
                    </button>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 font-sans text-sm text-[#2C2623] focus:outline-none"
                    />

                    {countryDropdownOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-20"
                          onClick={() => setCountryDropdownOpen(false)}
                        />
                        <div className="absolute top-full left-0 mt-1 w-72 max-w-[calc(100vw-3rem)] bg-white border border-[#D8CFC4] shadow-lg z-30">
                          <div className="flex items-center gap-2 px-3 py-2 border-b border-[#EBE4DC]">
                            <Search size={14} className="text-[#615751] shrink-0" />
                            <input
                              type="text"
                              autoFocus
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              placeholder="Search country"
                              className="w-full font-sans text-sm text-[#2C2623] focus:outline-none"
                            />
                          </div>
                          <ul className="max-h-56 overflow-y-auto">
                            {filteredCountries.length === 0 ? (
                              <li className="px-3 py-3 font-sans text-xs text-[#615751]">No matches</li>
                            ) : (
                              filteredCountries.map((c) => (
                                <li key={c.iso2}>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setSelectedCountry(c);
                                      setCountryDropdownOpen(false);
                                      setCountrySearch('');
                                    }}
                                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-left font-sans text-sm text-[#2C2623] hover:bg-[#F4EFEA] cursor-pointer ${
                                      c.iso2 === selectedCountry.iso2 ? 'bg-[#F4EFEA]' : ''
                                    }`}
                                  >
                                    <img src={c.flagUrl} alt="" className="w-5 h-3.5 object-cover shrink-0" />
                                    <span className="flex-1 truncate">{c.name}</span>
                                    <span className="text-[#615751] shrink-0">+{c.dialCode}</span>
                                  </button>
                                </li>
                              ))
                            )}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-sm text-[#2C2623]">
                    Service Inquiry <span className="text-[#C0392B]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={cart.length > 0 ? `Interested in: ${cart.map((item) => item.name).join(', ')}` : undefined}
                    className="w-full border border-[#D8CFC4] bg-white px-4 py-3 font-sans text-sm text-[#2C2623] placeholder:text-[#9C9188] resize-y focus:outline-none focus:border-[#8F533C]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-sm text-[#2C2623]">
                    Anti-bot validation <span className="text-[#C0392B]">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setNotRobotChecked((v) => !v)}
                    className="flex items-center gap-3 border border-[#D8CFC4] bg-white px-4 py-3 cursor-pointer"
                  >
                    <span
                      className={`w-5 h-5 shrink-0 border-2 flex items-center justify-center transition-colors ${
                        notRobotChecked ? 'bg-[#8F533C] border-[#8F533C]' : 'border-[#B8AC9E]'
                      }`}
                    >
                      {notRobotChecked && <Check size={13} className="text-white" />}
                    </span>
                    <span className="font-sans text-sm text-[#2C2623]">I'm not a robot</span>
                  </button>
                </div>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsChecked}
                    onChange={(e) => setTermsChecked(e.target.checked)}
                    className="mt-0.5 accent-[#8F533C] shrink-0"
                    required
                  />
                  <span className="font-sans text-xs text-[#615751] leading-relaxed">
                    By submitting this form, you accept and agree to our{' '}
                    <a href="#" className="text-[#8F533C] hover:underline">
                      Terms of Use
                    </a>
                    .
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#8F533C] hover:bg-[#2C2623] text-white font-button text-xs tracking-widest uppercase transition-colors rounded-none cursor-pointer border border-[#8F533C] hover:border-[#2C2623]"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
