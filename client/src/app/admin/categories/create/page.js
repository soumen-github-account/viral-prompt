
"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { TbLoader3 } from "react-icons/tb";

export default function CreateCategoryPage() {

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
    "cyberpunk",
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

  const [selectedTags, setSelectedTags] =
    useState([]);

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    slug: "",
    tool: "",
    badge: "",
    badgeBg: "",
    tags: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // --------------------------
  // TOOL SELECT
  // --------------------------

  const selectTool = (tool) => {

    setFormData({
      ...formData,
      tool,
    });

  };

  // --------------------------
  // BADGE SELECT
  // --------------------------

  const selectBadge = (badge) => {

    setFormData({
      ...formData,
      badge,
    });

  };

  // --------------------------
  // TAG SELECT / REMOVE
  // --------------------------

  const toggleTag = (tag) => {

    let updatedTags = [...selectedTags];

    if (updatedTags.includes(tag)) {

      updatedTags = updatedTags.filter(
        (t) => t !== tag
      );

    } else {

      updatedTags.push(tag);

    }

    setSelectedTags(updatedTags);

    setFormData({
      ...formData,
      tags: updatedTags.join(", "),
    });

  };

  // --------------------------
  // BADGE COLOR SELECT
  // --------------------------

  const selectBadgeColor = (color) => {

    setFormData({
      ...formData,
      badgeBg: color,
    });

  };

  // --------------------------
  // SUBMIT
  // --------------------------

  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true)
    try {

      const data = new FormData();

      data.append("title", formData.title);

      data.append(
        "description",
        formData.description
      );

      data.append("slug", formData.slug);

      data.append("tool", formData.tool);

      data.append("badge", formData.badge);

      data.append(
        "badgeBg",
        formData.badgeBg
      );

      data.append(
        "tags",
        JSON.stringify(selectedTags)
      );

      data.append("image", image);

      const res = await fetch(
        "/api/categories",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();

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
    <div className="py-25 px-4 w-full lg:px-40">

      <h1 className="text-2xl font-semibold mb-8">
        Create Category
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* TITLE */}

        <div className="space-y-2">

          <label className="text-sm font-bold">
            Title
          </label>

          <input
            type="text"
            name="title"
            placeholder="Red Saree Girls"
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-2xl outline-none focus:border-pink-500"
          />

        </div>

        {/* DESCRIPTION */}

        <div className="space-y-2">

          <label className="text-sm font-bold">
            Description
          </label>

          <textarea
            name="description"
            placeholder="Description..."
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-2xl outline-none focus:border-pink-500 h-30"
          />

        </div>

        {/* SLUG */}

        <div className="space-y-2">

          <label className="text-sm font-bold">
            Slug
          </label>

          <input
            type="text"
            name="slug"
            placeholder="red-saree-girls"
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-2xl outline-none focus:border-pink-500"
          />

        </div>

        {/* TOOL */}

        <div className="space-y-3">

          <label className="text-sm font-bold">
            Tool
          </label>

          <input
            type="text"
            name="tool"
            value={formData.tool}
            placeholder="Select Tool"
            readOnly
            className="w-full border border-gray-200 p-3 rounded-2xl bg-gray-50"
          />

          <div className="flex flex-wrap gap-2">

            {toolOptions.map((tool) => (

              <button
                type="button"
                key={tool}
                onClick={() =>
                  selectTool(tool)
                }
                className={`px-4 py-2 rounded-full text-xs font-bold border transition ${
                  formData.tool === tool
                    ? "bg-pink-600 text-white border-pink-600"
                    : "bg-white border-gray-200 text-gray-500"
                }`}
              >
                {tool}
              </button>

            ))}

          </div>

        </div>

        {/* BADGE */}

        <div className="space-y-3">

          <label className="text-sm font-bold">
            Badge
          </label>

          <input
            type="text"
            name="badge"
            value={formData.badge}
            placeholder="Select Badge"
            readOnly
            className="w-full border border-gray-200 p-3 rounded-2xl bg-gray-50"
          />

          <div className="flex flex-wrap gap-2">

            {badgeOptions.map((badge) => (

              <button
                type="button"
                key={badge}
                onClick={() =>
                  selectBadge(badge)
                }
                className={`px-4 py-2 rounded-full text-xs font-bold border transition ${
                  formData.badge === badge
                    ? "bg-pink-600 text-white border-pink-600"
                    : "bg-white border-gray-200 text-gray-500"
                }`}
              >
                {badge}
              </button>

            ))}

          </div>

        </div>

        {/* BADGE COLOR */}

        <div className="space-y-3">

          <label className="text-sm font-bold">
            Badge Color
          </label>

          <input
            type="text"
            name="badgeBg"
            value={formData.badgeBg}
            readOnly
            className="w-full border border-gray-200 p-3 rounded-2xl bg-gray-50"
          />

          <div className="flex items-center gap-3">

            {badgeColors.map((color) => (

              <button
                type="button"
                key={color}
                onClick={() =>
                  selectBadgeColor(color)
                }
                className={`w-10 h-10 rounded-full ${color} border-4 transition ${
                  formData.badgeBg === color
                    ? "border-black scale-110"
                    : "border-white"
                }`}
              />

            ))}

          </div>

        </div>

        {/* TAGS */}

        <div className="space-y-3">

          <label className="text-sm font-bold">
            Tags
          </label>

          <input
            type="text"
            name="tags"
            value={formData.tags}
            readOnly
            placeholder="Selected tags..."
            className="w-full border border-gray-200 p-3 rounded-2xl bg-gray-50"
          />

          <div className="flex flex-wrap gap-2">

            {tagOptions.map((tag) => (

              <button
                type="button"
                key={tag}
                onClick={() =>
                  toggleTag(tag)
                }
                className={`px-4 py-2 rounded-full text-xs font-bold border transition ${
                  selectedTags.includes(tag)
                    ? "bg-pink-600 text-white border-pink-600"
                    : "bg-white border-gray-200 text-gray-500"
                }`}
              >
                #{tag}
              </button>

            ))}

          </div>

        </div>

        {/* IMAGE */}

        <div className="space-y-2">

          <label className="text-sm font-bold">
            Upload Image
          </label>

          <input
            type="file"
            onChange={(e) =>
              setImage(e.target.files[0])
            }
            className="w-full border border-gray-200 p-3 rounded-2xl"
          />

        </div>

        {/* BUTTON */}

        <button
          disabled={loading}
          type="submit"
          className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-pink-200 hover:scale-[1.02] transition"
        >
          {loading ? 
            (
              <span className="w-full flex items-center gap-4">
                <TbLoader3 className="animate-spin text-[25px] transition-all duration-200" />
                Please wait
              </span>
            ) : "Create Category"
          }
        </button>

      </form>

    </div>
  );
}