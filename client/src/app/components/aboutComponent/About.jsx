import React from 'react';

export default function About() {
  const stats = [
    { value: '20K+', label: 'Verified AI Prompts', icon: '✨' },
    { value: '1.2M', label: 'Successful Copies', icon: '📋' },
    { value: '15K+', label: 'Global Creators', icon: '🌍' },
    { value: '99.9%', label: 'Generation Success', icon: '⚡' }
  ];

  const values = [
    {
      title: 'Creativity First',
      desc: 'We believe AI is a tool that enhances human imagination, not replaces it. We build for the dreamers.',
      icon: '🎨',
      bg: 'bg-pink-50 text-[#FF2A85]'
    },
    {
      title: 'Pure Quality',
      desc: 'Every prompt listed goes through optimization filters to ensure you get exactly what you preview.',
      icon: '💎',
      bg: 'bg-rose-50 text-rose-500'
    },
    {
      title: 'Open Community',
      desc: 'Sharing knowledge is power. We keep our core ecosystem open so creators can learn from each other.',
      icon: '🤝',
      bg: 'bg-purple-50 text-purple-500'
    }
  ];

  const team = [
    {
      name: 'Soumen Das',
      role: 'Founder & Full-Stack Developer',
      image: '/images/soumen.png'
    },
    // {
    //   name: 'Nisha Patel',
    //   role: 'Lead UI/UX Designer',
    //   image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    // },
    // {
    //   name: 'Rohan Verma',
    //   role: 'Full-Stack Developer',
    //   image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    // }
  ];

  return (
    <div className="min-h-screen pt-15 bg-[#FFF5F7] text-slate-900 selection:bg-pink-100 overflow-x-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-300/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* --- HERO HEADER SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center relative z-10 space-y-6">
        <span className="inline-flex items-center bg-white border border-pink-100 rounded-full px-4 py-1.5 text-xs font-bold text-[#FF2A85] shadow-sm">
          ✨ Behind the Prompts
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-none max-w-4xl mx-auto">
          We are bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF416C] to-[#FF2A85]">Imagination & Reality</span>
        </h1>
        <p className="text-gray-400 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Promptly was founded in 2026 to help digital artists, developers, and creators bypass prompt engineering struggles and unlock instant visual art.
        </p>
      </section>

      {/* --- BIG STORY & VISION BANNER --- */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="bg-white rounded-[32px] shadow-xl shadow-pink-100/30 border border-gray-100/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Text block */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Mission: Empowering <span className="text-[#FF2A85]">10 Million</span> Creators
            </h2>
            <div className="space-y-4 text-gray-500 font-medium text-sm leading-relaxed">
              <p>
                Writing the perfect prompt shouldn't take hours of trial and error. Whether you use Midjourney, DALL-E, or Stable Diffusion, our platform simplifies generation by serving optimized prompt blueprints instantly.
              </p>
              <p>
                We curate templates created by elite AI prompts engineers worldwide, validating aspect ratios, parameters, and style modifiers so your tokens are never wasted on bad results.
              </p>
            </div>
            
            {/* CTA inline inside About */}
            <div className="pt-2">
              <button className="bg-gradient-to-r from-[#FF416C] to-[#FF2A85] hover:opacity-95 text-white px-6 py-3.5 rounded-xl text-xs font-bold shadow-md shadow-pink-200 transition">
                Explore Our Ecosystem →
              </button>
            </div>
          </div>

          {/* Graphics Display block */}
          <div className="lg:col-span-5 h-[350px] lg:h-full min-h-[400px] relative bg-slate-900">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
              alt="AI Vision Art" 
              className="w-full h-full object-cover opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white space-y-1">
              <p className="text-xs font-bold tracking-wider uppercase opacity-75">Generated using Promptly</p>
              <p className="font-extrabold text-lg">“Hyper-detailed abstract canvas artwork”</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- NUMBERS / STATISTICS BOARD --- */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-[24px] p-6 border border-gray-100/60 shadow-sm text-center space-y-2">
              <div className="text-2xl">{stat.icon}</div>
              <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">{stat.value}</h3>
              <p className="text-gray-400 font-bold text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CORE VALUES PILLARS --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">The Values We Stand By</h2>
          <p className="text-gray-400 text-sm font-medium">How we maintain standard curation grids across the platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <div key={idx} className="bg-white rounded-[28px] p-8 border border-gray-100/60 shadow-sm space-y-4 hover:shadow-md transition duration-300">
              <div className={`w-12 h-12 rounded-2xl ${v.bg} flex items-center justify-center text-xl font-bold`}>
                {v.icon}
              </div>
              <h4 className="font-extrabold text-lg text-slate-800 tracking-tight">{v.title}</h4>
              <p className="text-gray-400 font-medium text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 pb-28 relative z-10 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Meet the Masters</h2>
          <p className="text-gray-400 text-sm font-medium">The engineers and creatives keeping the loops clean.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-[24px] p-3 border border-gray-100/60 shadow-sm text-center group cursor-pointer hover:shadow-md transition">
              <div className="h-64 rounded-[18px] overflow-hidden bg-gray-50 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="pt-4 pb-2">
                <h4 className="font-extrabold text-sm text-slate-800 tracking-tight">{member.name}</h4>
                <p className="text-[11px] font-bold text-[#FF2A85] mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}