import React from 'react'
import About from '../components/aboutComponent/About'


export const metadata = {
  title: "About ViralPrompt | Trending AI Photo Prompts for Boys, Girls & Couples",

  description:
    "Learn about ViralPrompt, the ultimate destination for trending AI photo prompts. Explore viral prompts for boys, girls, couples, cinematic portraits, fashion photography, Instagram content, Midjourney, ChatGPT, Gemini, Bing Image Creator and advanced AI image generation.",

  keywords: [
    "ViralPrompt",
    "AI photo prompts",
    "viral AI prompts",
    "AI image prompts",
    "boys AI prompts",
    "girls AI prompts",
    "couple AI prompts",
    "Instagram AI prompts",
    "cinematic AI prompts",
    "Midjourney prompts",
    "ChatGPT prompts",
    "Gemini prompts",
    "Bing Image Creator prompts",
    "AI photography prompts",
    "fashion photography prompts",
    "realistic AI prompts",
    "viral photo prompts"
  ],

  openGraph: {
    title:
      "About ViralPrompt | Discover Viral AI Photo Prompts",
    description:
      "Explore thousands of trending AI photo prompts for boys, girls, couples, cinematic portraits and AI image generation.",
    url: "https://viralphotoprompt.com/about",
    siteName: "ViralPrompt",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 96,
        height: 96,
        alt: "ViralPrompt"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "About ViralPrompt",
    description:
      "Discover trending AI photo prompts for Midjourney, ChatGPT, Gemini and AI image generators.",
    images: ["/og-image.jpg"]
  },

  robots: {
    index: true,
    follow: true
  },

  alternates: {
    canonical: "https://viralphotoprompt.com/about"
  }
};

const AboutUsPage = () => {
  return (
    <div>
      <About />
    </div>
  )
}

export default AboutUsPage
