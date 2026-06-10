
import PromptMainCard from "@/app/components/common/PromptMainCard";

import connectDB from "@/app/lib/mongodb";

import Category from "@/app/models/Category";
import Prompt from "@/app/models/Prompt";

export async function generateMetadata({ params }) {
  await connectDB();

  const { slug } = await params;

  const category = await Category.findOne({ slug });

  if (!category) {
    return {
      title: "Category Not Found | ViralPrompt",
    };
  }

  return {
    title: `${category.title} AI Photo Prompts | ViralPrompt`,

    description:
      category.description ||
      `Explore the best ${category.title} AI photo prompts. Discover trending, viral, cinematic and realistic prompts for Midjourney, ChatGPT, Gemini and AI image generators.`,

    keywords: [
      `${category.title} AI prompts`,
      `${category.title} photo prompts`,
      `${category.title} prompts`,
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
      canonical: `https://viralprompt.soumendas.space/prompts/${slug}`,
    },

    openGraph: {
      title: `${category.title} AI Photo Prompts`,
      description:
        category.description,
      url: `https://viralprompt.soumendas.space/prompts/${slug}`,
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: category.title,
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PromptsPage({
  params,
}) {

  await connectDB();

  const { slug } =
    await params;

  // CATEGORY
  const category =
    await Category.findOne({
      slug,
    });

  // NOT FOUND
  if (!category) {

    return (

      <div className="pt-40 text-center text-xl font-bold">

        Category not found

      </div>

    );
  }

  // PROMPTS
  const filteredPrompts =
    await Prompt.find({
      categorySlug: slug,
    });

  return (

    <div className="min-h-screen bg-[#FAFBFD] pt-28 px-4 sm:px-10">

      {/* HERO */}
      <div className="relative overflow-hidden rounded-[40px] mb-12">

        <img
          src={category.image}
          alt={category.title}
          className="w-full h-[320px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 p-8 lg:p-10 text-white">

          <span
            className={`text-[11px] font-bold px-3 py-1 rounded-full ${category.badgeBg}`}
          >

            {category.badge}

          </span>

          <h1 className="text-4xl lg:text-6xl font-black tracking-tight mt-4">
            {category.title} AI Photo Prompts
          </h1>

          <p className="text-sm text-white/80 max-w-3xl mt-3 leading-relaxed">
            {category.description} Browse trending AI photo prompts,
            cinematic portraits, realistic photography styles and viral
            image generation ideas optimized for Midjourney, ChatGPT,
            Gemini and other AI tools.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">

            {category.tags?.map((tag) => (

              <span
                key={tag}
                className="bg-white/10 border border-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold"
              >

                #{tag}

              </span>

            ))}

          </div>

        </div>

      </div>

      {/* PROMPTS */}
      <div className="space-y-8">

        {filteredPrompts.map((card) => (

          <PromptMainCard
            key={card._id}
            card={card}
          />

        ))}

      </div>

      <section className="bg-white rounded-3xl p-8 mt-16">
        <h2 className="text-3xl font-bold mb-4">
          About {category.title} AI Photo Prompts
        </h2>

        <p className="text-gray-600 leading-8">
          {category.title} AI photo prompts help creators generate
          professional images using Midjourney, ChatGPT, Gemini,
          Bing Image Creator and other AI image generation tools.
          Browse our collection of trending and viral prompts to
          create realistic, cinematic and social media ready photos.
        </p>
      </section>

    </div>

  );
}