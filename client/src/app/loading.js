"use client"
import React, { useState, useEffect } from 'react';

export default function LoadingPage() {
  const [loadingText, setLoadingText] = useState('Initializing latent space...');

  // Fun, dynamic AI phrases to rotate during loading states
  useEffect(() => {
    const phrases = [
      'Initializing latent space...',
      'Optimizing prompt modifiers...',
      'Parsing aspect ratios...',
      'Curation grids rendering...',
      'Fetching viral art frameworks...',
      'Generating high-res preview states...'
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % phrases.length;
      setLoadingText(phrases[index]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex flex-col items-center justify-center selection:bg-pink-100 relative overflow-hidden">
      
      {/* Injecting smooth spin custom animation triggers safely */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.1); opacity: 0.25; }
        }
        .animate-pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient Pulsing Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#FF2A85] rounded-full blur-[140px] animate-pulse-glow pointer-events-none" />

      {/* --- CENTRAL CORE CONTAINER --- */}
      <div className="relative flex flex-col items-center space-y-8 z-10 text-center px-6">
        
        {/* Dynamic Logo + Loading Spinner Wrapper Element */}
        <div className="relative flex items-center justify-center w-28 h-28">
          
          {/* Outermost Infinite Ring Neon Stroke */}
          <div className="absolute inset-0 rounded-full border-4 border-t-[#FF2A85] border-r-[#FF416C] border-b-pink-100 border-l-pink-100 animate-spin" style={{ animationDuration: '0.8s' }} />
          
          {/* Middle Counter-Rotating Pulse Ring Layer */}
          <div className="absolute w-20 h-20 rounded-full border-2 border-b-purple-500 border-t-transparent border-l-transparent border-r-transparent animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
          
          {/* Central Logo Core Emblem Icon */}
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-pink-100 animate-bounce">
            <span className="text-[#FF2A85] text-2xl font-black">✦</span>
          </div>
        </div>

        {/* Text Messaging Loading Blocks Layout */}
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center">
            Prompt<span className="text-[#FF2A85]">ly</span>
            <span className="inline-flex gap-0.5 ml-1.5">
              <span className="w-1 h-1 bg-[#FF2A85] rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <span className="w-1 h-1 bg-[#FF2A85] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <span className="w-1 h-1 bg-[#FF2A85] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </span>
          </h2>
          
          {/* Smooth Changing Dynamic Phrase Subtitles */}
          <div className="h-5">
            <p className="text-gray-400 font-bold text-xs tracking-wide transition-all duration-300 animate-pulse">
              {loadingText}
            </p>
          </div>
        </div>

        {/* Clean Line Progress Bar Mockup */}
        <div className="w-48 h-1 bg-white border border-pink-100/40 rounded-full overflow-hidden shadow-inner relative">
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF416C] to-[#FF2A85] rounded-full animate-infinite-loading w-1/2" 
               style={{
                 animation: 'runningLoad 2s cubic-bezier(0.4, 0, 0.2, 1) infinite'
               }} 
          />
          <style>{`
            @keyframes runningLoad {
              0% { left: -50%; width: 30%; }
              50% { width: 40%; }
              100% { left: 110%; width: 20%; }
            }
          `}</style>
        </div>

      </div>

      {/* --- SUBTLE BRAND IDENTITY SYSTEM FOOTER --- */}
      <div className="absolute bottom-8 text-[11px] font-bold text-gray-400 tracking-wider uppercase select-none opacity-60">
        Secure AI Token Workspace 🔒
      </div>

    </div>
  );
}