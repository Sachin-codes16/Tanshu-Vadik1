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
    <section className="bg-[#F4EFEA]">
      <div className="w-full px-6 sm:px-[80px]">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-1 items-stretch">

          {/* Left Content */}
          <div className="py-6 lg:py-8 flex flex-col justify-center items-start">
            <span className="font-sans text-xs font-bold tracking-[3px] uppercase text-[#8F533C]">
              The Tanshu Group
            </span>

            <h2 className="font-serif text-4xl text-[#2C2623] mt-1 mb-2">
              One Group.
              <br />
              Many Strengths.
            </h2>

            <p className="text-[#615751] leading-8 mb-4 max-w-lg">
              The Tanshu Group brings together design,
              <br />
              manufacturing, innovation and global expertise
              <br />
              through a family of companies.
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
          <div className="grid grid-cols-3 grid-rows-2 bg-white w-full h-full">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`flex items-center justify-center p-4 border-[#EBE4DC] ${
                  index % 3 !== 2 ? 'border-r' : ''
                } ${index < 3 ? 'border-b' : ''}`}
              >
                <img
                  src={logo}
                  alt=""
                  className={`w-auto object-contain ${
                    index === 3 || index === 4 ? 'h-40 max-w-full' : 'h-28 max-w-[90%]'
                  }`}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};