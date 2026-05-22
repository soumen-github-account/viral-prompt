// "use client";
// import React, { useState } from "react";
// import PromptCard from "../common/PromptCard";
// import { promptCards } from "@/data/promptCards";
// import { IoSearchOutline } from "react-icons/io5";
// import { categories } from "@/data/promptCards";
// import CategoryRow from "../common/CategoryRow";

// export default function AllCategory() {
//   return (
//     <div className="min-h-screen pt-25 px-4 sm:px-10 bg-[#FAFBFD] text-slate-900 selection:bg-pink-100">
//       <main className="lg:col-span-9 space-y-6">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div className="space-y-1">
//             <h1 className="max-sm:text-2xl text-3xl font-extrabold tracking-tight text-slate-900">
//               Explore <span className="text-[#FF2A85]">AI Prompts</span>{" "}
//               <span className="text-sm font-normal text-pink-400 ml-1">✦</span>
//             </h1>
//             <p className="text-gray-400 text-xs font-medium">
//               Discover trending prompts across every AI art style.
//             </p>
//           </div>

//           <div className="bg-pink-50/50 max-sm:hidden border border-pink-100/50 rounded-2xl px-4 py-2.5 flex items-center space-x-3 self-start md:self-auto shadow-sm">
//             <span className="text-lg">🔥</span>
//             <div>
//               <p className="text-xs font-extrabold text-[#FF2A85] tracking-tight">
//                 20.4K
//               </p>
//               <p className="text-[10px] font-bold text-gray-400">
//                 Prompts Added Today
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col gap-3">
//           <div className="flex-1 bg-white rounded-full p-1.5 border border-gray-100 flex items-center shadow-sm">
//             <span className="pl-3 text-gray-400 text-[25px]">
//               <IoSearchOutline />
//             </span>
//             <input
//               type="text"
//               placeholder="Search prompts, styles, themes..."
//               className="w-full pl-2 pr-4 text-xs font-medium bg-transparent focus:outline-none"
//             />
//             <button className="bg-[#FF2A85] text-white w-10 lg:w-8 h-8 rounded-full flex items-center justify-center text-[20px] shadow-sm shadow-pink-200 cursor-pointer hover:bg-pink-600 hover:shadow-md hover:shadow-pink-400 transition-all duration-200">
//               <IoSearchOutline />
//             </button>
//           </div>

//           <div className="flex pb-2 items-center space-x-1.5 overflow-x-scroll custom-scrollbar">
//             <span className="bg-pink-50 border border-pink-100 text-xs font-bold text-[#FF2A85] px-4 py-2.5 rounded-full cursor-pointer shrink-0">
//               📈 Trending
//             </span>
//             <span className="bg-white border border-gray-100 hover:bg-gray-50 text-xs font-semibold text-gray-500 px-4 py-2.5 rounded-full cursor-pointer shrink-0">
//               ✨ New
//             </span>
//             <span className="bg-white border border-gray-100 hover:bg-gray-50 text-xs font-semibold text-gray-500 px-4 py-2.5 rounded-full cursor-pointer shrink-0">
//               📋 Most Copied
//             </span>
//             <span className="bg-white border border-gray-100 hover:bg-gray-50 text-xs font-semibold text-gray-500 px-4 py-2.5 rounded-full cursor-pointer shrink-0">
//               🎁 Free
//             </span>
//             <span className="bg-white border border-gray-100 hover:bg-gray-50 text-xs font-semibold text-gray-500 px-4 py-2.5 rounded-full cursor-pointer shrink-0">
//               ⭐ Premium
//             </span>
//           </div>
//         </div>

//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
//           {categories.map((card, idx) => (
//             <PromptCard key={idx} card={card}/>
//           ))}
//         </div> */}

//         <div className="space-y-10 pt-4">
//           <CategoryRow
//             title="New Prompts"
//             subtitle="Fresh AI prompts added today"
//             icon="✨"
//             slug="new"
//             data={categories.filter((item) => item.badge === "New")}
//           />

//           <CategoryRow
//             title="Trending"
//             subtitle="Most viral prompts today"
//             icon="🔥"
//             slug="trending"
//             data={categories.filter((item) => item.badge === "Trending")}
//           />

//           <CategoryRow
//             title="Popular Collections"
//             subtitle="Most copied categories"
//             icon="⭐"
//             slug="popular"
//             data={categories.filter((item) => item.badge === "Popular")}
//           />

//           <CategoryRow
//             title="Hot Right Now"
//             subtitle="Top performing prompts"
//             icon="🚀"
//             slug="hot"
//             data={categories.filter((item) => item.badge === "Hot")}
//           />
//         </div>
//       </main>
//     </div>
//   );
// }


"use client";

import React, { useMemo, useState } from "react";

import { IoSearchOutline } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";

import { categories } from "@/data/promptCards";

import CategoryRow from "../common/CategoryRow";

export default function AllCategory() {

  const [search, setSearch] = useState("");

  const [selectedTag, setSelectedTag] =
    useState("All");

  // ALL TAGS AUTO GENERATED
  const allTags = useMemo(() => {

    const tags = new Set();

    categories.forEach((item) => {

      item.tags?.forEach((tag) => {
        tags.add(tag);
      });

      if (item.badge) {
        tags.add(item.badge);
      }

      if (item.tool) {
        tags.add(item.tool);
      }

    });

    return ["All", ...Array.from(tags)];

  }, []);

  // FILTERED DATA
  const filteredCategories =
    categories.filter((item) => {

      const query = search.toLowerCase();

      const matchSearch =
        item.title.toLowerCase().includes(query) ||
        item.description
          .toLowerCase()
          .includes(query) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(query)
        ) ||
        item.tool
          .toLowerCase()
          .includes(query);

      const matchTag =
        selectedTag === "All" ||
        item.tags.includes(selectedTag) ||
        item.badge === selectedTag ||
        item.tool === selectedTag;

      return matchSearch && matchTag;

    });

  return (
    <div className="min-h-screen pt-25 px-4 sm:px-10 bg-[#FAFBFD] text-slate-900 selection:bg-pink-100">

      <main className="space-y-7">

        {/* TOP HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">

          <div className="space-y-2">

            <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              Explore{" "}
              <span className="text-[#FF2A85]">
                AI Prompts
              </span>
            </h1>

            <p className="text-gray-400 text-sm font-medium">
              Discover trending prompts across every AI art style.
            </p>

          </div>

          {/* STATS */}
          <div className="bg-white border border-pink-100 rounded-3xl px-5 py-4 hidden sm:flex items-center gap-4 shadow-sm">

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-[#FF2A85] text-white flex items-center justify-center text-xl shadow-lg shadow-pink-200">
              <HiSparkles />
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-900">
                {categories.length}+
              </h3>

              <p className="text-xs font-semibold text-gray-400">
                Prompt Collections
              </p>
            </div>

          </div>

        </div>

        {/* SEARCH */}
        <div className="bg-white rounded-[30px] border border-gray-100 shadow-sm p-2 flex items-center">

          <span className="pl-4 text-gray-400 text-[24px]">
            <IoSearchOutline />
          </span>

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search prompts, tools, tags, styles..."
            className="w-full px-3 bg-transparent outline-none text-sm font-medium placeholder:text-gray-300"
          />

          <button className="bg-gradient-to-r from-pink-500 to-[#FF2A85] text-white px-5 h-11 rounded-2xl text-sm font-bold shadow-lg shadow-pink-200 hover:scale-[1.02] transition">
            Search
          </button>

        </div>

        {/* FILTER TAGS */}
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2">

          {allTags.map((tag, idx) => {

            const active =
              selectedTag === tag;

            return (
              <button
                key={idx}
                onClick={() =>
                  setSelectedTag(tag)
                }
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold border transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-r from-pink-500 to-[#FF2A85] text-white border-transparent shadow-lg shadow-pink-200"
                    : "bg-white border-gray-100 text-gray-500 hover:border-pink-200 hover:text-[#FF2A85]"
                }`}
              >
                #{tag}
              </button>
            );
          })}

        </div>

        {/* RESULTS */}
        {filteredCategories.length === 0 ? (

          <div className="bg-white border border-dashed border-pink-200 rounded-[30px] py-20 flex flex-col items-center justify-center text-center">

            <div className="text-6xl mb-4">
              🔍
            </div>

            <h3 className="text-2xl font-black text-slate-900">
              No prompts found
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              Try searching with different keywords or tags.
            </p>

          </div>

        ) : (

          <div className="space-y-10">

            {/* NEW */}
            <CategoryRow
              title="New Prompts"
              subtitle="Fresh AI prompts added today"
              icon="✨"
              slug="new"
              data={filteredCategories.filter(
                (item) =>
                  item.badge === "New"
              )}
            />

            {/* TRENDING */}
            <CategoryRow
              title="Trending"
              subtitle="Most viral prompts today"
              icon="🔥"
              slug="trending"
              data={filteredCategories.filter(
                (item) =>
                  item.badge === "Trending"
              )}
            />

            {/* POPULAR */}
            <CategoryRow
              title="Popular Collections"
              subtitle="Most copied categories"
              icon="⭐"
              slug="popular"
              data={filteredCategories.filter(
                (item) =>
                  item.badge === "Popular"
              )}
            />

            {/* HOT */}
            <CategoryRow
              title="Hot Right Now"
              subtitle="Top performing prompts"
              icon="🚀"
              slug="hot"
              data={filteredCategories.filter(
                (item) =>
                  item.badge === "Hot"
              )}
            />

          </div>

        )}

      </main>

    </div>
  );
}