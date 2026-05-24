"use client";

import { MdOutlineArrowRight } from "react-icons/md";
import PromptCard from "./PromptCard";
import Link from "next/link";

export default function CategoryRow({
  title,
  subtitle,
  icon,
  data,
  slug,
  tag
}) {
  return (
    <section className="space-y-4">

      {/* Heading */}
      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-2">
            <span>{icon}</span>
            <span>{title}</span>
          </h2>

          <p className="text-xs text-gray-400 font-medium mt-1">
            {subtitle}
          </p>

        </div>

        <Link href={`/category/${slug || tag}`}><button className="text-sm flex items-center font-bold text-[#FF2A85] cursor-pointer hover:underline">
          View All <MdOutlineArrowRight className="text-[20px]" />
        </button></Link>

      </div>

      {/* Scroll Cards */}
      <div className="flex gap-5 overflow-x-auto pb-2 custom-scrollbar snap-x snap-mandatory">

        {data.map((card, idx) => (

          <div
            key={idx}
            className="min-w-[290px] max-w-[290px] shrink-0 snap-start"
          >
            <PromptCard card={card} />
          </div>

        ))}

      </div>

    </section>
  );
}