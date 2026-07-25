import React from 'react';
import { ChevronRight } from 'lucide-react';
import nareshPhoto from '../assets/About/ChatGPT Image Jul 24, 2026, 06_29_24 PM.png';
import shubhamPhoto from '../assets/About/ChatGPT Image Jul 24, 2026, 06_32_34 PM.png';
import vipinPhoto from '../assets/About/ChatGPT Image Jul 24, 2026, 06_34_15 PM.png';
import ranjanPhoto from '../assets/About/image.png';

interface TeamMember {
  photo: string;
  name: string;
  title: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    photo: nareshPhoto,
    name: 'Naresh Kumar Kaushik',
    title: 'Founder & Managing Director',
    bio: 'Naresh Kumar Kaushik is an entrepreneur who has successfully launched multiple leading businesses in Australia and overseas.',
  },
  {
    photo: shubhamPhoto,
    name: 'Shubham Kaushik',
    title: 'Group CEO & Director',
    bio: 'With a focus on clear communication and strategic collaboration, Shubham actively engages with our clients to achieve shared objectives.',
  },
  {
    photo: ranjanPhoto,
    name: 'Ranjan Gupta',
    title: 'COO - Tanshu India',
    bio: 'With strong expertise in operations leadership, project execution, and strategic direction, he is known for building high-performing teams, and improving processes.',
  },
  {
    photo: vipinPhoto,
    name: 'Vipin Gupta',
    title: 'Chief Technical Officer',
    bio: 'Mr. Vipin Gupta is an experienced entrepreneur and industry leader with extensive expertise in industrial automation and engineering solutions.',
  },
];

export const AboutTeam: React.FC = () => {
  return (
    <>
      <section id="about-team" className="py-14 sm:py-16 bg-[#FAF8F5]">
        <div className="w-full px-[20px] flex flex-col gap-10">
          <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
            <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-[#8F533C] uppercase">
              LEADERSHIP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2623] font-medium tracking-tight uppercase">
              Meet The People Behind Tanshu Vaidik
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#615751] leading-relaxed">
              With decades of combined experience across manufacturing and global trade, our leadership
              is committed to delivering quality, innovation, and lasting customer partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl p-[2px] bg-gradient-to-br from-[#D8B88A] via-[#EBC98A] to-[#8F533C]"
              >
                <div className="rounded-2xl bg-white p-5 sm:p-6 flex gap-5 h-full">
                  <div className="shrink-0 w-2/5 rounded-xl bg-[#EBE4DC] overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2C2623] font-bold leading-tight">
                      {member.name}
                    </h3>
                    <span className="font-sans text-base sm:text-lg font-bold text-[#2C2623]">{member.title}</span>
                    <span className="w-10 h-[2px] bg-[#8F533C] mb-1" />
                    <p className="font-sans text-sm text-[#615751] leading-relaxed">{member.bio}</p>
                    <a
                      href="#contact"
                      className="mt-1 inline-flex items-center gap-1 font-sans text-sm font-bold text-[#8F533C] hover:text-[#723F2B] transition-colors w-fit"
                    >
                      Read More <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-[#EBE4DC]/40">
        <div className="w-full px-[20px] flex flex-col items-center text-center gap-5 max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-medium tracking-tight uppercase">
            Get In Touch With Us Now
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#615751] leading-relaxed">
            Our team is ready to help you design, source, and deliver handcrafted products tailored to
            your requirements. Let's start the conversation.
          </p>
          <a
            href="#contact"
            className="inline-block w-fit px-6 py-3 bg-[#8F533C] hover:bg-[#723F2B] text-white font-sans text-xs font-bold tracking-widest uppercase transition-colors"
          >
            Contact Us &rarr;
          </a>
        </div>
      </section>
    </>
  );
};
