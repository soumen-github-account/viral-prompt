"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiCopy,
} from "react-icons/fi";

import {
  MdOutlineAutoAwesome,
} from "react-icons/md";

export default function PromptsPage() {

  const [prompts, setPrompts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // -------------------------
  // FETCH PROMPTS
  // -------------------------

  useEffect(() => {

    fetchPrompts();

  }, []);

  const fetchPrompts = async () => {

    try {

      setLoading(true);

      const res = await fetch(
        "/api/prompts"
      );

      const result =
        await res.json();

      setPrompts(result.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  // -------------------------
  // DELETE
  // -------------------------

  const deletePrompt = async (
    id
  ) => {

    const confirmDelete =
      confirm(
        "Delete this prompt?"
      );

    if (!confirmDelete) return;

    try {

      await fetch(
        `/api/prompts/${id}`,
        {
          method: "DELETE",
        }
      );

      setPrompts(
        prompts.filter(
          (item) =>
            item._id !== id
        )
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="min-h-screen bg-[#FAFBFD] pt-26 px-4 lg:px-10">

      {/* HEADER */}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

        <div>

          <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
            AI Prompts
          </h1>

          <p className="text-sm text-gray-400 mt-1 font-medium">
            Manage all uploaded AI
            prompts and artworks.
          </p>

        </div>

        <Link
          href="/admin/prompts/create"
          className="bg-gradient-to-r from-[#FF416C] to-[#FF2A85] hover:opacity-95 text-white px-5 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-pink-200 inline-flex items-center gap-2 transition"
        >

          <FiPlus className="text-lg" />

          Create Prompt

        </Link>

      </div>

      {/* LOADING */}

      {loading ? (

        <div className="space-y-5">

          {[1, 2, 3].map(
            (item) => (

              <div
                key={item}
                className="bg-white rounded-[30px] border border-gray-100 overflow-hidden animate-pulse"
              >

                <div className="grid lg:grid-cols-12">

                  <div className="lg:col-span-3 h-[260px] bg-gray-100" />

                  <div className="lg:col-span-9 p-6 space-y-4">

                    <div className="h-6 bg-gray-100 rounded w-1/3" />

                    <div className="h-3 bg-gray-100 rounded w-full" />

                    <div className="h-3 bg-gray-100 rounded w-5/6" />

                    <div className="h-24 bg-gray-100 rounded-2xl" />

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      ) : prompts.length === 0 ? (

        /* EMPTY */

        <div className="bg-white border border-gray-100 rounded-[32px] p-12 flex flex-col items-center justify-center text-center">

          <div className="w-20 h-20 rounded-full bg-pink-50 flex items-center justify-center text-4xl text-pink-500 mb-5">

            <MdOutlineAutoAwesome />

          </div>

          <h2 className="text-2xl font-black text-slate-900">
            No Prompts Found
          </h2>

          <p className="text-sm text-gray-400 mt-2 max-w-md">
            Upload your first AI
            image prompt and start
            growing your collection.
          </p>

          <Link
            href="/admin/prompts/create"
            className="mt-6 bg-gradient-to-r from-[#FF416C] to-[#FF2A85] text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-pink-200"
          >
            Create Prompt
          </Link>

        </div>

      ) : (

        /* PROMPT LIST */

        <div className="space-y-5">

          {prompts.map(
            (prompt) => (

              <div
                key={prompt._id}
                className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-pink-100/40 transition duration-300 group"
              >

                <div className="grid lg:grid-cols-12">

                  {/* IMAGE */}

                  <div className="lg:col-span-3 relative overflow-hidden">

                    <img
                      src={
                        prompt.image
                      }
                      alt={
                        prompt.title
                      }
                      className="w-full h-[260px] lg:h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                    {prompt.badge && (

                      <span
                        className={`absolute top-4 left-4 ${prompt.badgeBg || "bg-pink-500"} text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md`}
                      >
                        {
                          prompt.badge
                        }
                      </span>

                    )}

                  </div>

                  {/* CONTENT */}

                  <div className="lg:col-span-9 p-5 lg:p-7 flex flex-col justify-between">

                    <div className="space-y-5">

                      {/* TOP */}

                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">

                        <div>

                          <h2 className="text-2xl font-black tracking-tight text-slate-900">
                            {
                              prompt.title
                            }
                          </h2>

                          <p className="text-sm text-gray-400 mt-1 leading-relaxed max-w-3xl">
                            {
                              prompt.description
                            }
                          </p>

                        </div>

                        <div className="flex items-center gap-2">

                          <span className="bg-pink-50 text-pink-500 text-xs font-bold px-3 py-2 rounded-full whitespace-nowrap">
                            {
                              prompt.tool
                            }
                          </span>

                        </div>

                      </div>

                      {/* PROMPT BOX */}

                      <div className="bg-[#FAFBFD] border border-gray-100 rounded-3xl p-5 relative">

                        <p className="text-sm text-slate-700 leading-relaxed font-medium whitespace-pre-line">
                          {
                            prompt.prompt
                          }
                        </p>

                        <button className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white border border-gray-100 hover:bg-pink-50 hover:text-pink-500 flex items-center justify-center transition">

                          <FiCopy />

                        </button>

                      </div>

                      {/* TAGS */}

                      {prompt.tags
                        ?.length >
                        0 && (

                        <div className="flex flex-wrap gap-2">

                          {prompt.tags.map(
                            (
                              tag,
                              idx
                            ) => (
                              <span
                                key={
                                  idx
                                }
                                className="bg-pink-50 text-pink-500 text-[11px] font-bold px-3 py-1 rounded-full"
                              >
                                #{tag}
                              </span>
                            )
                          )}

                        </div>

                      )}

                    </div>

                    {/* FOOTER */}

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 mt-6 border-t border-gray-100">

                      <div className="flex items-center gap-5 text-sm font-bold text-gray-400">

                        <span>
                          ❤️{" "}
                          {
                            prompt.likes
                          }{" "}
                          Likes
                        </span>

                        <span>
                          📅{" "}
                          {new Date(
                            prompt.createdAt
                          ).toLocaleDateString()}
                        </span>

                      </div>

                      <div className="flex items-center gap-3">

                        {/* EDIT */}

                        <Link
                          href={`/admin/prompts/edit/${prompt._id}`}
                          className="h-11 px-5 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-500 flex items-center gap-2 text-sm font-bold transition"
                        >

                          <FiEdit2 />

                          Edit

                        </Link>

                        {/* DELETE */}

                        <button
                          onClick={() =>
                            deletePrompt(
                              prompt._id
                            )
                          }
                          className="h-11 px-5 rounded-2xl bg-red-50 hover:bg-red-100 text-red-500 flex items-center gap-2 text-sm font-bold transition cursor-pointer"
                        >

                          <FiTrash2 />

                          Delete

                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      )}

    </div>
  );
}
