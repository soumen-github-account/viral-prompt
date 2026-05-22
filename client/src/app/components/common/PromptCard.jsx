import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
// React Icons package imports
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuCopy, LuEye } from "react-icons/lu";

const PromptCard = ({ card }) => {
  // const heights = [
  //   "h-[220px]",
  //   "h-[280px]",
  //   "h-[340px]",
  //   "h-[400px]",
  // ];

  // const randomHeight = heights[Math.floor(Math.random() * heights.length)];
  // const rotations = [
  //   "rotate-0",
  //   "rotate-[1deg]",
  //   "rotate-[-1deg]",
  // ];

  // const randomRotation = rotations[Math.floor(Math.random() * rotations.length)];

  return (
    <div className="w-full break-inside-avoid mb-5">
      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
        
        <div className={`relative bg-slate-900 overflow-hidden shrink-0 h-[350px]`}>
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition duration-500"
          />

          <span
            className={`absolute top-3 left-3 text-[10px] text-white font-extrabold px-2.5 py-1 rounded-md shadow-sm tracking-wide uppercase ${card.badgeBg}`}
          >
            {card.badge}
          </span>

          {/* <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white text-gray-500 hover:text-rose-500 rounded-full flex items-center justify-center text-base shadow-md transition-all duration-200 backdrop-blur-xs active:scale-90">
            <HiOutlineHeart className="stroke-2" />
          </button> */}

          <span className="absolute bottom-2 left-3 bg-black/50 text-white border border-white/10 text-[9px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs tracking-wider">
            {card.tool}
          </span>
        </div>

        <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <h4 className="font-extrabold text-sm text-slate-800 tracking-tight leading-tight group-hover:text-[#FF2A85] transition-colors cursor-pointer">
              {card.title}
            </h4>
            <p className="text-gray-400 text-[11px] font-medium leading-relaxed line-clamp-2 cursor-pointer">
              {card.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1">
            {card.tags.map((t) => (
              <span
                key={t}
                className="bg-pink-50/50 text-[10px] font-bold text-pink-500 px-2 py-0.5 rounded-md"
              >
                {t}
              </span>
            ))}
            <span className="bg-gray-50 text-[10px] font-bold text-gray-400 px-1.5 py-0.5 rounded-md">
              +2
            </span>
          </div>

          {/* Operational Footer action button rows */}
          <div className="flex items-center justify-between border-t border-gray-50 text-[11px] font-bold text-gray-400">
            <div className="flex items-center space-x-3">
              {/* Likes counter icon */}
              <span className="flex items-center text-slate-600">
                <IoMdHeartEmpty className="mr-1 text-sm text-rose-500" />{" "}
                {card.likes}
              </span>
              {/* Copies counter icon */}
              <span className="flex items-center text-slate-500">
                <LuEye className="mr-1 text-sm text-gray-400 stroke-[2.5]" />{" "}
                {card.copies}
              </span>
            </div>
            
            {/* Professional Copy Button with Icon */}
            <Link href={`/prompts/${card.slug}`}><button className="bg-[#FF2A85] hover:bg-[#e01f70] text-white font-bold text-[10px] px-3 py-1.5 rounded-xl shadow-sm shadow-pink-100 flex items-center space-x-1.5 transition-all duration-200 active:scale-95">
              <FiExternalLink className="text-xs stroke-[2.5]" />
              <span>Show Prompt</span>
            </button></Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PromptCard;