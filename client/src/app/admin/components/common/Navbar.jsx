// app/components/admin/AdminNavbar.jsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  HiOutlineSquares2X2,
  HiOutlineTag,
  HiOutlineSparkles,
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";

export default function AdminNavbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: <HiOutlineSquares2X2 />,
    },
    {
      name: "Categories",
      href: "/admin/categories",
      icon: <HiOutlineTag />,
    },
    {
      name: "Prompts",
      href: "/admin/prompts",
      icon: <HiOutlineSparkles />,
    },
  ];

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-pink-100/60 bg-white/80 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 h-[72px] flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/admin"
            className="flex items-center gap-2 shrink-0"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FF4D9D] to-[#FF2A85] text-white flex items-center justify-center shadow-lg shadow-pink-200">
              ✦
            </div>

            <div className="leading-tight">
              <h2 className="text-sm font-black tracking-tight text-slate-900">
                ViralPrompt
              </h2>

              <p className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">
                Admin Panel
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const active =
                pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                    active
                      ? "bg-gradient-to-r from-[#FF4D9D] to-[#FF2A85] text-white shadow-lg shadow-pink-200"
                      : "text-gray-500 hover:bg-pink-50 hover:text-[#FF2A85]"
                  }`}
                >
                  <span className="text-lg">
                    {item.icon}
                  </span>

                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ACTION */}
          <div className="flex items-center gap-3">

            {/* ADMIN BADGE */}
            <div className="hidden sm:flex items-center gap-2 bg-pink-50 border border-pink-100 rounded-full px-3 py-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

              <span className="text-[11px] font-extrabold text-[#FF2A85]">
                Admin Active
              </span>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() =>
                setOpen(!open)
              }
              className="md:hidden w-11 h-11 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#FF2A85] text-2xl"
            >
              {open ? (
                <HiOutlineXMark />
              ) : (
                <HiOutlineBars3 />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-[72px] left-0 w-full z-40 md:hidden transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="mx-4 mt-3 rounded-[28px] border border-pink-100 bg-white/95 backdrop-blur-xl shadow-2xl shadow-pink-100 overflow-hidden">

          <div className="p-3 flex flex-col">
            {navItems.map((item) => {
              const active =
                pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className={`flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-bold transition-all ${
                    active
                      ? "bg-gradient-to-r from-[#FF4D9D] to-[#FF2A85] text-white"
                      : "text-gray-600 hover:bg-pink-50 hover:text-[#FF2A85]"
                  }`}
                >
                  <span className="text-xl">
                    {item.icon}
                  </span>

                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* FOOTER */}
          <div className="border-t border-pink-100 px-5 py-4 bg-pink-50/50">
            <p className="text-[11px] text-gray-400 font-semibold">
              Manage categories, prompts, uploads and AI collections.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}