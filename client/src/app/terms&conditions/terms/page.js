
import React from 'react';
import { LuScale, LuShieldAlert, LuFileText, LuUserX, LuCircleAlert } from 'react-icons/lu';

export default function TermsPage() {
  const lastUpdated = "May 22, 2026";

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: <LuFileText className="text-pink-500 text-lg shrink-0 mt-0.5" />,
      content: "By accessing or using ViralPrompt, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, you must not access or use our platform, APIs, or prompt frameworks."
    },
    {
      id: "intellectual-property",
      title: "2. AI Prompts & Intellectual Property",
      icon: <LuScale className="text-pink-500 text-lg shrink-0 mt-0.5" />,
      content: "When you buy or copy a prompt from ViralPrompt, you are granted a non-exclusive, worldwide, perpetual license to use that prompt to generate AI assets (images, text, or code) for both personal and commercial projects. However, re-selling, bundling, or redistributing the raw text prompts directly on competing marketplaces is strictly prohibited."
    },
    {
      id: "user-conduct",
      title: "3. Prohibited User Conduct",
      icon: <LuUserX className="text-pink-500 text-lg shrink-0 mt-0.5" />,
      content: "Users are strictly prohibited from utilizing our platform to generate, copy, or distribute prompts that promote hate speech, illegal acts, or infringement of copyrighted third-party media franchises. Any attempt to reverse-engineer, scrape, or exploit our web application via automated bots will result in immediate termination of your API tokens and premium account."
    },
    {
      id: "liability",
      title: "4. Limitation of Liability & AI Outputs",
      icon: <LuShieldAlert className="text-pink-500 text-lg shrink-0 mt-0.5" />,
      content: "ViralPrompt acts as a curation index for AI modifiers. We do not guarantee that every prompt will yield identical results across third-party models (such as Midjourney, DALL-E, or Stable Diffusion) due to dynamic API algorithm updates on their respective ends. We are not liable for any generated variations, server downtimes, or system-level processing anomalies."
    },
    {
      id: "support",
      title: "5. Termination & Support Queries",
      icon: <LuCircleAlert className="text-pink-500 text-lg shrink-0 mt-0.5" />,
      content: "We reserve the right to suspend accounts or purge generated metadata that violates our core ecosystem parameters without prior warnings. If you have any questions regarding usage licensing, data deletion, or compliance enforcement, feel free to contact our support channels."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF5F7] text-slate-900 selection:bg-pink-100 relative overflow-hidden pt-24 pb-16">
      
      {/* Aesthetic Background Ambient Blur Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-purple-200/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER STAMP --- */}
        <div className="text-center md:text-left space-y-3 pb-10 border-b border-pink-100/60">
          <span className="inline-flex items-center bg-white border border-pink-200 rounded-full px-3 py-1 text-[11px] font-extrabold text-[#FF2A85] tracking-wide uppercase shadow-2xs">
            Legal Framework
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Terms of <span className="text-[#FF2A85]">Service</span>
          </h1>
          <p className="text-gray-400 font-bold text-xs">
            Last modified and effective: <span className="text-slate-700">{lastUpdated}</span>
          </p>
        </div>

        {/* --- MAIN GRID LAYOUT CONTROLLER --- */}
        <div className="grid grid-cols-1 gap-10 mt-12 items-start">
          
          {/* Left Column: Quick Navigation Table of Contents Index Card */}
          <aside className="lg:col-span-4 bg-white/80 backdrop-blur-xl border border-gray-100 p-6 rounded-[24px] shadow-sm space-y-4 sticky top-24 hidden lg:block">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-800">
              Policy Chapters
            </h4>
            <nav className="flex flex-col space-y-2.5 text-xs font-bold text-gray-400">
              {sections.map((sec) => (
                <a 
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="hover:text-[#FF2A85] transition-colors py-1 pl-1 border-l-2 border-transparent hover:border-[#FF2A85]"
                >
                  {sec.title}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-gray-50 text-[10px] text-gray-400 font-medium leading-relaxed">
              Have legal issues? Email us directly at <span className="text-[#FF2A85] font-bold">legal@viralprompt.com</span>
            </div>
          </aside>

          {/* Right Column: Deep Detailed Paragraph blocks */}
          <main className="lg:col-span-8 bg-white border border-gray-100 rounded-[32px] p-6 md:p-10 shadow-sm space-y-8">
            
            {/* Introductory statement box */}
            <div className="bg-pink-50/30 border border-pink-100/40 p-5 rounded-2xl">
              <p className="text-xs font-bold text-slate-700 leading-relaxed">
                Welcome to ViralPrompt. These rules manage your active interaction and continuous relationship with our hosting ecosystem. Please audit this documentation carefully to maintain your profile's compliance state.
              </p>
            </div>

            {/* Loop rendering dynamic legal nodes */}
            <div className="space-y-8">
              {sections.map((sec) => (
                <div 
                  key={sec.id} 
                  id={sec.id} 
                  className="scroll-mt-28 group space-y-3 border-b border-gray-50 pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex items-start space-x-2">
                    {sec.icon}
                    <h2 className="text-lg font-extrabold text-slate-800 tracking-tight group-hover:text-[#FF2A85] transition-colors">
                      {sec.title}
                    </h2>
                  </div>
                  <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed pl-6">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Platform disclaimer disclaimer bottom box */}
            <div className="pt-4 text-[10px] font-bold text-gray-400 border-t border-gray-50">
              © 2026 ViralPrompt Inc. Any modification rules without prior warning notice parameters are managed strictly under legal jurisdiction constraints.
            </div>

          </main>

        </div>

      </div>
    </div>
  );
}