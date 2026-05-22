// "use client"
// import { UserRound } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React, { useState } from 'react'
// import { BsStars } from "react-icons/bs";
// import { IoMoon, IoSunny } from 'react-icons/io5';

// const Navbar = () => {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     const pathname = usePathname();

//     const navLinks = [
//         { name: "Home", path: "/" },
//         { name: "Trending", path: "/trending" },
//         { name: "Categories", path: "/explore-categories" },
//         { name: "About", path: "/about" },
//     ];

//   return (
//     <div className='fixed top-0 left-0 w-full z-50 px-4 pt-4'>
//       <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between rounded-3xl bg-white/70 backdrop-blur-xl border border-pink-100 shadow-lg shadow-pink-100/50">
//         <div className="flex items-center space-x-2 cursor-pointer">
//           <BsStars className='text-primary text-2xl' />
//           <span className="text-slate-900 font-extrabold text-2xl tracking-tight">
//             Viral<span className="text-primary">Prompt</span>
//           </span>
//         </div>

//         {/* <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-600">
//           <Link
//             href="/"
//             className="text-[#FF2A85] relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-[#FF2A85] after:rounded-full"
//           >
//             Home
//           </Link>
//           <Link href="/treanding" className="hover:text-gray-900 transition">
//             Trending
//           </Link>
//           <Link href="/categories" className="hover:text-gray-900 transition">
//             Categories
//           </Link>
//           <Link href="/about" className="hover:text-gray-900 transition">
//             About
//           </Link>
//         </nav> */}
//         <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">

//             {navLinks.map((link) => {

//                 const isActive = pathname === link.path;

//                 return (
//                 <Link
//                     key={link.path}
//                     href={link.path}
//                     className={`
//                     relative transition duration-300

//                     ${
//                         isActive
//                         ? "text-[#FF2A85]"
//                         : "text-gray-600 hover:text-gray-900"
//                     }

//                     after:content-['']
//                     after:absolute
//                     after:left-1/2
//                     after:-translate-x-1/2
//                     after:-bottom-2
//                     after:w-1.5
//                     after:h-1.5
//                     after:rounded-full
//                     after:bg-[#FF2A85]
//                     after:transition-all
//                     after:duration-300

//                     ${
//                         isActive
//                         ? "after:opacity-100 after:scale-100"
//                         : "after:opacity-0 after:scale-0"
//                     }
//                     `}
//                 >
//                     {link.name}
//                 </Link>
//                 );
//             })}

//         </nav>

//         <div className="flex items-center space-x-4">
//           {/* <button className="bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] hover:opacity-95 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-pink-200 flex items-center transition target-gradient">
//             <svg
//               className="w-4 h-4 mr-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2.5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//               />
//             </svg>
//             Submit a Prompt
//           </button> */}

//           <button
//             onClick={() => setIsDarkMode(!isDarkMode)}
//             className="bg-gray-200/80 p-1 rounded-full flex items-center cursor-pointer w-14 h-8 relative transition-colors duration-300"
//           >
//             <div
//               className={`bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center text-gray-700 absolute transition-all duration-300 ${isDarkMode ? "left-7" : "left-1"}`}
//             >
//               {isDarkMode ? <IoMoon /> : <IoSunny />}
//             </div>
//           </button>

//           <button className='bg-gray-100 rounded-full p-2 shadow-inset shadow-gray-400 border-2 border-gray-300 cursor-pointer hover:bg-pink-50'>
//             <UserRound className='text-gray-500' />
//           </button>
//         </div>
//       </header>
//     </div>
//   )
// }

// export default Navbar


"use client"
import { UserRound, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { BsStars } from "react-icons/bs";
import { IoMoon, IoSunny } from 'react-icons/io5';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathname = usePathname();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Trending", path: "/category/trending" },
        { name: "Categories", path: "/explore-categories" },
        { name: "About", path: "/about" },
    ];

  return (
    <div className='fixed top-0 left-0 w-full z-50 px-4 pt-4'>
      <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between rounded-3xl bg-white/70 backdrop-blur-xl border border-pink-100 shadow-lg shadow-pink-100/50">
        
        {/* Brand Logo Identity */}
        <div className="flex items-center space-x-2 cursor-pointer relative z-50">
          <BsStars className='text-primary text-2xl' />
          <Link href={"/"}><span className="text-slate-900 font-extrabold text-2xl tracking-tight">
            Viral<span className="text-primary">Prompt</span>
          </span>
          </Link>
        </div>

        {/* --- DESKTOP NAVIGATION: Hidden on smaller screens --- */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                <Link
                    key={link.path}
                    href={link.path}
                    className={`
                    relative transition duration-300
                    ${isActive ? "text-[#FF2A85]" : "text-gray-600 hover:text-gray-900"}
                    after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-[#FF2A85] after:transition-all after:duration-300
                    ${isActive ? "after:opacity-100 after:scale-100" : "after:opacity-0 after:scale-0"}
                    `}
                >
                    {link.name}
                </Link>
                );
            })}
        </nav>

        {/* --- DESKTOP CONTROLS: Hidden on smaller screens --- */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="bg-gray-200/80 p-1 rounded-full flex items-center cursor-pointer w-14 h-8 relative transition-colors duration-300"
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center text-gray-700 absolute transition-all duration-300 ${isDarkMode ? "left-7" : "left-1"}`}
            >
              {isDarkMode ? <IoMoon /> : <IoSunny />}
            </div>
          </button>

            <div className='bg-white rounded-full p-2 shadow-sm border border-pink-200'>
                <UserRound size={18} className='text-[#FF2A85]' />
            </div>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON: Visible only on small devices --- */}
        <div className="flex md:hidden items-center z-50">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-800 bg-gray-50 hover:bg-pink-50 border border-pink-100 rounded-xl transition duration-200"
          >
            {isMenuOpen ? <X size={20} className="text-[#FF2A85]" /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ================= MOBILE SIDEBAR DRAWER OVERLAY ================= */}
      {/* Dark Blurry Backdrop Layer */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Core Sidebar Sliding Block Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-white border-l border-pink-100 z-40 shadow-2xl p-6 pt-24 flex flex-col justify-between transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top: Links Route Stream */}
        <div className="space-y-6">
          <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest pl-2">Navigation Links</p>
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-bold text-sm transition-all flex items-center ${
                    isActive 
                      ? "bg-pink-50 text-[#FF2A85]" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Toggles and System Profile Configurations */}
        <div className="space-y-4 pt-6 border-t border-gray-100">
          <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest pl-2">Preferences</p>
          
          {/* Theme Shift Item row wrapper */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-2xl border border-gray-100">
            <span className="text-xs font-bold text-gray-600">Appearance</span>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="bg-gray-200/80 p-1 rounded-full flex items-center cursor-pointer w-14 h-8 relative transition-colors duration-300 shrink-0"
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center text-gray-700 absolute transition-all duration-300 ${isDarkMode ? "left-7" : "left-1"}`}
              >
                {isDarkMode ? <IoMoon size={14} /> : <IoSunny size={14} />}
              </div>
            </button>
          </div>

          {/* Profile Quick Button Identity card stack */}
          {/* <div className="flex items-center space-x-3 p-3 bg-pink-50/50 rounded-2xl border border-pink-100/50">
            <div className='bg-white rounded-full p-2 shadow-sm border border-pink-200'>
              <UserRound size={18} className='text-[#FF2A85]' />
            </div>
            <div className="text-left">
              <p className="text-xs font-extrabold text-slate-800">My Profile</p>
              <p className="text-[10px] font-medium text-gray-400">Manage Account</p>
            </div>
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default Navbar;