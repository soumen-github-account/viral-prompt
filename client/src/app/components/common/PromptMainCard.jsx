"use client";

import { useState } from "react";
import {
  FaHeart,
  FaCopy,
  FaShareAlt,
  FaDownload,
  FaCheck,
} from "react-icons/fa";

export default function PromptMainCard({
  card,
}) {

  const [copied, setCopied] =
    useState(false);

  const [downloading, setDownloading] =
    useState(false);

  const [sharing, setSharing] =
    useState(false);

    // COPY PROMPT
  const handleCopy = async () => {

    try {

      await navigator.clipboard.writeText(
        card.prompt
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {
      console.log(error);
    }
  };

  // SHARE
  const handleShare = async () => {

    try {

      setSharing(true);

      if (navigator.share) {

        await navigator.share({
          title: card.title,
          text: card.description,
          url: window.location.href,
        });

      } else {

        await navigator.clipboard.writeText(
          window.location.href
        );

        alert("Link copied!");

      }

    } catch (error) {

      console.log(error);

    } finally {

      setSharing(false);

    }
  };

  // DOWNLOAD IMAGE
  const handleDownload = async () => {

    try {

      setDownloading(true);

      const response = await fetch(
        card.image
      );

      const blob =
        await response.blob();

      const url =
        window.URL.createObjectURL(blob);

      const link =
        document.createElement("a");

      link.href = url;

      link.download = `${card.title}.jpg`;

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);

    } catch (error) {

      console.log(error);

    } finally {

      setDownloading(false);

    }
  };

  return (
    <div className="bg-white rounded-[36px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">

      <div className="grid lg:grid-cols-2 gap-0">

        {/* LEFT IMAGE */}
        <div className="relative h-[350px] sm:h-[340px] lg:h-[420px] xl:h-[460px] overflow-hidden bg-slate-100 rounded-b-none">

          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover object-center hover:scale-[1.03] transition duration-700"
          />

          {/* Badge */}
          <span className={`absolute top-5 left-5 text-[11px] text-white font-extrabold px-3 py-1.5 rounded-full shadow-md ${card.badgeBg}`}>
            {card.badge}
          </span>

        </div>

        {/* RIGHT CONTENT */}
        <div className="p-7 lg:p-9 flex flex-col justify-between">

          <div>

            {/* Tool */}
            <div className="flex items-center gap-2 mb-4">

              <span className="bg-pink-50 text-[#FF2A85] text-[11px] font-bold px-3 py-1 rounded-full border border-pink-100">
                {card.tool}
              </span>

              <span className="text-gray-300 text-xs">
                •
              </span>

              <span className="text-xs font-semibold text-gray-400">
                {card.likes} likes
              </span>

            </div>

            {/* Title */}
            <h2 className="text-3xl font-black tracking-tight text-slate-900 leading-tight">
              {card.title}
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mt-4">
              {card.description}
            </p>

            {/* Prompt Box */}
            <div className="mt-6 bg-[#FAFBFD] border border-gray-100 rounded-3xl p-5">

              <div className="flex items-center justify-between mb-3">

                <span className="text-xs font-bold text-[#FF2A85] uppercase tracking-wider">
                  AI Prompt
                </span>

                <button
                  onClick={handleCopy}
                  className="text-xs font-bold text-gray-400 hover:text-[#FF2A85] transition flex items-center gap-1"
                >

                  {copied ? (
                    <>
                      <FaCheck />
                      Copied
                    </>
                  ) : (
                    <>
                      <FaCopy />
                      Copy
                    </>
                  )}
                </button>

              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {card.prompt}
              </p>

            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">

              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-pink-50 text-pink-500 text-[11px] font-bold px-3 py-1 rounded-full border border-pink-100"
                >
                  #{tag}
                </span>
              ))}

            </div>

          </div>

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center gap-3 mt-8">

            <button
              onClick={handleCopy}
              className="bg-[#FF2A85] hover:bg-pink-600 text-white text-sm font-bold px-6 py-3 rounded-2xl shadow-lg shadow-pink-200 transition flex items-center gap-2"
            >

              {copied ? (
                <>
                  <FaCheck />
                  Copied
                </>
              ) : (
                <>
                  <FaCopy />
                  Copy Prompt
                </>
              )}

            </button>


            {/* <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold px-5 py-3 rounded-2xl transition flex items-center gap-2">
              <FaHeart />
              Save
            </button> */}

            <button
              onClick={handleShare}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold px-5 py-3 rounded-2xl transition flex items-center gap-2"
            >

              <FaShareAlt />

              {sharing
                ? "Sharing..."
                : "Share"}

            </button>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="bg-gray-100 hover:bg-gray-200 disabled:opacity-70 text-gray-700 text-sm font-bold px-5 py-3 rounded-2xl transition flex items-center gap-2"
            >

              <FaDownload />

              {downloading
                ? "Downloading..."
                : "Download"}

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}