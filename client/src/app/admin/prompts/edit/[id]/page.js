// "use client";

// import { useParams, useRouter } from "next/navigation";

// import {
//   useEffect,
//   useState,
// } from "react";

// import {
//   FaWandMagicSparkles,
//   FaTags,
//   FaImage,
// } from "react-icons/fa6";

// import {
//   MdCategory,
//   MdOutlineDescription,
// } from "react-icons/md";

// const toolSuggestions = [
//   "Midjourney",
//   "DALL·E 3",
//   "Stable Diffusion",
//   "Leonardo AI",
//   "Adobe Firefly",
//   "Flux AI",
//   "Gemini AI",
//   "Ideogram",
// ];

// const badgeSuggestions = [
//   "Trending",
//   "Popular",
//   "Hot",
//   "New",
//   "Featured",
//   "Viral",
// ];

// const tagSuggestions = [
//   "girls",
//   "boys",
//   "anime",
//   "cinematic",
//   "photorealistic",
//   "sci-fi",
//   "cyberpunk",
//   "fantasy",
//   "saree",
//   "indian",
//   "fashion",
//   "portrait",
//   "3D",
//   "cute",
// ];

// const badgeColors = [
//   "bg-pink-600",
//   "bg-red-500",
//   "bg-blue-500",
//   "bg-purple-500",
//   "bg-emerald-500",
//   "bg-amber-500",
// ];

// export default function EditPromptPage() {

//   const params = useParams();

//   const router = useRouter();

//   const [loading, setLoading] =
//     useState(true);

//   const [categories, setCategories] =
//     useState([]);

//   const [image, setImage] =
//     useState(null);

//   const [preview, setPreview] =
//     useState("");

//   const [formData, setFormData] =
//     useState({
//       title: "",
//       description: "",
//       prompt: "",
//       categoryId: "",
//       tool: "",
//       badge: "",
//       badgeBg: "",
//       tags: "",
//     });

//   useEffect(() => {

//     if (params?.id) {
//       fetchCategories();
//       fetchPrompt();
//     }

//   }, [params?.id]);

//   const fetchCategories = async () => {

//     try {

//       const res = await fetch(
//         "/api/categories"
//       );

//       const result =
//         await res.json();

//       setCategories(result.data);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchPrompt = async () => {

//     try {

//       setLoading(true);

//       const res = await fetch(
//         `/api/prompts/${params.id}`
//       );

//       const result =
//         await res.json();

//       const prompt =
//         result.data;

//       setPreview(prompt.image);

//       setFormData({
//         title: prompt.title || "",
//         description:
//           prompt.description || "",
//         prompt:
//           prompt.prompt || "",
//         categoryId:
//           prompt.categoryId || "",
//         tool: prompt.tool || "",
//         badge:
//           prompt.badge || "",
//         badgeBg:
//           prompt.badgeBg || "",
//         tags:
//           prompt.tags?.join(", ") || "",
//       });

//     } catch (error) {

//       console.log(error);

//     } finally {

//       setLoading(false);

//     }
//   };

//   const handleChange = (e) => {

//     setFormData({
//       ...formData,
//       [e.target.name]:
//         e.target.value,
//     });
//   };

//   const toggleTag = (tag) => {

//     const currentTags =
//       formData.tags
//         .split(",")
//         .map((t) => t.trim())
//         .filter(Boolean);

//     if (
//       currentTags.includes(tag)
//     ) {

//       setFormData({
//         ...formData,
//         tags: currentTags
//           .filter((t) => t !== tag)
//           .join(", "),
//       });

//     } else {

//       setFormData({
//         ...formData,
//         tags: [
//           ...currentTags,
//           tag,
//         ].join(", "),
//       });
//     }
//   };

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {

//       const data = new FormData();

//       data.append(
//         "title",
//         formData.title
//       );

//       data.append(
//         "description",
//         formData.description
//       );

//       data.append(
//         "prompt",
//         formData.prompt
//       );

//       data.append(
//         "categoryId",
//         formData.categoryId
//       );

//       data.append(
//         "tool",
//         formData.tool
//       );

//       data.append(
//         "badge",
//         formData.badge
//       );

//       data.append(
//         "badgeBg",
//         formData.badgeBg
//       );

//       data.append(
//         "tags",
//         JSON.stringify(
//           formData.tags
//             .split(",")
//             .map((tag) =>
//               tag.trim()
//             )
//             .filter(Boolean)
//         )
//       );

//       if (image) {
//         data.append(
//           "image",
//           image
//         );
//       }

//       const res = await fetch(
//         `/api/prompts/${params.id}`,
//         {
//           method: "PUT",
//           body: data,
//         }
//       );

//       const result =
//         await res.json();

//       console.log(result);

//       router.push(
//         "/admin/prompts"
//       );

//     } catch (error) {

//       console.log(error);

//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-sm font-bold text-pink-500">
//         Loading Prompt...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#FAFBFD] py-28 px-4">

//       <div className="max-w-4xl mx-auto bg-white border border-pink-100 rounded-[35px] p-6 lg:p-10 shadow-xl shadow-pink-100/40">

//         <div className="mb-8">
//           <h1 className="text-4xl font-black tracking-tight text-slate-900">
//             Edit Prompt
//           </h1>

//           <p className="text-sm text-gray-400 mt-2 font-medium">
//             Update your AI prompt details beautifully ✨
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="space-y-6"
//         >

//           {/* Title */}
//           <div className="space-y-2">

//             <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
//               <FaWandMagicSparkles className="text-pink-500" />
//               Prompt Title
//             </label>

//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               placeholder="Cyberpunk Girl in Neon City"
//               className="w-full bg-[#FAFBFD] border border-gray-200 focus:border-pink-400 outline-none rounded-2xl px-5 py-4 text-sm font-semibold"
//             />

//           </div>

//           {/* Description */}
//           <div className="space-y-2">

//             <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
//               <MdOutlineDescription className="text-pink-500 text-lg" />
//               Description
//             </label>

//             <textarea
//               name="description"
//               value={
//                 formData.description
//               }
//               onChange={handleChange}
//               placeholder="Short description..."
//               className="w-full h-28 resize-none bg-[#FAFBFD] border border-gray-200 focus:border-pink-400 outline-none rounded-2xl px-5 py-4 text-sm font-medium"
//             />

//           </div>

//           {/* Prompt */}
//           <div className="space-y-2">

//             <label className="text-sm font-bold text-slate-700">
//               Full Prompt
//             </label>

//             <textarea
//               name="prompt"
//               value={formData.prompt}
//               onChange={handleChange}
//               placeholder="Write full AI prompt..."
//               className="w-full h-52 resize-none bg-[#FAFBFD] border border-gray-200 focus:border-pink-400 outline-none rounded-2xl px-5 py-4 text-sm font-medium"
//             />

//           </div>

//           {/* Category */}
//           <div className="space-y-2">

//             <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
//               <MdCategory className="text-pink-500 text-lg" />
//               Select Category
//             </label>

//             <select
//               name="categoryId"
//               value={
//                 formData.categoryId
//               }
//               onChange={handleChange}
//               className="w-full bg-[#FAFBFD] border border-gray-200 rounded-2xl px-5 py-4 text-sm font-semibold outline-none"
//             >

//               <option value="">
//                 Select Category
//               </option>

//               {categories.map(
//                 (category) => (
//                   <option
//                     key={
//                       category._id
//                     }
//                     value={
//                       category._id
//                     }
//                   >
//                     {category.title}
//                   </option>
//                 )
//               )}

//             </select>

//           </div>

//           {/* Tool */}
//           <div className="space-y-3">

//             <input
//               type="text"
//               name="tool"
//               value={formData.tool}
//               onChange={handleChange}
//               placeholder="Tool"
//               className="w-full bg-[#FAFBFD] border border-gray-200 rounded-2xl px-5 py-4 text-sm font-semibold outline-none"
//             />

//             <div className="flex flex-wrap gap-2">

//               {toolSuggestions.map(
//                 (tool) => (
//                   <button
//                     key={tool}
//                     type="button"
//                     onClick={() =>
//                       setFormData({
//                         ...formData,
//                         tool,
//                       })
//                     }
//                     className={`px-4 py-2 rounded-full text-xs font-bold transition ${
//                       formData.tool ===
//                       tool
//                         ? "bg-pink-500 text-white"
//                         : "bg-pink-50 text-pink-500"
//                     }`}
//                   >
//                     {tool}
//                   </button>
//                 )
//               )}

//             </div>

//           </div>

//           {/* Badge */}
//           <div className="space-y-3">

//             <input
//               type="text"
//               name="badge"
//               value={formData.badge}
//               onChange={handleChange}
//               placeholder="Badge"
//               className="w-full bg-[#FAFBFD] border border-gray-200 rounded-2xl px-5 py-4 text-sm font-semibold outline-none"
//             />

//             <div className="flex flex-wrap gap-2">

//               {badgeSuggestions.map(
//                 (badge) => (
//                   <button
//                     key={badge}
//                     type="button"
//                     onClick={() =>
//                       setFormData({
//                         ...formData,
//                         badge,
//                       })
//                     }
//                     className={`px-4 py-2 rounded-full text-xs font-bold transition ${
//                       formData.badge ===
//                       badge
//                         ? "bg-pink-500 text-white"
//                         : "bg-gray-100 text-gray-600"
//                     }`}
//                   >
//                     {badge}
//                   </button>
//                 )
//               )}

//             </div>

//           </div>

//           {/* Badge Color */}
//           <div className="space-y-3">

//             <input
//               type="text"
//               name="badgeBg"
//               value={
//                 formData.badgeBg
//               }
//               onChange={handleChange}
//               placeholder="Badge Color"
//               className="w-full bg-[#FAFBFD] border border-gray-200 rounded-2xl px-5 py-4 text-sm font-semibold outline-none"
//             />

//             <div className="flex gap-3 flex-wrap">

//               {badgeColors.map(
//                 (color) => (
//                   <button
//                     key={color}
//                     type="button"
//                     onClick={() =>
//                       setFormData({
//                         ...formData,
//                         badgeBg:
//                           color,
//                       })
//                     }
//                     className={`w-11 h-11 rounded-full ${color} border-4 transition ${
//                       formData.badgeBg ===
//                       color
//                         ? "border-black scale-110"
//                         : "border-white"
//                     }`}
//                   />
//                 )
//               )}

//             </div>

//           </div>

//           {/* Tags */}
//           <div className="space-y-3">

//             <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
//               <FaTags className="text-pink-500" />
//               Tags
//             </label>

//             <input
//               type="text"
//               name="tags"
//               value={formData.tags}
//               onChange={handleChange}
//               placeholder="girls, anime, cinematic"
//               className="w-full bg-[#FAFBFD] border border-gray-200 rounded-2xl px-5 py-4 text-sm font-semibold outline-none"
//             />

//             <div className="flex flex-wrap gap-2">

//               {tagSuggestions.map(
//                 (tag) => {

//                   const active =
//                     formData.tags
//                       .split(",")
//                       .map((t) =>
//                         t.trim()
//                       )
//                       .includes(tag);

//                   return (
//                     <button
//                       key={tag}
//                       type="button"
//                       onClick={() =>
//                         toggleTag(tag)
//                       }
//                       className={`px-4 py-2 rounded-full text-xs font-bold transition ${
//                         active
//                           ? "bg-pink-500 text-white"
//                           : "bg-gray-100 text-gray-600"
//                       }`}
//                     >
//                       #{tag}
//                     </button>
//                   );
//                 }
//               )}

//             </div>

//           </div>

//           {/* Image */}
//           <div className="space-y-3">

//             <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
//               <FaImage className="text-pink-500" />
//               Upload Image
//             </label>

//             <input
//               type="file"
//               onChange={(e) => {

//                 setImage(
//                   e.target.files[0]
//                 );

//                 setPreview(
//                   URL.createObjectURL(
//                     e.target.files[0]
//                   )
//                 );
//               }}
//               className="w-full bg-[#FAFBFD] border border-gray-200 rounded-2xl px-5 py-4 text-sm font-semibold outline-none"
//             />

//             {preview && (
//               <img
//                 src={preview}
//                 alt="preview"
//                 className="w-full h-[260px] object-cover rounded-3xl border border-pink-100"
//               />
//             )}

//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-[#FF416C] to-[#FF2A85] hover:opacity-95 text-white py-4 rounded-2xl text-sm font-extrabold shadow-lg shadow-pink-200 transition-all"
//           >
//             Update Prompt
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// }

// app/admin/prompts/edit/[id]/page.jsx

"use client";

import { useParams, useRouter } from "next/navigation";

import {
  useEffect,
  useState,
} from "react";

import {
  FaWandMagicSparkles,
  FaTags,
  FaImage,
} from "react-icons/fa6";

import {
  MdCategory,
  MdOutlineDescription,
} from "react-icons/md";

const toolOptions = [
    "Midjourney",
    "DALL·E 3",
    "Leonardo AI",
    "Flux",
    "Gemini AI",
    "Stable Diffusion",
    "Adobe Firefly",
    "Ideogram",
    "ChatGpt"
  ];

  const badgeOptions = [
    "Trending",
    "New",
    "Hot",
    "Popular",
    "Featured",
    "Premium",
    "Viral",
  ];

  const tagOptions = [
    "girls",
    "boys",
    "couple",
    "friend",
    "anime",
    "cinematic",
    "Indian",
    "saree",
    "ghibli",
    "art",
    "scrapbook",
    "chibi",
    "nature",
    "collage",
    "ocation",
    "realistic",
    "fantasy",
    "luxury",
    "dark",
    "4k",
    "gym",
    "Wallpaper",
    "portrait",
    "cute",
    "rainy",
    "neon",
    "soft lighting",
  ];

const badgeColors = [
  "bg-pink-600",
  "bg-red-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-emerald-500",
  "bg-amber-500",
];

export default function EditPromptPage() {

  const params = useParams();

  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  const [categories, setCategories] =
    useState([]);

  const [image, setImage] =
    useState(null);

  const [preview, setPreview] =
    useState("");

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      prompt: "",
      categoryId: "",
      tool: "",
      badge: "",
      badgeBg: "",
      tags: "",
    });

  useEffect(() => {

    if (params?.id) {

      fetchCategories();
      fetchPrompt();

    }

  }, [params?.id]);

  // CLEANUP
  useEffect(() => {

    return () => {

      if (
        preview?.startsWith(
          "blob:"
        )
      ) {

        URL.revokeObjectURL(
          preview
        );

      }

    };

  }, [preview]);

  // FETCH CATEGORIES
  const fetchCategories =
    async () => {

      try {

        const res =
          await fetch(
            "/api/categories"
          );

        const result =
          await res.json();

        if (
          result.success
        ) {

          setCategories(
            result.data
          );

        }

      } catch (error) {

        console.log(error);

      }
    };

  // FETCH PROMPT
  const fetchPrompt =
    async () => {

      try {

        setLoading(true);

        const res =
          await fetch(
            `/api/prompts/${params.id}`
          );

        const result =
          await res.json();

        if (
          !result.success
        ) {
          return;
        }

        const prompt =
          result.data;

        setPreview(
          prompt.image
        );

        setFormData({
          title:
            prompt.title || "",

          description:
            prompt.description ||
            "",

          prompt:
            prompt.prompt || "",

          categoryId:
            prompt.categoryId
              ?._id ||
            prompt.categoryId ||
            "",

          tool:
            prompt.tool || "",

          badge:
            prompt.badge || "",

          badgeBg:
            prompt.badgeBg ||
            "",

          tags:
            prompt.tags?.join(
              ", "
            ) || "",
        });

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

  // HANDLE CHANGE
  const handleChange = (
    e
  ) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // TOGGLE TAG
  const toggleTag = (
    tag
  ) => {

    const currentTags =
      formData.tags
        .split(",")

        .map((t) =>
          t.trim()
        )

        .filter(Boolean);

    if (
      currentTags.includes(
        tag
      )
    ) {

      setFormData({
        ...formData,

        tags: currentTags
          .filter(
            (t) =>
              t !== tag
          )
          .join(", "),
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

  // SUBMIT
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setSubmitting(
          true
        );

        // SELECTED CATEGORY
        const selectedCategory =
          categories.find(
            (cat) =>
              cat._id ===
              formData.categoryId
          );

        // CLEAN TAGS
        const cleanTags = [
          ...new Set(

            formData.tags
              .split(",")

              .map((tag) =>
                tag
                  .trim()
                  .toLowerCase()
              )

              .filter(
                Boolean
              )

          ),
        ];

        const data =
          new FormData();

        data.append(
          "title",
          formData.title
            .trim()
        );

        data.append(
          "description",
          formData.description
            .trim()
        );

        data.append(
          "prompt",
          formData.prompt
            .trim()
        );

        data.append(
          "categoryId",
          formData.categoryId
        );

        data.append(
          "categorySlug",
          selectedCategory?.slug ||
            ""
        );

        data.append(
          "categoryTitle",
          selectedCategory?.title ||
            ""
        );

        data.append(
          "tool",

          formData.tool
            .trim()
            .toLowerCase()
        );

        data.append(
          "badge",

          formData.badge
            .trim()
            .toLowerCase()
        );

        data.append(
          "badgeBg",
          formData.badgeBg
        );

        data.append(
          "tags",
          JSON.stringify(
            cleanTags
          )
        );

        // IMAGE
        if (image) {

          data.append(
            "image",
            image
          );

        }

        const res =
          await fetch(
            `/api/prompts/${params.id}`,
            {
              method:
                "PUT",

              body: data,
            }
          );

        const result =
          await res.json();

        if (
          !result.success
        ) {

          alert(
            result.message
          );

          return;
        }

        router.push(
          "/admin/prompts"
        );

      } catch (error) {

        console.log(error);

      } finally {

        setSubmitting(
          false
        );

      }
    };

  // LOADING
  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center text-sm font-bold text-pink-500">

        Loading Prompt...

      </div>

    );
  }

  return (

    <div className="min-h-screen bg-[#FAFBFD] py-28 px-4">

      <div className="max-w-4xl mx-auto bg-white border border-pink-100 rounded-[35px] p-6 lg:p-10 shadow-xl shadow-pink-100/40">

        <div className="mb-8">

          <h1 className="text-4xl font-black tracking-tight text-slate-900">

            Edit Prompt

          </h1>

          <p className="text-sm text-gray-400 mt-2 font-medium">

            Update your AI prompt details beautifully ✨

          </p>

        </div>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-6"
        >

          {/* TITLE */}
          <div className="space-y-2">

            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">

              <FaWandMagicSparkles className="text-pink-500" />

              Prompt Title

            </label>

            <input
              type="text"
              name="title"
              value={
                formData.title
              }
              onChange={
                handleChange
              }
              className="w-full bg-[#FAFBFD] border border-gray-200 focus:border-pink-400 outline-none rounded-2xl px-5 py-4 text-sm font-semibold"
            />

          </div>

          {/* DESCRIPTION */}
          <div className="space-y-2">

            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">

              <MdOutlineDescription className="text-pink-500 text-lg" />

              Description

            </label>

            <textarea
              name="description"
              value={
                formData.description
              }
              onChange={
                handleChange
              }
              className="w-full h-28 resize-none bg-[#FAFBFD] border border-gray-200 focus:border-pink-400 outline-none rounded-2xl px-5 py-4 text-sm font-medium"
            />

          </div>

          {/* PROMPT */}
          <div className="space-y-2">

            <label className="text-sm font-bold text-slate-700">

              Full Prompt

            </label>

            <textarea
              name="prompt"
              value={
                formData.prompt
              }
              onChange={
                handleChange
              }
              className="w-full h-52 resize-none bg-[#FAFBFD] border border-gray-200 focus:border-pink-400 outline-none rounded-2xl px-5 py-4 text-sm font-medium"
            />

          </div>

          {/* CATEGORY */}
          <div className="space-y-2">

            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">

              <MdCategory className="text-pink-500 text-lg" />

              Select Category

            </label>

            <select
              name="categoryId"
              value={
                formData.categoryId
              }
              onChange={
                handleChange
              }
              className="w-full bg-[#FAFBFD] border border-gray-200 rounded-2xl px-5 py-4 text-sm font-semibold outline-none"
            >

              <option value="">
                Select Category
              </option>

              {categories.map(
                (
                  category
                ) => (

                  <option
                    key={
                      category._id
                    }
                    value={
                      category._id
                    }
                  >

                    {
                      category.title
                    }

                  </option>

                )
              )}

            </select>

          </div>

          {/* IMAGE */}
          <div className="space-y-3">

            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">

              <FaImage className="text-pink-500" />

              Upload Image

            </label>

            <input
              type="file"
              onChange={(
                e
              ) => {

                const file =
                  e.target
                    .files?.[0];

                if (
                  !file
                )
                  return;

                setImage(
                  file
                );

                setPreview(
                  URL.createObjectURL(
                    file
                  )
                );
              }}
              className="w-full bg-[#FAFBFD] border border-gray-200 rounded-2xl px-5 py-4 text-sm font-semibold outline-none"
            />

            {preview && (

              <img
                src={
                  preview
                }
                alt="preview"
                className="w-full h-[260px] object-cover rounded-3xl border border-pink-100"
              />

            )}

          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={
              submitting
            }
            className={`w-full py-4 rounded-2xl text-sm font-extrabold shadow-lg transition-all ${
              submitting
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-[#FF416C] to-[#FF2A85] text-white shadow-pink-200 hover:opacity-95"
            }`}
          >

            {submitting
              ? "Updating Prompt..."
              : "Update Prompt"}

          </button>

        </form>

      </div>

    </div>
  );
}