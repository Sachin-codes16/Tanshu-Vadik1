import React from "react";
import { ArrowRight } from "lucide-react";

import academy from "./Academy.png";
import metal from "./Metal.png";
import robotics from "./Robotics.png";
import vaidik from "./Vaidik.png";
import green from "./Green.png";
import navi from "./Navi.png";

const logos = [metal, academy, robotics, vaidik, green, navi];

export const CapabilitiesGroup: React.FC = () => {
  return (
    <section className="bg-[#F4EFEA] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="font-sans text-xs font-bold tracking-[3px] uppercase text-[#8F533C]">
              The Tanshu Group
            </span>

            <h2 className="font-serif text-4xl text-[#2C2623] mt-3 mb-5">
              One Group. Many Strengths.
            </h2>

            <p className="text-[#615751] leading-8 mb-10 max-w-lg">
              The Tanshu Group brings together design, manufacturing,
              innovation and global expertise through a family of companies.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#8F533C] text-[#8F533C] hover:bg-[#8F533C] hover:text-white transition-all duration-300 uppercase tracking-[2px] font-semibold text-sm"
            >
              Explore The Group
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Logos */}
          <div className="grid grid-cols-3 gap-6">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="rounded-xl shadow-md h-40 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt=""
                  className="h-14 w-auto max-w-[90%] object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};