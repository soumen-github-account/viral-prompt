import Image from "next/image";
import Hero from "./components/HomeComponent/Hero";
import TopTrandingPrompt from "./components/HomeComponent/TopTrandingPrompt";

export default function Home() {
  return (
    <>
      <Hero />
      <TopTrandingPrompt />
    </>
  );
}
