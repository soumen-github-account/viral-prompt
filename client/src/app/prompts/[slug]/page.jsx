import PromptCard from "@/app/components/common/PromptCard";
import PromptMainCard from "@/app/components/common/PromptMainCard";
import { categories, prompts } from "@/data/promptCards";

export function generateStaticParams() {

  return categories.map((item) => ({
    slug: item.slug,
  }));

}

export default async function PromptsPage({
  params,
}) {

  const { slug } = await params;

  const category = categories.find(
    (item) => item.slug === slug
  );

  const filteredPrompts = prompts.filter(
    (item) => item.categorySlug === slug
  );

  if (!category) {
    return (
      <div className="pt-40 text-center text-xl font-bold">
        Category not found
      </div>
    );
  }

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

          <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${category.badgeBg}`}>
            {category.badge}
          </span>

          <h1 className="text-4xl lg:text-6xl font-black tracking-tight mt-4">
            {category.title}
          </h1>

          <p className="text-sm text-white/70 max-w-2xl mt-3 leading-relaxed">
            {category.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-5">

            {category.tags.map((tag) => (
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

      {/* PROMPTS GRID */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {filteredPrompts.map((card, idx) => (
          <PromptCard
            key={idx}
            card={card}
          />
        ))}

      </div> */}

        <div className="space-y-8">

  {filteredPrompts.map((card, idx) => (
    <PromptMainCard
      key={idx}
      card={card}
    />
  ))}

</div>
    </div>
  );
}