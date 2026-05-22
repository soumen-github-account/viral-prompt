"use client"
import Link from "next/link";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const Hero = () => {
    
    const tags = [
        '# Midjourney',
        '# BingImageCreator',
        '# Anime',
        '# Photorealistic',
        '# Fantasy'
    ];
  return (
    <div className="relative pt-17 min-h-screen overflow-x-hidden bg-[#FFF5F7] selection:bg-pink-200">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-300/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Section */}
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-36 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Grid Panel */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center bg-pink-50 border border-pink-300 rounded-full px-4 py-1.5 text-xs font-bold text-[#FF2A85] cursor-pointer">
            <span>🔥 #1 Destination for AI Prompts</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl max-sm:text-4xl md:text-6xl lg:text-[68px] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Find the Next
            </h1>
            <h1 className="text-5xl max-sm:text-4xl md:text-6xl lg:text-[68px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF416C] via-[#FF2A85] to-[#D1206F] tracking-tight leading-[1.1] relative inline-block">
              Viral AI Prompt
              <span className="absolute bottom-1 left-0 w-full h-[4px] bg-pink-300/40 rounded-full" />
            </h1>
          </div>

          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
            Copy, paste, and generate stunning AI images in seconds.
          </p>

          {/* Search Bar Input */}
          <Link href={"/explore-categories"}><div className="max-w-2xl bg-white rounded-full p-2.5 shadow-xl shadow-pink-100/40 border border-gray-100/80 flex items-center transition-all focus-within:border-pink-300">
            <div className="pl-4 text-gray-400">
              <IoSearchOutline className="text-2xl" />
            </div>
            <input
              type="text"
              placeholder="Search for prompts (e.g. Cyberpunk cat, Anime girl...)"
              className="w-full pl-3 pr-4 py-2 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none text-base font-medium"
            />
            <button className="bg-gradient-to-r from-[#FF416C] to-[#FF2A85] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-pink-300 hover:opacity-90 transition shrink-0">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div></Link>

          <div className="flex flex-wrap gap-2.5 pt-1 max-w-xl">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-white hover:bg-pink-50 border border-pink-200 text-xs font-semibold px-3 py-1.5 rounded-md text-pink-600 cursor-pointer transition"
              >
                {tag}
              </span>
            ))}
            <span className="bg-white border border-pink-200 text-xs font-bold px-3 py-1.5 rounded-md text-[#FF2A85] flex items-center cursor-pointer hover:bg-pink-100 transition">
              🔥 Trending
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href={"/explore-categories"}><button className="bg-gradient-to-r from-[#FF416C] to-[#FF2A85] hover:opacity-95 cursor-pointer text-white px-8 py-4 rounded-2xl text-base font-bold shadow-lg shadow-pink-300/40 flex items-center space-x-2 transition">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span>Explore Prompts</span>
            </button></Link>
            <Link href={"/category/trending"}><button className="bg-white border border-gray-200/80 hover:bg-gray-50 text-slate-800 cursor-pointer px-8 py-4 rounded-2xl text-base font-bold flex items-center space-x-2 transition shadow-sm">
              <svg
                className="w-5 h-5 text-[#FF2A85]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span>Trending Now</span>
            </button></Link>
          </div>
        </div>

        <div className="hidden lg:col-span-5 relative mt-16 lg:mt-0 sm:flex justify-center items-center">
          {/* Main Tilted Prompt Card Component */}
          <div className="bg-white/95 rounded-[32px] p-6 shadow-[0_20px_50px_rgba(255,182,193,0.35)] border border-white/60 max-w-[390px] w-full transform -rotate-6 translate-x-4 relative z-20 backdrop-blur-md">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 text-xs font-bold">
                  ✨
                </div>
                <span className="text-xs font-bold text-gray-800">
                  Viral Prompt
                </span>
              </div>
              <span className="bg-pink-50 text-[#FF2A85] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center">
                📈 Trending
              </span>
            </div>

            <div className="text-gray-800 font-medium text-lg leading-relaxed mb-6">
              “A{" "}
              <span class="text-[#FF2A85] font-bold">
                cyberpunk samurai cat
              </span>{" "}
              standing in the rain, neon lights, Tokyo street, ultra realistic,
              8k detail”
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-pink-50 text-xs font-bold text-[#FF2A85] px-3 py-1 rounded-md">
                Midjourney
              </span>
              <span className="bg-gray-100 text-xs font-semibold text-gray-500 px-3 py-1 rounded-md">
                v 6.0
              </span>
              <span className="bg-red-50 text-xs font-semibold text-red-500 px-3 py-1 rounded-md">
                --ar 16:9
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button className="flex-1 bg-gradient-to-r from-[#FF416C] to-[#FF2A85] hover:opacity-95 text-white py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-md shadow-pink-200 transition">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
                <span>Copy Prompt</span>
              </button>
              <button className="bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-3.5 rounded-xl font-bold text-sm flex items-center space-x-1 border border-gray-100 transition">
                <span className="text-[#FF2A85]">❤️</span>
                <span>2.4k</span>
              </button>
              <button className="bg-gray-50 hover:bg-gray-100 text-gray-500 p-3.5 rounded-xl border border-gray-100 transition">
                🔖
              </button>
            </div>
          </div>

          {/* Right Floating Miniature Stack Cards */}
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col space-y-4 transform rotate-3 z-10 opacity-90 hidden sm:flex">
            <div className="w-36 h-28 bg-slate-900 rounded-2xl overflow-hidden shadow-md border border-white/20 transform hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80"
                alt="Cyberpunk"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-36 h-40 bg-pink-200 rounded-2xl overflow-hidden shadow-md border border-white/20 transform translate-x-4 hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=300&q=80"
                alt="Anime Girl"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-36 h-28 bg-emerald-900 rounded-2xl overflow-hidden shadow-md border border-white/20 transform hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80"
                alt="Landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Floating Pointer Arrow Asset */}
          <div className="absolute -top-12 left-1/3 text-pink-400 opacity-60 hidden lg:block">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              className="transform rotate-12"
            >
              <path
                d="M10 50 C 20 20, 40 20, 50 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
              />
              <path
                d="M45 10 L50 10 L50 15"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </main>

      <div className="absolute max-sm:bottom-6 bottom-20 left-0 w-full pt-10 pb-6 flex flex-col items-center justify-center rounded-t-[100px] border-t border-pink-100/40 shadow-[0_-15px_30px_rgba(255,245,247,0.9)]">
        <span className="text-sm font-bold text-pink-400 tracking-wider uppercase mb-1">
          Scroll Down
        </span>
        <div className="text-pink-500 animate-bounce text-sm">↓</div>
      </div>
    </div>
  );
};

export default Hero;
