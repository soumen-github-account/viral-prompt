
import PromptCard from "@/app/components/common/PromptCard";

import connectDB from "@/app/lib/mongodb";
import Category from "@/app/models/Category";


export async function generateMetadata({ params }) {
  const { slug } = await params;

  const titleSlug = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${titleSlug} AI Photo Prompts | ViralPrompt`,

    description: `Explore the best ${titleSlug} AI photo prompts. Discover trending and viral prompts for Midjourney, ChatGPT, Gemini, cinematic photography, realistic portraits, boys, girls and couples.`,

    keywords: [
      `${titleSlug} prompts`,
      `${titleSlug} AI prompts`,
      `${titleSlug} photo prompts`,
      "AI photo prompts",
      "viral AI prompts",
      "Midjourney prompts",
      "ChatGPT prompts",
      "AI image generation",
      "viral photo prompts",
      "cinematic AI prompts",
    ],

    alternates: {
      canonical: `https://viralphotoprompt.com/category/${slug}`,
    },

    openGraph: {
      title: `${titleSlug} AI Photo Prompts`,
      description: `Discover trending ${titleSlug} AI photo prompts and viral image generation ideas.`,
      url: `https://viralphotoprompt.com/category/${slug}`,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${titleSlug} AI Prompts`,
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CategoryPage({
  params,
}) {

  await connectDB();

  const { slug } = await params;

  const filteredData =
    await Category.find({

      $or: [

        {
          badge: {
            $regex: new RegExp(
              `^${slug}$`,
              "i"
            ),
          },
        },

        {
          tags: {
            $elemMatch: {
              $regex: new RegExp(
                `^${slug}$`,
                "i"
              ),
            },
          },
        },

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

        {/* <h1 className="text-4xl font-black tracking-tight text-slate-900 capitalize">

          {slug} Prompts

        </h1> */}
        <h1 className="text-4xl font-black tracking-tight text-slate-900 capitalize">
          Best {slug.replace(/-/g, " ")} AI Photo Prompts
        </h1>

        {/* <p className="text-sm text-gray-400 mt-2">

          Explore all {slug} AI prompt collections.

        </p> */}
        <p className="text-base text-gray-500 mt-3 max-w-3xl">
          Explore trending {slug.replace(/-/g, " ")} AI photo prompts for
          Midjourney, ChatGPT, Gemini and AI image generators. Discover
          viral, cinematic, realistic and high-quality prompts used by
          creators worldwide.
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

        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

          {filteredData.map((card) => (

            <PromptCard
              key={card._id}
              card={card}
            />

          ))}

          <div className="max-w-5xl mx-auto mt-20 bg-white rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4 capitalize">
              What are {slug.replace(/-/g, " ")} AI Photo Prompts?
            </h2>

            <p className="text-gray-600 leading-8">
              {slug.replace(/-/g, " ")} AI photo prompts help creators generate
              stunning AI images using tools like Midjourney, ChatGPT, Gemini,
              Bing Image Creator and other AI image generation platforms.
              Browse our collection of trending prompts to create realistic,
              cinematic and viral photos.
            </p>
          </div>

        </div>

      )}

    </div>

  );
}