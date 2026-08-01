import React from 'react';
import {
  Linkedin,
  Megaphone,
  Settings,
  Users,
  ShieldCheck,
  Truck,
  Calculator,
  HeartHandshake,
  Leaf,
  Globe,
} from 'lucide-react';
import nareshPhoto from '../assets/About/ChatGPT Image Jul 24, 2026, 06_29_24 PM.png';
import shubhamPhoto from '../assets/About/ChatGPT Image Jul 24, 2026, 06_32_34 PM.png';
import adityaPhoto from '../assets/About/ChatGPT Image Jul 24, 2026, 06_34_15 PM.png';

interface Founder {
  photo: string;
  name: string;
  title: string;
  bio: string;
}

const founders: Founder[] = [
  {
    photo: nareshPhoto,
    name: 'Naresh Kumar Kaushik',
    title: 'Co-Founder & Managing Director (Group CEO)',
    bio: 'Leads the overall vision, strategy and global business development initiatives. Passionate about driving innovation, building strong partnerships and creating sustainable growth for the company.',
  },
  {
    photo: adityaPhoto,
    name: 'Aditya Kush',
    title: 'Director',
    bio: 'Oversees operations, production and product development with a strong focus on quality, craftsmanship and continuous improvement. Also looks after the department of marketing.',
  },
];

interface Director {
  photo?: string;
  initials: string;
  name: string;
  title: string;
  bio: string;
}

const directors: Director[] = [
  {
    photo: shubhamPhoto,
    initials: 'SK',
    name: 'Shubham Kaushik',
    title: 'Director',
    bio: 'Oversees global marketing strategies, client relationships and brand positioning. With extensive experience in international markets, he ensures Tanshu Vaidik stays connected with evolving customer needs.',
  },
  {
    initials: 'SS',
    name: 'Sheela Sharma',
    title: 'Director',
    bio: 'Ensures seamless execution across the supply chain, production planning and quality assurance. Her operational expertise strengthens efficiency and delivery excellence.',
  },
];

const teamMembers = [
  { initials: 'MA', name: 'Mamta Arora', role: 'Marketing Merchandiser', icon: Megaphone },
  { initials: 'VC', name: 'Vijay Chug', role: 'Production Manager', icon: Settings },
  { initials: 'RS', name: 'Rajvir Sharma', role: 'HR & Legal Head', icon: Users },
  { initials: 'RV', name: 'Rahul Verma', role: 'Quality Head', icon: ShieldCheck },
  { initials: 'D', name: 'Deepak', role: 'Dispatch Head', icon: Truck },
  { initials: 'MS', name: 'Monu Sharma', role: 'Accounts', icon: Calculator },
];

const values = [
  {
    icon: Users,
    title: 'People First',
    desc: 'We value our people and foster a culture of respect, trust and growth.',
  },
  {
    icon: HeartHandshake,
    title: 'Empowered Artisans',
    desc: 'We work hand-in-hand with artisans, especially women, to preserve heritage and create sustainable livelihoods.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Future',
    desc: 'Every decision we make is guided by our commitment to the planet and future generations.',
  },
  {
    icon: Globe,
    title: 'Global Partnerships',
    desc: 'We build long-term relationships with global partners based on transparency, quality and reliability.',
  },
];

const InitialsAvatar: React.FC<{ initials: string; className?: string }> = ({ initials, className }) => (
  <div
    className={`bg-gradient-to-br from-[#D8B88A] to-[#8F533C] text-white font-serif font-bold flex items-center justify-center shrink-0 ${className ?? ''}`}
  >
    {initials}
  </div>
);

const SectionLabel: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-4 max-w-xs w-full mx-auto mb-4">
    <span className="h-px flex-1 bg-[#8F533C]/40" />
    <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-[#8F533C] uppercase whitespace-nowrap">
      {label}
    </span>
    <span className="h-px flex-1 bg-[#8F533C]/40" />
  </div>
);

export const AboutTeam: React.FC = () => {
  return (
    <>
      {/* Founders */}
      <section id="about-team" className="py-14 sm:py-16 bg-[#FAF8F5]">
        <div className="w-full px-6 sm:px-[80px] flex flex-col items-center text-center gap-3 mb-10">
          <SectionLabel label="Founders" />
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2623] font-medium tracking-tight">
            The Vision Behind Tanshu Vaidik
          </h2>
        </div>

        <div className="w-full px-6 sm:px-[80px] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_1fr] gap-8 lg:gap-10 items-center">
          <div className="order-2 lg:order-1 flex flex-col gap-4 font-sans text-sm text-[#615751] leading-relaxed">
            <p>
              Tanshu Vaidik was founded on the belief that traditional craftsmanship, when combined
              with contemporary design and ethical practices, can create products that enhance lives
              across the globe.
            </p>
            <p>
              Our founders bring together a shared vision of sustainability, quality and empowerment —
              building a brand that supports artisans and delivers excellence to our partners
              worldwide.
            </p>
          </div>

          <div className="order-1 lg:order-2 rounded-2xl overflow-hidden aspect-[4/3] flex shadow-sm">
            <img src={founders[0].photo} alt={founders[0].name} className="w-1/2 h-full object-cover" />
            <img src={founders[1].photo} alt={founders[1].name} className="w-1/2 h-full object-cover" />
          </div>

          <div className="order-3 flex flex-col gap-6">
            {founders.map((f) => (
              <div key={f.name}>
                <h3 className="font-sans text-sm font-bold tracking-wider text-[#8F533C] uppercase">
                  {f.name}
                </h3>
                <span className="font-sans text-sm text-[#2C2623] font-semibold">{f.title}</span>
                <span className="block w-8 h-px bg-[#8F533C]/40 my-2" />
                <p className="font-sans text-sm text-[#615751] leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-14 sm:py-16 bg-[#EBE4DC]/30">
        <div className="w-full px-6 sm:px-[80px]">
          <SectionLabel label="Directors" />
        </div>
        <div className="w-full px-6 sm:px-[80px] max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {directors.map((d) => (
            <div key={d.name} className="bg-white border border-[#EBE4DC] p-5 flex gap-4">
              {d.photo ? (
                <img src={d.photo} alt={d.name} className="w-20 h-20 rounded-lg object-cover shrink-0" />
              ) : (
                <InitialsAvatar initials={d.initials} className="w-20 h-20 rounded-lg text-xl" />
              )}
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-sans text-sm font-bold text-[#2C2623] uppercase tracking-wide">
                  {d.name}
                </h3>
                <span className="font-sans text-xs text-[#8F533C] font-semibold">{d.title}</span>
                <p className="font-sans text-xs text-[#615751] leading-relaxed mt-1">{d.bio}</p>
                <a
                  href="#"
                  className="mt-2 w-7 h-7 rounded bg-[#2C2623] hover:bg-[#8F533C] text-white flex items-center justify-center transition-colors"
                >
                  <Linkedin size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="py-14 sm:py-16 bg-[#FAF8F5]">
        <div className="w-full px-6 sm:px-[80px] flex flex-col items-center text-center gap-3 mb-10">
          <SectionLabel label="Our Team" />
          <p className="font-sans text-sm sm:text-base text-[#615751] leading-relaxed max-w-xl">
            A talented team of designers, merchandisers, quality experts and support professionals
            working together to bring craftsmanship to life.
          </p>
        </div>

        <div className="w-full px-6 sm:px-[80px] max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {teamMembers.map((m) => (
            <div
              key={m.name}
              className="bg-white border border-[#EBE4DC] p-4 flex flex-col items-center text-center gap-2"
            >
              <InitialsAvatar initials={m.initials} className="w-16 h-16 rounded-full text-base" />
              <h3 className="font-sans text-xs font-bold text-[#8F533C] uppercase tracking-wide">
                {m.name}
              </h3>
              <span className="font-sans text-[11px] text-[#615751]">{m.role}</span>
              <m.icon size={16} className="text-[#8F533C] mt-1" />
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-10 sm:py-12 bg-[#EBE4DC]/40 border-t border-[#E4DACB]">
        <div className="w-full px-6 sm:px-[80px] max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 sm:divide-x sm:divide-[#D8CFC4]">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col items-center text-center gap-2 sm:px-4">
              <v.icon size={22} className="text-[#8F533C]" />
              <h3 className="font-sans text-xs font-bold text-[#2C2623] uppercase tracking-wide">
                {v.title}
              </h3>
              <p className="font-sans text-[11px] text-[#615751] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Get In Touch CTA */}
      <section className="py-14 sm:py-16 bg-[#FAF8F5]">
        <div className="w-full px-6 sm:px-[80px] flex flex-col items-center text-center gap-5 max-w-2xl mx-auto">
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
