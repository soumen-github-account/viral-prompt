
// import PromptCard from "@/app/components/common/PromptCard";
// import connectDB from "@/app/lib/mongodb";
// import Category from "@/app/models/Category";


// // static params
// export async function generateStaticParams() {

//   return [
//     { slug: "trending" },
//     { slug: "new" },
//     { slug: "popular" },
//     { slug: "hot" },
//     { slug: "boys" },
//     { slug: "girls" },
//     { slug: "couple" },
//   ];
// }


// export default async function CategoryPage({
//   params,
// }) {

//   await connectDB();

//   const { slug } = await params;

//   // filter categories by badge
//   const filteredData =
//     await Category.find({
//       badge: {
//         $regex: new RegExp(
//           `^${slug}$`,
//           "i"
//         ),
//       },
//     },
//     {
//       tags: {
//         $in: [
//           new RegExp(
//             `^${slug}$`,
//             "i"
//           ),
//         ],
//       },
//     },
//   );

//   return (
//     <div className="min-h-screen bg-[#FAFBFD] pt-28 px-4 sm:px-10">

//       {/* Header */}
//       <div className="mb-10">

//         <h1 className="text-4xl font-black tracking-tight text-slate-900 capitalize">
//           {slug} Prompts
//         </h1>

//         <p className="text-sm text-gray-400 mt-2">
//           Explore all {slug} AI prompt collections.
//         </p>

//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

//         {filteredData.map((card) => (
//           <PromptCard
//             key={card._id}
//             card={card}
//           />
//         ))}

//       </div>

//     </div>
//   );
// }

// app/category/[slug]/page.jsx

import PromptCard from "@/app/components/common/PromptCard";

import connectDB from "@/app/lib/mongodb";

import Category from "@/app/models/Category";


// STATIC PARAMS
export async function generateStaticParams() {

  return [

    { slug: "trending" },
    { slug: "new" },
    { slug: "popular" },
    { slug: "hot" },

    { slug: "boys" },
    { slug: "girls" },
    { slug: "couple" },

  ];
}

export default async function CategoryPage({
  params,
}) {

  await connectDB();

  const { slug } =
    await params;

  // FILTER DATA
  const filteredData =
    await Category.find({

      $or: [

        // BADGE
        {
          badge: {
            $regex: new RegExp(
              `^${slug}$`,
              "i"
            ),
          },
        },

        // TAGS
        {
          tags: {
            $in: [
              new RegExp(
                `^${slug}$`,
                "i"
              ),
            ],
          },
        },

        // TOOL
        {
          tool: {
            $regex: new RegExp(
              `^${slug}$`,
              "i"
            ),
          },
        },

      ],

    });

  return (

    <div className="min-h-screen bg-[#FAFBFD] pt-28 px-4 sm:px-10">

      {/* HEADER */}
      <div className="mb-10">

        <h1 className="text-4xl font-black tracking-tight text-slate-900 capitalize">

          {slug} Prompts

        </h1>

        <p className="text-sm text-gray-400 mt-2">

          Explore all {slug} AI prompt collections.

        </p>

      </div>

      {/* EMPTY */}
      {filteredData.length === 0 ? (

        <div className="bg-white rounded-3xl border border-dashed border-pink-200 py-20 text-center">

          <div className="text-6xl mb-4">
            🔍
          </div>

          <h2 className="text-2xl font-black text-slate-900">
            No prompts found
          </h2>

          <p className="text-gray-400 text-sm mt-2">

            No prompt collection available for "{slug}"

          </p>

        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

          {filteredData.map((card) => (

            <PromptCard
              key={card._id}
              card={card}
            />

          ))}

        </div>

      )}

    </div>

  );
}