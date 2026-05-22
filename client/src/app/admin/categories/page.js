"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  FiEdit2,
  FiTrash2,
  FiPlus,
} from "react-icons/fi";

import {
  MdOutlineCategory,
} from "react-icons/md";

export default function CategoriesPage() {

  const [categories, setCategories] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // -------------------------
  // FETCH
  // -------------------------

  useEffect(() => {

    fetchCategories();

  }, []);

  const fetchCategories = async () => {

    try {

      setLoading(true);

      const res = await fetch(
        "/api/categories"
      );

      const result =
        await res.json();

      setCategories(result.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  // -------------------------
  // DELETE
  // -------------------------

  const deleteCategory = async (
    id
  ) => {

    const confirmDelete =
      confirm(
        "Delete this category?"
      );

    if (!confirmDelete) return;

    try {

      await fetch(
        `/api/categories/${id}`,
        {
          method: "DELETE",
        }
      );

      setCategories(
        categories.filter(
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
            Categories
          </h1>

          <p className="text-sm text-gray-400 mt-1 font-medium">
            Manage all AI prompt
            categories.
          </p>

        </div>

        <Link
          href="/admin/categories/create"
          className="bg-gradient-to-r from-[#FF416C] to-[#FF2A85] hover:opacity-95 text-white px-5 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-pink-200 inline-flex items-center gap-2 transition"
        >

          <FiPlus className="text-lg" />

          Create Category

        </Link>

      </div>

      {/* LOADING */}

      {loading ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

          {[1, 2, 3, 4].map(
            (item) => (

              <div
                key={item}
                className="bg-white rounded-[30px] border border-gray-100 overflow-hidden animate-pulse"
              >

                <div className="h-[220px] bg-gray-100" />

                <div className="p-5 space-y-3">

                  <div className="h-5 bg-gray-100 rounded w-2/3" />

                  <div className="h-3 bg-gray-100 rounded w-full" />

                  <div className="h-3 bg-gray-100 rounded w-4/5" />

                  <div className="flex gap-2 pt-2">

                    <div className="h-7 w-16 rounded-full bg-gray-100" />

                    <div className="h-7 w-16 rounded-full bg-gray-100" />

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      ) : categories.length === 0 ? (

        /* EMPTY */

        <div className="bg-white border border-gray-100 rounded-[32px] p-12 flex flex-col items-center justify-center text-center">

          <div className="w-20 h-20 rounded-full bg-pink-50 flex items-center justify-center text-4xl text-pink-500 mb-5">

            <MdOutlineCategory />

          </div>

          <h2 className="text-2xl font-black text-slate-900">
            No Categories Found
          </h2>

          <p className="text-sm text-gray-400 mt-2 max-w-md">
            Create your first AI
            prompt category and
            start building your
            platform.
          </p>

          <Link
            href="/admin/categories/create"
            className="mt-6 bg-gradient-to-r from-[#FF416C] to-[#FF2A85] text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-pink-200"
          >
            Create Category
          </Link>

        </div>

      ) : (

        /* CARDS */

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

          {categories.map(
            (category) => (

              <div
                key={
                  category._id
                }
                className="bg-white rounded-[30px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-pink-100/40 transition duration-300 group"
              >

                {/* IMAGE */}

                <div className="relative h-[240px] overflow-hidden">

                  <img
                    src={
                      category.image
                    }
                    alt={
                      category.title
                    }
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* BADGE */}

                  <span
                    className={`absolute top-4 left-4 ${category.badgeBg} text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md`}
                  >
                    {
                      category.badge
                    }
                  </span>

                </div>

                {/* CONTENT */}

                <div className="p-5 space-y-4">

                  <div>

                    <h2 className="text-xl font-black tracking-tight text-slate-900 line-clamp-1">
                      {
                        category.title
                      }
                    </h2>

                    <p className="text-gray-400 text-xs leading-relaxed mt-1 line-clamp-2">
                      {
                        category.description
                      }
                    </p>

                  </div>

                  {/* TAGS */}

                  <div className="flex flex-wrap gap-2">

                    {category.tags?.map(
                      (
                        tag,
                        idx
                      ) => (
                        <span
                          key={idx}
                          className="bg-pink-50 text-pink-500 text-[10px] font-bold px-2.5 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      )
                    )}

                  </div>

                  {/* FOOTER */}

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">

                    <div className="flex items-center gap-2 text-xs text-gray-400 font-bold">

                      <span>
                        ❤️{" "}
                        {
                          category.likes
                        }
                      </span>

                      <span>
                        📋{" "}
                        {
                          category.copies
                        }
                      </span>

                    </div>

                    <div className="flex items-center gap-2">

                      {/* EDIT */}

                      <Link
                        href={`/admin/categories/edit/${category._id}`}
                        className="w-10 h-10 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-500 flex items-center justify-center transition"
                      >

                        <FiEdit2 />

                      </Link>

                      {/* DELETE */}

                      <button
                        onClick={() =>
                          deleteCategory(
                            category._id
                          )
                        }
                        className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center transition cursor-pointer"
                      >

                        <FiTrash2 />

                      </button>

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