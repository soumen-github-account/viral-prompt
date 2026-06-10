import { Prompt } from "next/font/google";
import connectDB from "./lib/mongodb";

export default async function sitemap() {
  await connectDB();

  const prompts = await Prompt.find({})
    .select("slug updatedAt")
    .lean();

  const promptUrls = prompts.map((prompt) => ({
    url: `https://viralprompt.soumendas.space/prompts/${prompt.categorySlug}`,
    lastModified: prompt.updatedAt,
    priority: 0.8,
  }));

  const categories = [
    "trending",
    "new",
    "boys",
    "girls",
    "couple",
  ];

  const categoryUrls = categories.map((category) => ({
    url: `https://viralprompt.soumendas.space/category/${category}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [
    {
      url: "https://viralprompt.soumendas.space",
      lastModified: new Date(),
      priority: 1,
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

    ...categoryUrls,
    ...promptUrls,
  ];
}