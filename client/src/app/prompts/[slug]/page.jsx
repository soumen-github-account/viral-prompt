
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
      "viral AI prompts",
      "Midjourney prompts",
      "ChatGPT prompts",
      "Gemini prompts",
      "AI image generation",
      "cinematic prompts",
      "realistic prompts",
    ],

    alternates: {
      canonical: `https://viralphotoprompt.com/prompts/${slug}`,
    },

    openGraph: {
      title: `${category.title} AI Photo Prompts`,
      description:
        category.description,
      url: `https://viralphotoprompt.com/prompts/${slug}`,
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