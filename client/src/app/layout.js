import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "./components/common/NavbarWrapper";
import FooterWrapper from "./components/common/FooterWrapper";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "@/contexts/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://viralprompt.com"),

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
    "viral photo prompt",
    "viral prompt",
    "ai prompt",
    "AI prompts",
    "viral AI prompts",
    "AI photo prompts",
    "boys AI prompts",
    "girls AI prompts",
    "couple AI prompts",
    "cinematic photo prompts",
    "Instagram AI prompts",
    "viral prompt",
    "image generation prompts",
    "ChatGPT prompts",
    "AI photography prompts",
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
    url: "https://viralprompt.com",
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppContextProvider>
          <NavbarWrapper />
            {children}
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
          <FooterWrapper />
        </AppContextProvider>
      </body>

    </html>
  );
}
