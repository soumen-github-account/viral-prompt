// import PromptCard from "@/app/components/common/PromptCard";
// import { categories } from "@/data/promptCards";

// export function generateStaticParams() {
//   return [
//     { slug: "trending" },
//     { slug: "new" },
//     { slug: "popular" },
//     { slug: "hot" },
//   ];
// }

// export default async function CategoryPage({ params }) {

//   const { slug } = await params;

//   const filteredData = categories.filter(
//     (item) =>
//       item.badge.toLowerCase() === slug
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

//         {filteredData.map((card, idx) => (
//           <PromptCard
//             key={idx}
//             card={card}
//           />
//         ))}

//       </div>

//     </div>
//   );
// }


import PromptCard from "@/app/components/common/PromptCard";
import connectDB from "@/app/lib/mongodb";
import Category from "@/app/models/Category";


// static params
export async function generateStaticParams() {

  return [
    { slug: "trending" },
    { slug: "new" },
    { slug: "popular" },
    { slug: "hot" },
  ];
}


export default async function CategoryPage({
  params,
}) {

  await connectDB();

  const { slug } =
    await params;

  // filter categories by badge
  const filteredData =
    await Category.find({
      badge: {
        $regex: new RegExp(
          `^${slug}$`,
          "i"
        ),
      },
    });

  return (
    <div className="min-h-screen bg-[#FAFBFD] pt-28 px-4 sm:px-10">

      {/* Header */}
      <div className="mb-10">

        <h1 className="text-4xl font-black tracking-tight text-slate-900 capitalize">
          {slug} Prompts
        </h1>

        <p className="text-sm text-gray-400 mt-2">
          Explore all {slug} AI prompt collections.
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {filteredData.map((card) => (
          <PromptCard
            key={card._id}
            card={card}
          />
        ))}

      </div>

    </div>
  );
}