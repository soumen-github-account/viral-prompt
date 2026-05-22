import mongoose from "mongoose";

const promptSchema = new mongoose.Schema({
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref: "Category"},
    title: {type: String, required: true},
    description: {type: String, required: true},
    prompt: {type: String, required: true},
    image: {type: String, required: true},
    tool: {type: String, required: true},
    badge: {type: String,default: "",},

    badgeBg: {type: String, default: "" },
    tags: [String],

    likes: {type: Number, default: 21}
    
}, {timestamps: true})

const Prompt =
  mongoose.models.Prompt ||
  mongoose.model("Prompt", promptSchema);

export default Prompt
