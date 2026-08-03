import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import heroImage from '../assets/images/heartbehind.png';

interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    category: 'Sourcing',
    title: 'How We Source Sustainable Materials from Panipat',
    excerpt:
      'A look at how we work with local artisans and mills to source recycled cotton, jute, and other natural fibers for our home décor lines.',
    date: 'June 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Trends',
    title: '5 Home Décor Trends Shaping Wholesale Buying in 2026',
    excerpt:
      'From earthy neutrals to hand-loomed textures, here are the trends we are seeing buyers request most this year.',
    date: 'May 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Behind the Scenes',
    title: 'Inside Our Panipat Manufacturing Facility',
    excerpt:
      'From raw material inspection to final packaging, a walkthrough of how every order comes together at our factory.',
    date: 'April 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Craftsmanship',
    title: 'The Artisans Behind Our Hand-Braided Rugs',
    excerpt:
      'Meet the skilled weavers whose techniques, passed down through generations, shape every rug we ship worldwide.',
    date: 'March 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Private Label',
    title: 'A Buyer’s Guide to Private Label Home Décor',
    excerpt:
      'What to consider when launching your own branded home décor line, from minimum order quantities to packaging.',
    date: 'February 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Sustainability',
    title: 'Why We Chose Recycled Cotton for Our Pet Living Range',
    excerpt:
      'Our reasoning behind building the pet living collection around recycled and low-impact materials.',
    date: 'January 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
  },
];

export const BlogsPage: React.FC = () => {
  return (
    <div className="pt-16 sm:pt-[76px] bg-[#FAF8F5]">
      {/* Hero */}
      <section className="relative min-h-[320px] sm:min-h-[380px] flex items-end overflow-hidden bg-[#2C2623]">
        <img
          src={heroImage}
          alt="Tanshu Vaidik journal"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2623]/90 via-[#2C2623]/60 to-[#2C2623]/20" />

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 pb-10 sm:pb-14">
          <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-[#D8B88A] uppercase">
            Tanshu Vaidik India Pvt. Ltd.
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-medium mt-2">Journal</h1>
          <p className="font-sans text-sm sm:text-base text-white/80 max-w-lg leading-relaxed mt-3">
            Stories from our workshop, sourcing notes, and ideas for buyers building their next
            home décor collection.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-14 sm:py-16">
        <div className="w-full px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col bg-white border border-[#EBE4DC] hover:border-[#8F533C]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F4EFEA]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-[#FAF8F5] text-[#8F533C] font-sans text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-col gap-3 p-5">
                  <div className="flex items-center gap-4 font-sans text-[11px] text-[#615751]">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-[#2C2623] font-bold leading-snug">{post.title}</h3>
                  <p className="font-sans text-sm text-[#615751] leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <span className="mt-1 inline-flex items-center gap-1.5 font-sans text-xs font-bold tracking-widest uppercase text-[#8F533C] group-hover:gap-2.5 transition-all w-fit">
                    Read More
                    <ArrowRight size={13} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
