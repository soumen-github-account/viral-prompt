import Image from "next/image";
import Hero from "./components/HomeComponent/Hero";
import TopTrandingPrompt from "./components/HomeComponent/TopTrandingPrompt";

export const metadata = {
  title: "Viral AI Photo Prompts for Boys, Girls & Couples",
  description:
    "Discover trending and viral AI photo prompts for boys, girls, couples, Instagram photos, cinematic portraits, fashion photography and AI image generation.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TopTrandingPrompt />
    </>
  );
}
