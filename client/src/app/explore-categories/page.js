import AllCategory from "../components/categoryComponent/AllCategory";

export const metadata = {
  title: "Explore AI Photo Prompt Categories | ViralPrompt",

  description:
    "Browse all AI photo prompt categories including boys, girls, couples, cinematic portraits, anime, realistic photography, fashion, Midjourney prompts and trending AI image generation styles.",

  keywords: [
    "AI photo prompt categories",
    "AI prompts",
    "viral AI prompts",
    "boys AI prompts",
    "girls AI prompts",
    "couple AI prompts",
    "anime prompts",
    "cinematic prompts",
    "Midjourney prompts",
    "AI image generation",
    "fashion photography prompts",
    "realistic AI prompts",
    "viral photo prompts"
  ],

  alternates: {
    canonical: "https://viralphotoprompt.com/explore-categories",
  },

  openGraph: {
    title: "Explore AI Photo Prompt Categories",
    description:
      "Discover trending AI photo prompt categories for Midjourney, ChatGPT, Gemini and AI image generators.",
    url: "https://viralphotoprompt.com/explore-categories",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ViralPrompt Categories",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ExploreAllCategories() {
  return (
    <div>
      <AllCategory />
    </div>
  );
}