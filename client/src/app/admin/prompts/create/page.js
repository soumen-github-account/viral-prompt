// // app/admin/prompts/create/page.js

// "use client";

// import { useEffect, useState } from "react";

// export default function CreatePromptPage() {

//   const [categories, setCategories] =
//     useState([]);

//   const [image, setImage] =
//     useState(null);

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
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {

//     try {

//       const res = await fetch(
//         "/api/categories"
//       );

//       const result = await res.json();

//       setCategories(result.data);

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
//             .map((tag) => tag.trim())
//         )
//       );

//       data.append("image", image);

//       const res = await fetch(
//         "/api/prompts",
//         {
//           method: "POST",
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
//     <div className="py-25 min-h-screen px-4 max-w-3xl">

//       <h1 className="text-3xl font-bold mb-6">
//         Create Prompt
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="space-y-4"
//       >

//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           onChange={handleChange}
//           className="w-full border p-3 rounded-lg"
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           onChange={handleChange}
//           className="w-full border p-3 rounded-lg"
//         />

//         <textarea
//           name="prompt"
//           placeholder="Prompt"
//           onChange={handleChange}
//           className="w-full border p-3 rounded-lg h-40"
//         />

//         <select
//           name="categoryId"
//           onChange={handleChange}
//           className="w-full border p-3 rounded-lg"
//         >

//           <option value="">
//             Select Category
//           </option>

//           {categories.map((category) => (
//             <option
//               key={category._id}
//               value={category._id}
//             >
//               {category.title}
//             </option>
//           ))}

//         </select>

//         <input
//           type="text"
//           name="tool"
//           placeholder="Tool"
//           onChange={handleChange}
//           className="w-full border p-3 rounded-lg"
//         />

//         <input
//           type="text"
//           name="badge"
//           placeholder="Badge"
//           onChange={handleChange}
//           className="w-full border p-3 rounded-lg"
//         />

//         <input
//           type="text"
//           name="badgeBg"
//           placeholder="Badge Bg"
//           onChange={handleChange}
//           className="w-full border p-3 rounded-lg"
//         />

//         <input
//           type="text"
//           name="tags"
//           placeholder="girls, ai, cinematic"
//           onChange={handleChange}
//           className="w-full border p-3 rounded-lg"
//         />

//         <input
//           type="file"
//           onChange={(e) =>
//             setImage(
//               e.target.files[0]
//             )
//           }
//           className="w-full border p-3 rounded-lg"
//         />

//         <button
//           type="submit"
//           className="bg-black text-white px-5 py-3 rounded-lg"
//         >
//           Create Prompt
//         </button>

//       </form>

//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TbLoader3 } from "react-icons/tb";

export default function CreatePromptPage() {

  const toolOptions = [
    "Midjourney",
    "DALL·E 3",
    "Leonardo AI",
    "Flux",
    "Gemini AI",
    "Stable Diffusion",
    "Adobe Firefly",
    "Ideogram",
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
    "anime",
    "cinematic",
    "Indian",
    "saree",
    "couple",
    "realistic",
    "fantasy",
    "luxury",
    "dark",
    "4k",
    "Trending",
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
    "bg-amber-500",
    "bg-emerald-500",
  ];

  const [categories, setCategories] =
    useState([]);

  const [selectedTags, setSelectedTags] =
    useState([]);

  const [image, setImage] =
    useState(null);

  const [preview, setPreview] =
    useState(null);

  const [loading, setLoading] = useState(false)

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

    fetchCategories();

  }, []);

  // -------------------------
  // FETCH CATEGORIES
  // -------------------------

  const fetchCategories = async () => {

    try {

      const res = await fetch(
        "/api/categories"
      );

      const result =
        await res.json();

      setCategories(result.data);

    } catch (error) {

      console.log(error);

    }

  };

  // -------------------------
  // INPUT CHANGE
  // -------------------------

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  // -------------------------
  // TOOL SELECT
  // -------------------------

  const selectTool = (tool) => {

    setFormData({
      ...formData,
      tool,
    });

  };

  // -------------------------
  // BADGE SELECT
  // -------------------------

  const selectBadge = (badge) => {

    setFormData({
      ...formData,
      badge,
    });

  };

  // -------------------------
  // TAG TOGGLE
  // -------------------------

  const toggleTag = (tag) => {

    let updatedTags = [
      ...selectedTags,
    ];

    if (
      updatedTags.includes(tag)
    ) {

      updatedTags =
        updatedTags.filter(
          (t) => t !== tag
        );

    } else {

      updatedTags.push(tag);

    }

    setSelectedTags(updatedTags);

    setFormData({
      ...formData,
      tags:
        updatedTags.join(", "),
    });

  };

  // -------------------------
  // BADGE COLOR
  // -------------------------

  const selectBadgeColor = (
    color
  ) => {

    setFormData({
      ...formData,
      badgeBg: color,
    });

  };

  // -------------------------
  // IMAGE
  // -------------------------

  const handleImage = (e) => {

    const file =
      e.target.files[0];

    setImage(file);

    if (file) {

      setPreview(
        URL.createObjectURL(file)
      );

    }

  };

  // -------------------------
  // SUBMIT
  // -------------------------

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();
    setLoading(true)
    try {

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
        "prompt",
        formData.prompt
      );

      data.append(
        "categoryId",
        formData.categoryId
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
          selectedTags
        )
      );

      data.append(
        "image",
        image
      );

      const res = await fetch(
        "/api/prompts",
        {
          method: "POST",
          body: data,
        }
      );

      const result =
        await res.json();

        if(result.success){
          toast.success(result.message)
        } else{
          toast.error(result.message)
        }
      console.log(result);
        setLoading(false)
    } catch (error) {
      toast.error(error)
      console.log(error);
      setLoading(false)
    }

  };

  return (
    <div className="min-h-screen bg-[#FAFBFD] py-25 px-4 lg:px-30">

      <div className="max-w-5xl mx-auto bg-white border border-gray-100 rounded-[36px] shadow-xl shadow-pink-100/30 p-6 lg:p-10">

        {/* HEADER */}

        <div className="mb-10">

          <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
            Create AI Prompt
          </h1>

          <p className="text-gray-400 text-sm mt-2 font-medium">
            Upload a new viral AI
            prompt collection.
          </p>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="space-y-7"
        >

          {/* TITLE */}

          <div className="space-y-2">

            <label className="text-sm font-bold text-slate-800">
              Prompt Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Cyberpunk Red Saree Girl"
              onChange={
                handleChange
              }
              className="w-full border border-gray-200 p-4 rounded-2xl outline-none focus:border-pink-500"
            />

          </div>

          {/* DESCRIPTION */}

          <div className="space-y-2">

            <label className="text-sm font-bold text-slate-800">
              Description
            </label>

            <textarea
              name="description"
              placeholder="Short description..."
              onChange={
                handleChange
              }
              className="w-full border border-gray-200 p-4 rounded-2xl outline-none focus:border-pink-500 h-28"
            />

          </div>

          {/* FULL PROMPT */}

          <div className="space-y-2">

            <label className="text-sm font-bold text-slate-800">
              Full Prompt
            </label>

            <textarea
              name="prompt"
              placeholder="Write full AI prompt here..."
              onChange={
                handleChange
              }
              className="w-full border border-gray-200 p-4 rounded-2xl outline-none focus:border-pink-500 h-50"
            />

          </div>

          {/* CATEGORY */}

          <div className="space-y-2">

            <label className="text-sm font-bold text-slate-800">
              Select Category
            </label>

            <select
              name="categoryId"
              onChange={
                handleChange
              }
              className="w-full border border-gray-200 p-4 rounded-2xl outline-none focus:border-pink-500 bg-white"
            >

              <option value="">
                Choose Category
              </option>

              {categories.map(
                (category) => (
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

          {/* TOOL */}

          <div className="space-y-3">

            <label className="text-sm font-bold text-slate-800">
              AI Tool
            </label>

            <input
              type="text"
              value={
                formData.tool
              }
              readOnly
              placeholder="Select Tool"
              className="w-full border border-gray-200 p-4 rounded-2xl bg-gray-50"
            />

            <div className="flex flex-wrap gap-2">

              {toolOptions.map(
                (tool) => (
                  <button
                    key={tool}
                    type="button"
                    onClick={() =>
                      selectTool(
                        tool
                      )
                    }
                    className={`px-4 py-2 rounded-full text-xs font-bold border transition ${
                      formData.tool ===
                      tool
                        ? "bg-pink-600 text-white border-pink-600"
                        : "bg-white border-gray-200 text-gray-500"
                    }`}
                  >
                    {tool}
                  </button>
                )
              )}

            </div>

          </div>

          {/* BADGE */}

          <div className="space-y-3">

            <label className="text-sm font-bold text-slate-800">
              Badge
            </label>

            <input
              type="text"
              value={
                formData.badge
              }
              readOnly
              placeholder="Select Badge"
              className="w-full border border-gray-200 p-4 rounded-2xl bg-gray-50"
            />

            <div className="flex flex-wrap gap-2">

              {badgeOptions.map(
                (badge) => (
                  <button
                    key={badge}
                    type="button"
                    onClick={() =>
                      selectBadge(
                        badge
                      )
                    }
                    className={`px-4 py-2 rounded-full text-xs font-bold border transition ${
                      formData.badge ===
                      badge
                        ? "bg-pink-600 text-white border-pink-600"
                        : "bg-white border-gray-200 text-gray-500"
                    }`}
                  >
                    {badge}
                  </button>
                )
              )}

            </div>

          </div>

          {/* BADGE COLOR */}

          <div className="space-y-3">

            <label className="text-sm font-bold text-slate-800">
              Badge Color
            </label>

            <input
              type="text"
              value={
                formData.badgeBg
              }
              readOnly
              className="w-full border border-gray-200 p-4 rounded-2xl bg-gray-50"
            />

            <div className="flex items-center gap-3">

              {badgeColors.map(
                (color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() =>
                      selectBadgeColor(
                        color
                      )
                    }
                    className={`w-10 h-10 rounded-full ${color} border-4 transition ${
                      formData.badgeBg ===
                      color
                        ? "border-black scale-110"
                        : "border-white"
                    }`}
                  />
                )
              )}

            </div>

          </div>

          {/* TAGS */}

          <div className="space-y-3">

            <label className="text-sm font-bold text-slate-800">
              Tags
            </label>

            <input
              type="text"
              value={
                formData.tags
              }
              readOnly
              placeholder="Selected tags..."
              className="w-full border border-gray-200 p-4 rounded-2xl bg-gray-50"
            />

            <div className="flex flex-wrap gap-2">

              {tagOptions.map(
                (tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() =>
                      toggleTag(
                        tag
                      )
                    }
                    className={`px-4 py-2 rounded-full text-xs font-bold border transition ${
                      selectedTags.includes(
                        tag
                      )
                        ? "bg-pink-600 text-white border-pink-600"
                        : "bg-white border-gray-200 text-gray-500"
                    }`}
                  >
                    #{tag}
                  </button>
                )
              )}

            </div>

          </div>

          {/* IMAGE */}

          <div className="space-y-3">

            <label className="text-sm font-bold text-slate-800">
              Upload Preview Image
            </label>

            <input
              type="file"
              onChange={
                handleImage
              }
              className="w-full border border-gray-200 p-4 rounded-2xl"
            />

            {preview && (

              <div className="relative overflow-hidden rounded-3xl border border-gray-100 mt-4">

                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-[300px] object-cover"
                />

              </div>

            )}

          </div>

          {/* BUTTON */}

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF416C] to-[#FF2A85] hover:opacity-95 text-white py-4 rounded-2xl font-extrabold shadow-lg shadow-pink-200 transition"
          >
            {loading ? (
              <span className="flex items-center w-full justify-center gap-4">
                <TbLoader3 className="text-[25px] animate-spin transition-all duration-200" /> Please wait...
              </span>
             ): 
              "Create Prompt"
            }
            
          </button>

        </form>

      </div>

    </div>
  );
}