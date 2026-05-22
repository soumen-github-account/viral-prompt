
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF5F7] text-slate-900 flex flex-col justify-between selection:bg-pink-100 relative overflow-hidden">
      
      {/* Background Abstract Glow Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-300/20 to-purple-300/10 rounded-full blur-3xl pointer-events-none z-0" />
      
      {/* Empty Top Space to align layout center perfectly */}
      <div className="h-16" />

      {/* --- MAIN CENTER CONTENT --- */}
      <main className="max-w-xl mx-auto px-6 text-center space-y-8 relative z-10 my-auto">
        
        {/* Giant Glitchy Look 404 Header Graphic */}
        <div className="relative inline-block select-none animate-pulse">
          <h1 className="text-[150px] sm:text-[180px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#FF416C] via-[#FF2A85] to-purple-600 drop-shadow-sm">
            404
          </h1>
          {/* Absolute Sparkling badge asset over the numbers */}
          <div className="absolute -top-2 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-md border border-pink-100 animate-bounce">
            🔍
          </div>
        </div>

      </main>

      {/* --- FOOTER TRIVIA LINE --- */}
      <footer className="w-full text-center py-6 text-[11px] font-bold text-gray-400 relative z-10 border-t border-pink-50/40 bg-white/40 backdrop-blur-xs">
        <p>Fun Fact: Good prompts can solve 404 errors, but this link is permanently gone! 🤖</p>
      </footer>

    </div>
  )
}

export default NotFoundPage
