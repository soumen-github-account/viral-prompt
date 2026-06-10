import connectDB from "./lib/mongodb";
import Category from "./models/Category";
import Prompt from "./models/Prompt";

export default async function sitemap() {
  await connectDB();

  const categories = await Category.find({})
    .select("slug updatedAt")
    .lean();

  const staticPages = [
    {
      url: "https://viralprompt.soumendas.space",
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: "https://viralprompt.soumendas.space/about",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://viralprompt.soumendas.space/explore-categories",
      lastModified: new Date(),
      priority: 0.7,
    },
  ];

  const categoryUrls = categories.map((category) => ({
    url: `https://viralprompt.soumendas.space/category/${category.slug}`,
    lastModified: category.updatedAt,
    priority: 0.8,
  }));

  const prompts = await Prompt.find({})
    .select("categorySlug updatedAt")
    .lean();

    const promptUrls = prompts
    .filter(
        (prompt) =>
        prompt.categorySlug &&
        prompt.categorySlug !== "undefined"
    )
    .map((prompt) => ({
        url: `https://viralprompt.soumendas.space/prompts/${prompt.categorySlug}`,
        lastModified: prompt.updatedAt,
        priority: 0.9,
    }));

  return [
    ...staticPages,
    ...categoryUrls,
    ...promptUrls,
  ];
}