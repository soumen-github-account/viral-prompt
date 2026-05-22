// // app/admin/categories/edit/[id]/page.js

// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function EditCategoryPage() {
//     const params = useParams();

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     slug: "",
//     tool: "",
//     badge: "",
//     badgeBg: "",
//     tags: "",
//   });

//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     fetchCategory();
//   }, []);

//   const fetchCategory = async () => {

//     try {

//       const res = await fetch(
//         `/api/categories/${params.id}`
//       );

//       const result = await res.json();

//       const category = result.data;

//       setFormData({
//         title: category.title,
//         description: category.description,
//         slug: category.slug,
//         tool: category.tool,
//         badge: category.badge,
//         badgeBg: category.badgeBg,
//         tags: category.tags.join(", "),
//       });

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {

//       const data = new FormData();

//       data.append("title", formData.title);
//       data.append(
//         "description",
//         formData.description
//       );
//       data.append("slug", formData.slug);
//       data.append("tool", formData.tool);
//       data.append("badge", formData.badge);
//       data.append("badgeBg", formData.badgeBg);

//       data.append(
//         "tags",
//         JSON.stringify(
//           formData.tags
//             .split(",")
//             .map((tag) => tag.trim())
//         )
//       );

//       if (image) {
//         data.append("image", image);
//       }

//       const res = await fetch(
//         `/api/categories/${params.id}`,
//         {
//           method: "PUT",
//           body: data,
//         }
//       );

//       const result = await res.json();

//       console.log(result);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="p-5 max-w-3xl">

//       <h1 className="text-3xl font-bold mb-6">
//         Edit Category
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="space-y-4"
//       >

//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           className="w-full border p-3 rounded-lg"
//         />

//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           className="w-full border p-3 rounded-lg"
//         />

//         <input
//           type="text"
//           name="slug"
//           value={formData.slug}
//           onChange={handleChange}
//           className="w-full border p-3 rounded-lg"
//         />

//         <input
//           type="text"
//           name="tool"
//           value={formData.tool}
//           onChange={handleChange}
//           className="w-full border p-3 rounded-lg"
//         />

//         <input
//           type="text"
//           name="badge"
//           value={formData.badge}
//           onChange={handleChange}
//           className="w-full border p-3 rounded-lg"
//         />

//         <input
//           type="text"
//           name="badgeBg"
//           value={formData.badgeBg}
//           onChange={handleChange}
//           className="w-full border p-3 rounded-lg"
//         />

//         <input
//           type="text"
//           name="tags"
//           value={formData.tags}
//           onChange={handleChange}
//           className="w-full border p-3 rounded-lg"
//         />

//         <input
//           type="file"
//           onChange={(e) =>
//             setImage(e.target.files[0])
//           }
//           className="w-full border p-3 rounded-lg"
//         />

//         <button
//           type="submit"
//           className="bg-black text-white px-5 py-3 rounded-lg"
//         >
//           Update Category
//         </button>

//       </form>

//     </div>
//   );
// }
// app/admin/categories/edit/[id]/page.js

"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { FaWandMagicSparkles, FaTags, FaImage} from "react-icons/fa6";

import {
  MdCategory,
} from "react-icons/md";

const toolsList = [
  "Midjourney",
  "DALL-E",
  "Leonardo AI",
  "Stable Diffusion",
  "Flux",
  "Gemini AI",
];

const badgeList = [
  "Trending",
  "New",
  "Hot",
  "Popular",
  "Featured",
];

const tagsList = [
  "girls",
  "boys",
  "anime",
  "cinematic",
  "portrait",
  "cyberpunk",
  "fantasy",
  "neon",
  "saree",
  "indian",
  "realistic",
  "3D",
  "fashion",
  "city",
  "luxury",
];

const badgeColors = [
  "bg-pink-500",
  "bg-purple-500",
  "bg-red-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-emerald-500",
];

export default function EditCategoryPage() {

  const params = useParams();

  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const [updating, setUpdating] =
    useState(false);

  const [preview, setPreview] =
    useState("");

  const [image, setImage] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      slug: "",
      tool: "",
      badge: "",
      badgeBg: "",
      tags: "",
    });

  useEffect(() => {

    fetchCategory();

  }, []);

  const fetchCategory = async () => {

    try {

      setLoading(true);

      const res = await fetch(
        `/api/categories/${params.id}`
      );

      const result =
        await res.json();

      const category =
        result.data;

      setPreview(category.image);

      setFormData({
        title: category.title,
        description:
          category.description,
        slug: category.slug,
        tool: category.tool,
        badge: category.badge,
        badgeBg:
          category.badgeBg,
        tags:
          category.tags.join(", "),
      });

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const toggleTag = (tag) => {

    const currentTags =
      formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

    if (
      currentTags.includes(tag)
    ) {

      const updated =
        currentTags.filter(
          (t) => t !== tag
        );

      setFormData({
        ...formData,
        tags: updated.join(", "),
      });

    } else {

      setFormData({
        ...formData,
        tags: [
          ...currentTags,
          tag,
        ].join(", "),
      });

    }

  };

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      setUpdating(true);

      const data =
        new FormData();

      data.append(
        "title",
        formData.title
      );

      data.append(
        "description",
        formData.description
      );

      data.append(
        "slug",
        formData.slug
      );

      data.append(
        "tool",
        formData.tool
      );

      data.append(
        "badge",
        formData.badge
      );

      data.append(
        "badgeBg",
        formData.badgeBg
      );

      data.append(
        "tags",
        JSON.stringify(
          formData.tags
            .split(",")
            .map((tag) =>
              tag.trim()
            )
        )
      );

      if (image) {

        data.append(
          "image",
          image
        );

      }

      const res = await fetch(
        `/api/categories/${params.id}`,
        {
          method: "PUT",
          body: data,
        }
      );

      const result =
        await res.json();

      console.log(result);

      router.push(
        "/admin/categories"
      );

    } catch (error) {

      console.log(error);

    } finally {

      setUpdating(false);

    }

  };

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFBFD]">

        <div className="w-12 h-12 border-4 border-pink-200 border-t-[#FF2A85] rounded-full animate-spin" />

      </div>
    );

  }

  return (
    <div className="min-h-screen bg-[#FAFBFD] py-28 px-4 lg:px-10">

      <div className="max-w-5xl mx-auto">

        <div className="mb-8">

          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Edit Category
          </h1>

          <p className="text-sm text-gray-400 mt-2">
            Update category
            information, tags,
            image and badges.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-pink-100/60 rounded-[32px] shadow-xl shadow-pink-100/30 p-6 lg:p-10 space-y-8"
        >

          {/* IMAGE PREVIEW */}

          <div className="space-y-4">

            <div className="flex items-center gap-2 text-sm font-bold text-slate-800">

              <FaImage className="text-[#FF2A85]" />

              <span>
                Category Banner
              </span>

            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-pink-100 h-[260px]">

              <img
                src={
                  preview ||
                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
                }
                alt="preview"
                className="w-full h-full object-cover"
              />

            </div>

            <input
              type="file"
              onChange={(e) => {

                setImage(
                  e.target.files[0]
                );

                setPreview(
                  URL.createObjectURL(
                    e.target.files[0]
                  )
                );

              }}
              className="w-full border border-gray-200 rounded-2xl p-3 text-sm font-medium"
            />

          </div>

          {/* BASIC INFO */}

          <div className="grid lg:grid-cols-2 gap-5">

            <div className="space-y-2">

              <label className="text-sm font-bold text-slate-700">
                Category Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={
                  handleChange
                }
                className="w-full border border-gray-200 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 outline-none rounded-2xl px-5 py-4 text-sm font-semibold"
                placeholder="Red Saree Girls"
              />

            </div>

            <div className="space-y-2">

              <label className="text-sm font-bold text-slate-700">
                Slug
              </label>

              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={
                  handleChange
                }
                className="w-full border border-gray-200 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 outline-none rounded-2xl px-5 py-4 text-sm font-semibold"
                placeholder="red-saree-girls"
              />

            </div>

          </div>

          <div className="space-y-2">

            <label className="text-sm font-bold text-slate-700">
              Description
            </label>

            <textarea
              name="description"
              rows={5}
              value={
                formData.description
              }
              onChange={
                handleChange
              }
              className="w-full border border-gray-200 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 outline-none rounded-2xl px-5 py-4 text-sm font-medium resize-none"
              placeholder="Write category description..."
            />

          </div>

          {/* TOOLS */}

          <div className="space-y-4">

            <div className="flex items-center gap-2 text-sm font-bold text-slate-800">

              <FaWandMagicSparkles className="text-[#FF2A85]" />

              <span>
                AI Tool
              </span>

            </div>

            <input
              type="text"
              name="tool"
              value={formData.tool}
              onChange={
                handleChange
              }
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm font-semibold"
              placeholder="Midjourney"
            />

            <div className="flex flex-wrap gap-3">

              {toolsList.map(
                (tool) => (
                  <button
                    type="button"
                    key={tool}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        tool,
                      })
                    }
                    className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                      formData.tool ===
                      tool
                        ? "bg-[#FF2A85] text-white shadow-lg shadow-pink-200"
                        : "bg-pink-50 text-pink-500 hover:bg-pink-100"
                    }`}
                  >
                    {tool}
                  </button>
                )
              )}

            </div>

          </div>

          {/* BADGES */}

          <div className="grid lg:grid-cols-2 gap-6">

            <div className="space-y-4">

              <div className="flex items-center gap-2 text-sm font-bold text-slate-800">

                <MdCategory className="text-[#FF2A85]" />

                <span>
                  Badge
                </span>

              </div>

              <input
                type="text"
                name="badge"
                value={formData.badge}
                onChange={
                  handleChange
                }
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm font-semibold"
              />

              <div className="flex flex-wrap gap-3">

                {badgeList.map(
                  (badge) => (
                    <button
                      type="button"
                      key={badge}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          badge,
                        })
                      }
                      className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                        formData.badge ===
                        badge
                          ? "bg-[#FF2A85] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {badge}
                    </button>
                  )
                )}

              </div>

            </div>

            <div className="space-y-4">

              <div className="flex items-center gap-2 text-sm font-bold text-slate-800">

                <FaTags className="text-[#FF2A85]" />

                <span>
                  Badge Color
                </span>

              </div>

              <input
                type="text"
                name="badgeBg"
                value={
                  formData.badgeBg
                }
                onChange={
                  handleChange
                }
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm font-semibold"
              />

              <div className="flex gap-3 flex-wrap">

                {badgeColors.map(
                  (color) => (
                    <button
                      type="button"
                      key={color}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          badgeBg:
                            color,
                        })
                      }
                      className={`w-10 h-10 rounded-full ${color} border-4 transition ${
                        formData.badgeBg ===
                        color
                          ? "border-slate-900 scale-110"
                          : "border-white"
                      }`}
                    />
                  )
                )}

              </div>

            </div>

          </div>

          {/* TAGS */}

          <div className="space-y-4">

            <div className="flex items-center gap-2 text-sm font-bold text-slate-800">

              <FaTags className="text-[#FF2A85]" />

              <span>
                Tags
              </span>

            </div>

            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={
                handleChange
              }
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm font-semibold"
            />

            <div className="flex flex-wrap gap-3">

              {tagsList.map(
                (tag) => {

                  const selected =
                    formData.tags.includes(
                      tag
                    );

                  return (
                    <button
                      type="button"
                      key={tag}
                      onClick={() =>
                        toggleTag(
                          tag
                        )
                      }
                      className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                        selected
                          ? "bg-[#FF2A85] text-white shadow-lg shadow-pink-200"
                          : "bg-pink-50 text-pink-500 hover:bg-pink-100"
                      }`}
                    >
                      #{tag}
                    </button>
                  );

                }
              )}

            </div>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            disabled={updating}
            className="w-full bg-gradient-to-r from-[#FF416C] to-[#FF2A85] hover:opacity-95 text-white py-4 rounded-2xl font-bold shadow-xl shadow-pink-200 transition disabled:opacity-70"
          >

            {updating
              ? "Updating..."
              : "Update Category"}

          </button>

        </form>

      </div>

    </div>
  );
}