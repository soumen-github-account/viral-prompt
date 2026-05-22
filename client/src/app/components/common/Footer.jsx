
// import React from "react";
// import {
//   FaXTwitter,
//   FaInstagram,
//   FaGithub,
//   FaDiscord,
// } from "react-icons/fa6";

// import {
//   MdOutlineMailOutline,
// } from "react-icons/md";

// export default function Footer() {

//   const productLinks = [
//     "Explore Prompts",
//     "Trending Prompts",
//     "AI Prompt Marketplace",
//     "Prompt Collections",
//     "Submit Prompt",
//     "Premium Membership",
//   ];

//   const toolLinks = [
//     "Midjourney Prompts",
//     "DALL-E 3 Prompts",
//     "Stable Diffusion",
//     "Leonardo AI",
//     "Flux AI",
//     "ChatGPT Prompting",
//   ];

//   const companyLinks = [
//     "About Us",
//     "Our Mission",
//     "Blog & Articles",
//     "Careers",
//     "Press Kit",
//     "Support Center",
//   ];

//   const legalLinks = [
//     "Terms of Service",
//     "Privacy Policy",
//     "Cookies Policy",
//     "DMCA",
//     "Content Guidelines",
//     "Licensing",
//   ];

//   return (
//     <footer className="relative mt-0 bg-white border-t border-pink-100 overflow-hidden">

//       {/* BACKGROUND GLOW */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-pink-100/40 blur-[140px] pointer-events-none" />

//       <div className="relative max-w-[1700px] mx-auto px-4 lg:px-14">

//         {/* ========================= */}
//         {/* TOP HERO NEWSLETTER */}
//         {/* ========================= */}

//         <div className="py-24 border-b border-pink-100/60">

//           <div className="grid lg:grid-cols-2 gap-14 items-center">

//             {/* LEFT */}
//             <div>

//               <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-100 px-4 py-2 rounded-full text-xs font-extrabold text-[#FF2A85] mb-7">
//                 ✦ World's Largest AI Prompt Hub
//               </div>

//               <h2 className="text-4xl lg:text-7xl font-black tracking-tight leading-[0.95] text-slate-900">

//                 Discover The Next

//                 <span className="block bg-gradient-to-r from-[#FF2A85] to-pink-400 bg-clip-text text-transparent">
//                   Viral AI Prompt
//                 </span>

//               </h2>

//               <p className="mt-7 text-gray-500 text-base leading-relaxed max-w-2xl font-medium">
//                 Explore thousands of curated AI image prompts for Midjourney,
//                 DALL·E, Leonardo AI, Stable Diffusion, Flux and more.
//                 Copy prompts instantly and create stunning AI-generated art.
//               </p>

//               {/* STATS */}
//               <div className="flex flex-wrap gap-8 mt-10">

//                 <div>
//                   <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
//                     120K+
//                   </h3>
//                   <p className="text-sm text-gray-400 font-semibold mt-1">
//                     AI Prompts
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
//                     2.4M+
//                   </h3>
//                   <p className="text-sm text-gray-400 font-semibold mt-1">
//                     Monthly Users
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
//                     45K+
//                   </h3>
//                   <p className="text-sm text-gray-400 font-semibold mt-1">
//                     Creators
//                   </p>
//                 </div>

//               </div>

//             </div>

//             {/* RIGHT */}
//             <div className="relative">

//               <div className="bg-white border border-pink-100 rounded-[40px] p-8 lg:p-10 shadow-[0_30px_80px_rgba(255,42,133,0.08)]">

//                 <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#FF2A85] to-pink-400 flex items-center justify-center text-white text-3xl shadow-lg shadow-pink-200">
//                   ✦
//                 </div>

//                 <h3 className="mt-7 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
//                   Weekly Viral Prompt Drops 🔥
//                 </h3>

//                 <p className="mt-3 text-gray-500 text-sm leading-relaxed font-medium">
//                   Get handpicked AI prompts, trends, prompt engineering tricks,
//                   and viral collections delivered every week.
//                 </p>

//                 {/* INPUT */}
//                 <div className="mt-8 space-y-4">

//                   <div className="bg-[#FAFBFD] border border-gray-100 rounded-2xl px-5 h-16 flex items-center">

//                     <MdOutlineMailOutline className="text-2xl text-gray-400" />

//                     <input
//                       type="email"
//                       placeholder="Enter your email address..."
//                       className="w-full h-full px-4 bg-transparent outline-none text-sm font-semibold text-slate-700 placeholder:text-gray-400"
//                     />

//                   </div>

//                   <button className="w-full h-16 rounded-2xl bg-gradient-to-r from-[#FF2A85] to-pink-500 text-white text-sm font-extrabold shadow-xl shadow-pink-200 hover:scale-[1.01] transition-all duration-300">

//                     Subscribe Now

//                   </button>

//                 </div>

//                 <p className="mt-4 text-[11px] text-gray-400 font-semibold text-center">
//                   No spam. Unsubscribe anytime.
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* ========================= */}
//         {/* LINKS */}
//         {/* ========================= */}

//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-20">

//           {/* BRAND */}
//           <div className="col-span-2">

//             <div className="flex items-center gap-3">

//               <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF2A85] to-pink-400 text-white flex items-center justify-center text-xl shadow-lg shadow-pink-200">
//                 ✦
//               </div>

//               <h3 className="text-3xl font-black tracking-tight text-slate-900">
//                 Viral<span className="text-[#FF2A85]">Prompt</span>
//               </h3>

//             </div>

//             <p className="mt-6 text-gray-500 text-sm leading-relaxed max-w-md font-medium">
//               The ultimate AI prompt discovery platform for creators,
//               designers, marketers, and AI enthusiasts worldwide.
//             </p>

//             {/* SOCIALS */}
//             <div className="flex items-center gap-3 mt-8">

//               {[
//                 FaXTwitter,
//                 FaInstagram,
//                 FaGithub,
//                 FaDiscord,
//               ].map((Icon, idx) => (

//                 <button
//                   key={idx}
//                   className="w-12 h-12 rounded-2xl bg-[#FAFBFD] border border-gray-100 hover:border-pink-200 hover:bg-pink-50 hover:text-[#FF2A85] transition-all flex items-center justify-center text-lg text-gray-500"
//                 >
//                   <Icon />
//                 </button>

//               ))}

//             </div>

//           </div>

//           {/* COLUMN */}
//           <div>
//             <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
//               Platform
//             </h4>

//             <ul className="space-y-4">

//               {productLinks.map((item) => (
//                 <li key={item}>
//                   <a
//                     href="#"
//                     className="text-sm font-semibold text-gray-500 hover:text-[#FF2A85] transition"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}

//             </ul>
//           </div>

//           {/* COLUMN */}
//           <div>
//             <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
//               AI Tools
//             </h4>

//             <ul className="space-y-4">

//               {toolLinks.map((item) => (
//                 <li key={item}>
//                   <a
//                     href="#"
//                     className="text-sm font-semibold text-gray-500 hover:text-[#FF2A85] transition"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}

//             </ul>
//           </div>

//           {/* COLUMN */}
//           <div>
//             <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
//               Company
//             </h4>

//             <ul className="space-y-4">

//               {[...companyLinks, ...legalLinks].map((item) => (
//                 <li key={item}>
//                   <a
//                     href="#"
//                     className="text-sm font-semibold text-gray-500 hover:text-[#FF2A85] transition"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}

//             </ul>
//           </div>

//         </div>

//         {/* ========================= */}
//         {/* BOTTOM */}
//         {/* ========================= */}

//         <div className="border-t border-pink-100 py-8 flex flex-col lg:flex-row gap-5 items-center justify-between">

//           <p className="text-sm font-semibold text-gray-400 text-center lg:text-left">
//             © 2026 ViralPrompt Inc. All rights reserved.
//           </p>

//           <div className="flex flex-wrap items-center gap-3">

//             <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-extrabold px-4 py-2 rounded-full">
//               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//               All Systems Operational
//             </span>

//             <button className="bg-[#FAFBFD] border border-gray-100 px-4 h-10 rounded-xl text-xs font-bold text-gray-500 hover:border-pink-200 hover:text-[#FF2A85] transition">
//               English (US)
//             </button>

//           </div>

//         </div>

//       </div>

//     </footer>
//   );
// }


"use client";

import React from "react";

import Link from "next/link";

import {
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaLinkedin,
} from "react-icons/fa6";

import {
  MdOutlineMailOutline,
} from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {

  // =========================
  // INTERNAL LINKS
  // =========================

  const platformLinks = [
    {
      name: "Explore Prompts",
      href: "/explore-categories",
    },
    {
      name: "Trending Prompts",
      href: "/category/trending",
    },
    {
      name: "New Prompts",
      href: "/category/new",
    },
    {
      name: "Popular Collections",
      href: "/category/popular",
    },
    {
      name: "Hot Right Now",
      href: "/category/hot",
    },
    {
      name: "AI Prompt Marketplace",
      href: "/marketplace",
    },
  ];

  // =========================
  // CATEGORY LINKS
  // =========================

  const categoryLinks = [
    {
      name: "Anime",
      href: "/prompts/anime",
    },
    {
      name: "Cinematic",
      href: "/prompts/cinematic",
    },
    {
      name: "Realistic",
      href: "/prompts/realistic",
    },
    {
      name: "Portrait",
      href: "/prompts/portrait",
    },
    {
      name: "Fantasy",
      href: "/prompts/fantasy",
    },
    {
      name: "Fashion",
      href: "/prompts/fashion",
    },
  ];

  // =========================
  // EXTERNAL AI TOOLS
  // =========================

  const toolLinks = [
    {
      name: "Midjourney",
      href: "https://www.midjourney.com",
    },
    {
      name: "ChatGPT",
      href: "https://chatgpt.com",
    },
    {
      name: "DALL·E",
      href: "https://openai.com/dall-e",
    },
    {
      name: "Leonardo AI",
      href: "https://leonardo.ai",
    },
    {
      name: "Stable Diffusion",
      href: "https://stability.ai",
    },
    {
      name: "Flux AI",
      href: "https://blackforestlabs.ai",
    },
  ];

  // =========================
  // COMPANY
  // =========================

  const companyLinks = [
    {
      name: "About Platform",
      href: "/about",
    },
    {
      name: "Become Creator",
      href: "/creator",
    },
    {
      name: "Submit Prompt",
      href: "/submit",
    },
    {
      name: "Affiliate Program",
      href: "/affiliate",
    },
    {
      name: "Blog & Tutorials",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  // =========================
  // LEGAL
  // =========================

  const legalLinks = [
    {
      name: "Privacy Policy",
      href: "/terms&conditions/privacy-policy",
    },
    {
      name: "Terms of Service",
      href: "/terms&conditions/terms",
    },
    {
      name: "DMCA Policy",
      href: "/terms&conditions/dmca",
    },
    {
      name: "Cookies Policy",
      href: "/terms&conditions/cookies",
    },
    {
      name: "Content Guidelines",
      href: "/terms&conditions/guidelines",
    },
    {
      name: "Licensing",
      href: "/terms&conditions/licensing",
    },
  ];

  return (
    <footer className="relative bg-white border-t border-pink-100 overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-pink-100/40 blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1700px] mx-auto px-4 lg:px-14">

        {/* ================================= */}
        {/* TOP NEWSLETTER */}
        {/* ================================= */}

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

        {/* ================================= */}
        {/* LINKS */}
        {/* ================================= */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 py-20">

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

            {/* CREATOR */}
            <div className="mt-8 flex items-center gap-4">

              <img
                src="/images/soumen.png"
                alt="Soumen Das"
                className="w-14 h-14 rounded-2xl object-cover border border-pink-100"
              />

              <div>

                <p className="text-xs text-gray-400 font-semibold">
                  Designed & Developed by
                </p>

                <a
                  href="https://portfolio-soumen-dev.netlify.app/"
                  target="_blank"
                  className="text-sm font-black text-slate-900 hover:text-[#FF2A85] transition"
                >
                  Soumen Das ↗
                </a>

              </div>

            </div>

            {/* SOCIALS */}
            <div className="flex items-center gap-3 mt-8">

              {[
                {
                  icon: FaFacebook,
                  href: "https://www.facebook.com/share/1K3EvTFHdW/",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/_dream_killar_9832?igsh=MTJ0a3U0MXdpNXI2Nw==",
                },
                {
                  icon: FaGithub,
                  href: "https://github.com/soumen-github-account",
                },
                {
                  icon: FaLinkedin,
                  href: "https://linkedin.com/in/soumen-das-07b2b2328",
                },
              ].map((item, idx) => {

                const Icon = item.icon;

                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    className="w-12 h-12 rounded-2xl bg-[#FAFBFD] border border-gray-100 hover:border-pink-200 hover:bg-pink-50 hover:text-[#FF2A85] transition-all flex items-center justify-center text-lg text-gray-500"
                  >
                    <Icon />
                  </a>
                );
              })}

            </div>

          </div>

          {/* PLATFORM */}
          <div>

            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
              Platform
            </h4>

            <ul className="space-y-4">

              {platformLinks.map((item) => (
                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-gray-500 hover:text-[#FF2A85] transition"
                  >
                    {item.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* CATEGORIES */}
          <div>

            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
              Categories
            </h4>

            <ul className="space-y-4">

              {categoryLinks.map((item) => (
                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-gray-500 hover:text-[#FF2A85] transition"
                  >
                    {item.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* AI TOOLS */}
          <div>

            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
              AI Tools
            </h4>

            <ul className="space-y-4">

              {toolLinks.map((item) => (
                <li key={item.name}>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-500 hover:text-[#FF2A85] transition"
                  >
                    {item.name}
                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* COMPANY + LEGAL */}
          <div>

            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
              Company
            </h4>

            <ul className="space-y-4">

              {legalLinks.map((item) => (
                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-gray-500 hover:text-[#FF2A85] transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* ================================= */}
        {/* BOTTOM */}
        {/* ================================= */}

        <div className="border-t border-pink-100 py-8 flex flex-col lg:flex-row gap-5 items-center justify-between">

          <p className="text-sm font-semibold text-gray-400 text-center lg:text-left">
            © 2026 ViralPrompt — Built for AI Creators Worldwide.
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