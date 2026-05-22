// import React from 'react';
// import { MdOutlineMailOutline } from 'react-icons/md';

// export default function Footer() {
//   const productLinks = ['Explore Prompts', 'Trending Now', 'Top Categories', 'Submit Prompt', 'Premium Plans'];
//   const toolLinks = ['Midjourney Prompts', 'DALL-E 3 Prompts', 'Stable Diffusion', 'Leonardo AI', 'Flux Specialist'];
//   const companyLinks = ['About Us', 'Our Blog', 'Careers', 'Brand Kit', 'Contact Support'];
//   const legalLinks = ['Terms of Service', 'Privacy Policy', 'Cookie Preferences', 'License Agreement'];

//   return (
//     <footer className="bg-white border-t border-pink-100/60 relative overflow-hidden pt-16 pb-8">

//       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-pink-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-pink-50/50 to-transparent rounded-full blur-2xl pointer-events-none" />

//       <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-100 items-center">
          
//           <div className="lg:col-span-5 space-y-4">
//             <div className="flex items-center space-x-2">
//               <span className="text-[#FF2A85] text-2xl">✦</span>
//               <span className="font-extrabold text-2xl tracking-tight text-slate-900">
//                 Viral<span className="text-[#FF2A85]">Prompt</span>
//               </span>
//             </div>
//             <p className="text-gray-400 text-sm font-medium max-w-sm leading-relaxed">
//               Join the world's largest community of AI creators. Discover, copy, and craft the next viral AI masterpieces effortlessly.
//             </p>
//           </div>

//           <div className="lg:col-span-7 space-y-3 lg:justify-self-end w-full max-w-xl">
//             <h4 className="text-sm font-extrabold text-slate-800 tracking-tight">
//               Get the best viral prompts weekly 🔥
//             </h4>
//             <div className="bg-gray-50 border border-gray-100 rounded-full p-1.5 flex items-center shadow-inner focus-within:border-pink-200 transition-all">
//               <span className="pl-3 text-gray-400 text-md"><MdOutlineMailOutline  /></span>
//               <input 
//                 type="email" 
//                 placeholder="Enter your work email..." 
//                 className="w-full pl-2 pr-4 text-xs font-semibold bg-transparent focus:outline-none text-slate-700 placeholder-gray-400"
//               />
//               <button className="bg-gradient-to-r from-[#FF416C] to-[#FF2A85] hover:opacity-95 text-white text-xs font-bold px-5 py-3 rounded-full transition shrink-0 shadow-md shadow-pink-200">
//                 Subscribe Now
//               </button>
//             </div>
//           </div>

//         </div>

//         {/* --- MIDDLE ROW: LINKS SITEMAP --- */}
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12">
          
//           {/* Column 1: Explore */}
//           <div className="space-y-4">
//             <h5 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest">Platform</h5>
//             <ul className="space-y-2.5 text-xs font-bold text-gray-400">
//               {productLinks.map((link) => (
//                 <li key={link}>
//                   <a href="#" className="hover:text-[#FF2A85] transition-colors">{link}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 2: Tools */}
//           <div className="space-y-4">
//             <h5 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest">AI Hubs</h5>
//             <ul className="space-y-2.5 text-xs font-bold text-gray-400">
//               {toolLinks.map((link) => (
//                 <li key={link}>
//                   <a href="#" className="hover:text-[#FF2A85] transition-colors">{link}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Company */}
//           <div className="space-y-4">
//             <h5 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest">Company</h5>
//             <ul className="space-y-2.5 text-xs font-bold text-gray-400">
//               {companyLinks.map((link) => (
//                 <li key={link}>
//                   <a href="#" className="hover:text-[#FF2A85] transition-colors">{link}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Legal */}
//           <div className="space-y-4">
//             <h5 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest">Legal</h5>
//             <ul className="space-y-2.5 text-xs font-bold text-gray-400">
//               {legalLinks.map((link) => (
//                 <li key={link}>
//                   <a href="#" className="hover:text-[#FF2A85] transition-colors">{link}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 5: Social Handles & System Status Badge */}
//           <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4 lg:text-right">
//             <h5 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest lg:block hidden">Connect</h5>
//             <div className="flex items-center gap-3 lg:justify-end">
//               <a href="#" className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-sm hover:bg-pink-50 hover:text-[#FF2A85] transition">𝕏</a>
//               <a href="#" className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-sm hover:bg-pink-50 hover:text-[#FF2A85] transition">📸</a>
//               <a href="#" className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-sm hover:bg-pink-50 hover:text-[#FF2A85] transition">🐙</a>
//               <a href="#" className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-sm hover:bg-pink-50 hover:text-[#FF2A85] transition">💬</a>
//             </div>
//             <div className="pt-2 lg:inline-block">
//               <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 text-[10px] font-extrabold text-emerald-600 px-3 py-1 rounded-full">
//                 <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
//                 All Systems Operational
//               </span>
//             </div>
//           </div>

//         </div>

//         {/* --- BOTTOM ROW: COPYRIGHT & CREDITS --- */}
//         <div className="pt-8 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-bold text-gray-400">
//           <p>© 2026 ViralPrompt Inc. Made with ❤️ for AI Creators globally.</p>
//           <div className="flex items-center space-x-2">
//             <span>Language:</span>
//             <select className="bg-transparent text-slate-700 outline-none cursor-pointer font-bold border border-gray-200 rounded-md px-1.5 py-0.5 text-[10px]">
//               <option>English (US)</option>
//               <option>Hindi (IN)</option>
//               <option>日本語 (JP)</option>
//             </select>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }


import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaDiscord,
} from "react-icons/fa6";

import {
  MdOutlineMailOutline,
} from "react-icons/md";

export default function Footer() {

  const productLinks = [
    "Explore Prompts",
    "Trending Prompts",
    "AI Prompt Marketplace",
    "Prompt Collections",
    "Submit Prompt",
    "Premium Membership",
  ];

  const toolLinks = [
    "Midjourney Prompts",
    "DALL-E 3 Prompts",
    "Stable Diffusion",
    "Leonardo AI",
    "Flux AI",
    "ChatGPT Prompting",
  ];

  const companyLinks = [
    "About Us",
    "Our Mission",
    "Blog & Articles",
    "Careers",
    "Press Kit",
    "Support Center",
  ];

  const legalLinks = [
    "Terms of Service",
    "Privacy Policy",
    "Cookies Policy",
    "DMCA",
    "Content Guidelines",
    "Licensing",
  ];

  return (
    <footer className="relative mt-0 bg-white border-t border-pink-100 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-pink-100/40 blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1700px] mx-auto px-4 lg:px-14">

        {/* ========================= */}
        {/* TOP HERO NEWSLETTER */}
        {/* ========================= */}

        <div className="py-24 border-b border-pink-100/60">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-100 px-4 py-2 rounded-full text-xs font-extrabold text-[#FF2A85] mb-7">
                ✦ World's Largest AI Prompt Hub
              </div>

              <h2 className="text-4xl lg:text-7xl font-black tracking-tight leading-[0.95] text-slate-900">

                Discover The Next

                <span className="block bg-gradient-to-r from-[#FF2A85] to-pink-400 bg-clip-text text-transparent">
                  Viral AI Prompt
                </span>

              </h2>

              <p className="mt-7 text-gray-500 text-base leading-relaxed max-w-2xl font-medium">
                Explore thousands of curated AI image prompts for Midjourney,
                DALL·E, Leonardo AI, Stable Diffusion, Flux and more.
                Copy prompts instantly and create stunning AI-generated art.
              </p>

              {/* STATS */}
              <div className="flex flex-wrap gap-8 mt-10">

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    120K+
                  </h3>
                  <p className="text-sm text-gray-400 font-semibold mt-1">
                    AI Prompts
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    2.4M+
                  </h3>
                  <p className="text-sm text-gray-400 font-semibold mt-1">
                    Monthly Users
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    45K+
                  </h3>
                  <p className="text-sm text-gray-400 font-semibold mt-1">
                    Creators
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative">

              <div className="bg-white border border-pink-100 rounded-[40px] p-8 lg:p-10 shadow-[0_30px_80px_rgba(255,42,133,0.08)]">

                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#FF2A85] to-pink-400 flex items-center justify-center text-white text-3xl shadow-lg shadow-pink-200">
                  ✦
                </div>

                <h3 className="mt-7 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                  Weekly Viral Prompt Drops 🔥
                </h3>

                <p className="mt-3 text-gray-500 text-sm leading-relaxed font-medium">
                  Get handpicked AI prompts, trends, prompt engineering tricks,
                  and viral collections delivered every week.
                </p>

                {/* INPUT */}
                <div className="mt-8 space-y-4">

                  <div className="bg-[#FAFBFD] border border-gray-100 rounded-2xl px-5 h-16 flex items-center">

                    <MdOutlineMailOutline className="text-2xl text-gray-400" />

                    <input
                      type="email"
                      placeholder="Enter your email address..."
                      className="w-full h-full px-4 bg-transparent outline-none text-sm font-semibold text-slate-700 placeholder:text-gray-400"
                    />

                  </div>

                  <button className="w-full h-16 rounded-2xl bg-gradient-to-r from-[#FF2A85] to-pink-500 text-white text-sm font-extrabold shadow-xl shadow-pink-200 hover:scale-[1.01] transition-all duration-300">

                    Subscribe Now

                  </button>

                </div>

                <p className="mt-4 text-[11px] text-gray-400 font-semibold text-center">
                  No spam. Unsubscribe anytime.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* LINKS */}
        {/* ========================= */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-20">

          {/* BRAND */}
          <div className="col-span-2">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF2A85] to-pink-400 text-white flex items-center justify-center text-xl shadow-lg shadow-pink-200">
                ✦
              </div>

              <h3 className="text-3xl font-black tracking-tight text-slate-900">
                Viral<span className="text-[#FF2A85]">Prompt</span>
              </h3>

            </div>

            <p className="mt-6 text-gray-500 text-sm leading-relaxed max-w-md font-medium">
              The ultimate AI prompt discovery platform for creators,
              designers, marketers, and AI enthusiasts worldwide.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-3 mt-8">

              {[
                FaXTwitter,
                FaInstagram,
                FaGithub,
                FaDiscord,
              ].map((Icon, idx) => (

                <button
                  key={idx}
                  className="w-12 h-12 rounded-2xl bg-[#FAFBFD] border border-gray-100 hover:border-pink-200 hover:bg-pink-50 hover:text-[#FF2A85] transition-all flex items-center justify-center text-lg text-gray-500"
                >
                  <Icon />
                </button>

              ))}

            </div>

          </div>

          {/* COLUMN */}
          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
              Platform
            </h4>

            <ul className="space-y-4">

              {productLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-semibold text-gray-500 hover:text-[#FF2A85] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* COLUMN */}
          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
              AI Tools
            </h4>

            <ul className="space-y-4">

              {toolLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-semibold text-gray-500 hover:text-[#FF2A85] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* COLUMN */}
          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
              Company
            </h4>

            <ul className="space-y-4">

              {[...companyLinks, ...legalLinks].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-semibold text-gray-500 hover:text-[#FF2A85] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>

        </div>

        {/* ========================= */}
        {/* BOTTOM */}
        {/* ========================= */}

        <div className="border-t border-pink-100 py-8 flex flex-col lg:flex-row gap-5 items-center justify-between">

          <p className="text-sm font-semibold text-gray-400 text-center lg:text-left">
            © 2026 ViralPrompt Inc. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3">

            <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-extrabold px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </span>

            <button className="bg-[#FAFBFD] border border-gray-100 px-4 h-10 rounded-xl text-xs font-bold text-gray-500 hover:border-pink-200 hover:text-[#FF2A85] transition">
              English (US)
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}