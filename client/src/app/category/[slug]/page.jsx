
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
      "viral AI photo prompts",
      "trending AI photo prompts",
      "best AI photo prompts",
      "free AI photo prompts",
      "AI image prompts",
      "AI photography prompts",
      "AI portrait prompts",
      "AI photoshoot prompts",
      "viral image prompts",

      "ChatGPT image prompts",
      "ChatGPT photo prompts",
      "ChatGPT AI photo prompts",
      "ChatGPT portrait prompts",
      "ChatGPT photoshoot prompts",

      "Gemini image prompts",
      "Gemini photo prompts",
      "Gemini AI prompts",

      "Midjourney prompts",
      "Midjourney photo prompts",
      "Midjourney portrait prompts",

      "Bing Image Creator prompts",
      "Microsoft Designer prompts",

      "Instagram AI photo prompts",
      "viral Instagram photo prompts",
      "Instagram profile photo prompts",
      "Instagram DP prompts",
      "Instagram reel photo prompts",
      "Instagram aesthetic photo prompts",

      "cinematic photo prompts",
      "cinematic portrait prompts",
      "cinematic AI photography",
      "movie style photo prompts",
      "Bollywood style photo prompts",
      "Hollywood style photo prompts",
      "Netflix style portrait prompts",

      "realistic AI photo prompts",
      "ultra realistic photo prompts",
      "hyper realistic photo prompts",
      "professional photoshoot prompts",
      "DSLR photo prompts",
      "4K portrait prompts",
      "8K portrait prompts",

      "boys AI photo prompts",
      "boys photoshoot prompts",
      "stylish boy photo prompts",
      "stylish boys AI prompts",
      "attitude boy photo prompts",
      "handsome boy AI prompts",
      "viral boy photo prompts",
      "trending boy photo prompts",
      "instagram boy photo prompts",
      "cool boy AI photo prompts",
      "smart boy photo prompts",
      "fashion boy photo prompts",
      "aesthetic boy photo prompts",
      "royal boy photo prompts",
      "luxury boy photo prompts",
      "rich boy photo prompts",
      "model boy AI prompts",
      "college boy photo prompts",
      "gym boy photo prompts",
      "street style boy prompts",
      "hoodie boy photo prompts",
      "mirror selfie boy prompts",
      "boys dp prompts",
      "boys profile picture prompts",
      "boys whatsapp dp prompts",
      "boys instagram dp prompts",
      "boys trending ai photo",
      "boys viral ai photo",
      "boys photoshoot ideas",
      "boys cinematic portrait prompts",
      "boys luxury lifestyle prompts",
      "boys attitude photoshoot prompts",

      "girls AI photo prompts",
      "girls photoshoot prompts",
      "beautiful girl photo prompts",
      "aesthetic girl prompts",
      "model girl AI prompts",
      "viral girl photo prompts",
      "trending girl photo prompts",
      "stylish girl photo prompts",
      "fashion girl AI prompts",
      "luxury girl photo prompts",
      "princess girl photo prompts",
      "instagram girl prompts",
      "girls dp prompts",
      "girls profile picture prompts",
      "girls cinematic portrait prompts",

      "couple AI photo prompts",
      "romantic couple prompts",
      "wedding couple prompts",
      "couple photoshoot prompts",
      "cute couple photo prompts",
      "cinematic couple prompts",
      "viral couple prompts",
      "instagram couple prompts",
      "pre wedding photo prompts",
      "luxury couple photoshoot prompts",

      "luxury lifestyle prompts",
      "fashion photography prompts",
      "street photography prompts",
      "travel photography prompts",
      "luxury photoshoot prompts",
      "royal lifestyle prompts",
      "rich aesthetic prompts",
      "old money photo prompts",
      "businessman portrait prompts",

      "AI prompt generator",
      "photo prompt generator",
      "image prompt generator",
      "best AI prompts for photos",
      "best image generation prompts",
      "trending AI prompts",
      "viral prompt collection",
      "prompt library",
      "prompt database",
      "prompt marketplace",

      "viral AI photo",
      "viral AI image",
      "trending AI image",
      "viral AI portrait",
      "AI profile picture prompts",
      "AI DP prompts",
      "AI avatar prompts",
      "AI selfie prompts",
      "AI influencer photo prompts",
      "AI model photography prompts",

      "2026 trending AI photo prompts",
      "latest AI photo prompts",
      "new viral AI prompts",
      "best AI prompts 2026",
      "top trending photo prompts",
      "most searched AI prompts",
      "viral portrait prompts",
      "professional headshot prompts",
      "linkedin profile photo prompts",
      "passport style AI prompts"
    ],

    alternates: {
      canonical: `https://viralprompt.soumendas.space/category/${slug}`,
    },

    openGraph: {
      title: `${titleSlug} AI Photo Prompts`,
      description: `Discover trending ${titleSlug} AI photo prompts and viral image generation ideas.`,
      url: `https://viralprompt.soumendas.space/category/${slug}`,
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