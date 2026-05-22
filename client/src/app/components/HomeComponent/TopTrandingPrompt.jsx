"use client";
import React from "react";
import PromptCard from "../common/PromptCard";
// import { categories } from "@/data/promptCards";
import Masonry from "react-masonry-css";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuNotebook } from "react-icons/lu";

import { HiSparkles, HiOutlineUsers } from "react-icons/hi2";

import { FaFire, FaCopy } from "react-icons/fa6";
import Link from "next/link";
import { BsStars } from "react-icons/bs";
import { useAppContext } from "@/contexts/AppContext";

const stats = [
  {
    label: "Total Prompts",
    value: "25K+",
    icon: <HiSparkles />,
    color: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/30",
  },
  {
    label: "Daily Copies",
    value: "120K",
    icon: <FaCopy />,
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/30",
  },
  {
    label: "Trending Today",
    value: "1.8K",
    icon: <FaFire />,
    color: "from-orange-400 to-red-500",
    glow: "shadow-orange-500/30",
  },
  {
    label: "Active Creators",
    value: "9K+",
    icon: <HiOutlineUsers />,
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-500/30",
  },
];

const breakpointColumnsObj = {
  default: 4,
  1280: 3,
  768: 2,
  640: 1,
};
export default function TopTrandingPrompt() {
  // const categoriesSlide = [
  //   {
  //     title: "Anime",
  //     count: "2.4K Prompts",
  //     image:
  //       "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=400&q=80",
  //     icon: "✨",
  //     iconBg: "bg-pink-100 text-pink-500",
  //   },
  //   {
  //     title: "Cinematic",
  //     count: "3.1K Prompts",
  //     image:
  //       "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
  //     icon: "🎬",
  //     iconBg: "bg-rose-100 text-rose-500",
  //   },
  //   {
  //     title: "Realistic",
  //     count: "4.7K Prompts",
  //     image:
  //       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  //     icon: "📷",
  //     iconBg: "bg-pink-100 text-pink-500",
  //   },
  //   {
  //     title: "3D Render",
  //     count: "2.8K Prompts",
  //     image:
  //       "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=400&q=80",
  //     icon: "📦",
  //     iconBg: "bg-purple-100 text-purple-500",
  //   },
  //   {
  //     title: "Fantasy",
  //     count: "3.6K Prompts",
  //     image:
  //       "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?auto=format&fit=crop&w=400&q=80",
  //     icon: "🏰",
  //     iconBg: "bg-red-100 text-red-500",
  //   },
  //   {
  //     title: "Dark Art",
  //     count: "1.9K Prompts",
  //     image:
  //       "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=400&q=80",
  //     icon: "💀",
  //     iconBg: "bg-rose-100 text-rose-600",
  //   },
  //   {
  //     title: "Product Ads",
  //     count: "1.7K Prompts",
  //     image:
  //       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
  //     icon: "🏷️",
  //     iconBg: "bg-pink-100 text-pink-500",
  //   },
  // ];

  // Infinite loop ke liye array double kar rahe hain
  const {categories} = useAppContext()
  const categoriesSlide = categories;

  const duplicatedCategories = [...categoriesSlide, ...categoriesSlide];

  const filteredNewCategory = categories.filter((c) => c.badge === "New")

  return (
    <section className="bg-[#FFF5F7] px-3 sm:px-6 sm:pt-16 pb-16 relative overflow-hidden">
      {/* Injecting Tailwind Keyframe Utility for infinite scrolling */}
      <style>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-slider {
          display: flex;
          width: max-content;
          animation: infiniteScroll 60s linear infinite;
        }
        .animate-infinite-slider:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle background star decoration */}
      <div className="absolute left-4 bottom-1/4 text-pink-200/60 pointer-events-none text-3xl">
        ✦
      </div>
      <div className="absolute right-8 bottom-12 text-pink-200/60 pointer-events-none text-4xl">
        ✦
      </div>

      <div className="max-w-7xl mx-auto space-y-14">
        {/* --- SECTION 1: TOP CATEGORIES HEADER & INFINITE SLIDER --- */}
        <div className="space-y-6 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center bg-pink-50 border border-pink-200 rounded-full px-3 py-1 text-xs font-bold text-[#FF2A85]">
                ✦ Explore by Category
              </span>
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                Top Prompt <span className="text-[#FF2A85]">Categories</span>
              </h2>
              <p className="text-gray-400 font-medium text-sm">
                Explore the most popular prompt categories and find the perfect
                style for your next masterpiece.
              </p>
            </div>

            <Link href={"/explore-categories"}><button className="inline-flex items-center space-x-2 border border-pink-100 hover:border-pink-200 bg-white text-xs font-bold text-[#FF2A85] px-5 py-3 rounded-full shadow-sm transition shrink-0 self-start md:self-auto">
              <span>View All Categories</span>
              <span className="text-sm">→</span>
            </button></Link>
          </div>

          {/* Infinite Moving Cards Track Wrapper */}
          <div className="relative w-full overflow-hidden mask-gradient py-2">
            {/* Fade effect edges on left and right for smooth premium feel */}
            <div className="absolute top-0 left-0 w-2 sm:w-16 h-full bg-gradient-to-r from-[#FFF5F7] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-2 sm:w-16 h-full bg-gradient-to-l from-[#FFF5F7] to-transparent z-10 pointer-events-none" />

            <div className="animate-infinite-slider gap-4">
              {duplicatedCategories.map((cat, idx) => (
                <Link href={`/prompts/${cat.slug}`}><div
                  key={idx}
                  className="bg-white rounded-[24px] p-2.5 shadow-sm hover:shadow-md transition duration-300 border border-gray-100/60 w-[180px] shrink-0 cursor-pointer group/card"
                >
                  {/* Category Image Cover */}
                  <div className="relative h-44 rounded-[20px] overflow-hidden bg-gray-100">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition duration-500"
                    />
                    {/* Floating Icon Base */}
                    <div
                      className={`absolute bottom-2 left-2 w-8 h-8 bg-white text-pink-500 text-[15px] rounded-full flex items-center justify-center text-xs shadow-md border border-white/40 font-bold`}
                    >
                      <BsStars />
                    </div>
                  </div>
                  {/* Category Card Details */}
                  <div className="pt-3.5 pb-2 px-1.5">
                    <h4 className="font-bold text-gray-800 text-sm tracking-tight">
                      {cat.title}
                    </h4>
                    <p className="text-[11px] font-bold text-pink-500 mt-0.5">
                      24k Prompts
                    </p>
                  </div>
                </div></Link>
              ))}
            </div>
          </div>
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-5"
          columnClassName="space-y-5"
        >
          {filteredNewCategory.map((card, idx) => (
            <PromptCard key={idx} card={card} />
          ))}
        </Masonry>

        <div className="w-full flex items-center justify-center">
          <Link href={"/explore-categories"}><button className="flex items-center space-x-2 border border-pink-100 hover:border-pink-200 bg-white text-xs font-bold text-[#FF2A85] px-5 py-3 rounded-full shadow-sm transition shrink-0 self-start md:self-auto">
            <span>View All Categories</span>
            <span className="text-sm">→</span>
          </button></Link>
        </div>

        {/* --- SECTION 2: PROMPT OF THE DAY BANNER --- */}
        <div className="relative overflow-hidden rounded-[36px] border border-pink-100/60 bg-white shadow-[0_20px_80px_rgba(255,42,133,0.08)]">
          {/* Soft Background Glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-pink-400/20 blur-[120px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-rose-300/20 blur-[120px] rounded-full" />

          {/* Main Grid */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-4 p-8 lg:p-10 flex flex-col justify-between bg-white z-10">
              <div>
                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#FF2A85] text-[11px] font-extrabold uppercase tracking-wider">
                  <span>🔥</span>
                  <span>Prompt of the Day</span>
                </div>

                {/* Heading */}
                <h2 className="mt-6 text-4xl lg:text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-900">
                  Cyberpunk{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                    Geisha
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-5 text-[15px] leading-relaxed text-gray-500 max-w-md">
                  A futuristic geisha standing in neon Tokyo rain with cinematic
                  lighting, dreamy reflections, ultra realistic details and soft
                  pink glow atmosphere.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-7">
                  <span className="px-4 py-2 rounded-full bg-pink-50 border border-pink-100 text-[#FF2A85] text-xs font-bold">
                    Midjourney
                  </span>

                  <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold">
                    v 6.0
                  </span>

                  <span className="px-4 py-2 rounded-full bg-red-50 text-red-400 text-xs font-semibold">
                    --ar 16:9
                  </span>

                  <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-400 text-xs font-semibold">
                    Stylize 750
                  </span>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="flex items-center gap-6 mt-10">
                <div>
                  <p className="text-2xl font-black text-slate-900">23.4K</p>
                  <p className="text-xs text-gray-400 font-medium">Copied</p>
                </div>

                <div className="w-px h-10 bg-pink-100" />

                <div>
                  <p className="text-2xl font-black text-slate-900">12.7K</p>
                  <p className="text-xs text-gray-400 font-medium">Likes</p>
                </div>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="lg:col-span-5 relative min-h-[350px] overflow-hidden">
              {/* Image */}
              <img
                src="/images/cyber-punk.jpg"
                alt="Cyberpunk Geisha"
                className="absolute inset-0 w-full h-full object-cover object-center scale-105 hover:scale-110 transition duration-[3000ms]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-pink-500/20" />

              {/* Floating Sparkle */}
              <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg shadow-pink-500/20">
                <span className="text-pink-500 text-lg">✦</span>
              </div>

              {/* Floating Blur */}
              <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-48 h-48 bg-pink-500/30 blur-[90px] rounded-full" />
            </div>

            {/* RIGHT CTA */}
            <div className="lg:col-span-3 relative overflow-hidden bg-gradient-to-br from-[#FF4D9D] via-[#FF2A85] to-[#FF416C] p-8 flex flex-col justify-between">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-[80px] rounded-full" />

              {/* Top Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between py-5 border-b border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center">
                      <LuNotebook className="text-white text-xl" />
                    </div>

                    <div>
                      <p className="text-xl font-black text-white">23.4K</p>
                      <p className="text-xs text-white/70 font-medium">
                        Prompt Copies
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center">
                      <IoMdHeartEmpty className="text-white text-xl" />
                    </div>

                    <div>
                      <p className="text-xl font-black text-white">12.7K</p>
                      <p className="text-xs text-white/70 font-medium">
                        Total Likes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="relative z-10 mt-10 w-full py-4 rounded-2xl bg-white text-[#FF2A85] font-bold text-sm shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  <span>
                    <LuNotebook className="text-primary text-xl" />
                  </span>
                  <span>Copy Prompt</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* --- SECTION 3: SYSTEM DASHBOARD COUNTERS ROW --- */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-5 border border-gray-100/60 shadow-sm flex items-center space-x-4"
            >
              <div
                className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center text-lg font-bold shadow-inner`}
              >
                {stat.icon}
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-extrabold text-slate-800 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-gray-400 font-medium text-xs mt-0.5">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 pt-5">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border border-pink-100/50
        bg-white
        px-4
        py-4
        shadow-[0_8px_30px_rgba(255,42,133,0.05)]
        hover:shadow-[0_12px_40px_rgba(255,42,133,0.10)]
        transition-all
        duration-300
      "
            >
              {/* Soft Glow */}
              <div
                className={`
          absolute
          top-0
          right-0
          w-20
          h-20
          rounded-full
          blur-2xl
          opacity-10
          bg-gradient-to-br
          ${stat.color}
        `}
              />

              <div className="relative z-10 flex items-center gap-3">
                {/* Icon */}
                <div
                  className={`
            w-11
            h-11
            rounded-xl
            bg-gradient-to-br
            ${stat.color}
            flex
            items-center
            justify-center
            text-white
            text-lg
            shadow-md
            ${stat.glow}
          `}
                >
                  {stat.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </h3>

                  <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
