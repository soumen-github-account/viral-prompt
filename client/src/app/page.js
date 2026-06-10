import Image from "next/image";
import Hero from "./components/HomeComponent/Hero";
import TopTrandingPrompt from "./components/HomeComponent/TopTrandingPrompt";

export const metadata = {
  metadataBase: new URL("https://viralprompt.soumendas.space/"),

  title: {
    default: "ViralPrompt - Viral AI Photo Prompts for Boys, Girls & Couples",
    template: "%s | ViralPrompt",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  description:
    "Discover viral AI photo prompts for boys, girls, couples, Instagram photos, cinematic portraits, fashion photography, AI image generation, ChatGPT and image creation tools.",

  keywords: [
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

  authors: [
    {
      name: "ViralPrompt",
    },
  ],

  creator: "ViralPrompt",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://viralprompt.soumendas.space/",
    siteName: "ViralPrompt",
    title: "ViralPrompt - Viral AI Photo Prompts",
    description:
      "Get trending and viral AI prompts for boys, girls, couples, cinematic portraits and social media content.",
    images: [
      {
        url: "/og-image.png",
        width: 96,
        height: 96,
        alt: "ViralPrompt",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ViralPrompt",
    description:
      "Discover trending AI prompts for boys, girls and couples.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TopTrandingPrompt />
    </>
  );
}
