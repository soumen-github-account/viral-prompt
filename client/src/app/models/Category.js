import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    badge: {type: String, required: true},
    badgeBg: {type: String, default: ""},
    tags: [String],
    likes: {type: Number, default: 0},

    copies: {type: Number, default: 0},
}, {timestamps: true})

const Category =
  mongoose.models.Category ||
  mongoose.model("Category", categorySchema);

export default Category
