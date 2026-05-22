import cloudinary from "../lib/cloudinary";
import connectDB from "../lib/mongodb";
import Category from "../models/Category";
import Prompt from "../models/Prompt";


// CREATE CATEGORY
export const createCategory = async (req) => {
  try {
    await connectDB();

    const formData = await req.formData();

    const title = formData.get("title");
    const description = formData.get("description");
    const slug = formData.get("slug");
    const tool = formData.get("tool");
    const badge = formData.get("badge");
    const badgeBg = formData.get("badgeBg");
    const imageFile = formData.get("image");

    const tags = JSON.parse(formData.get("tags") || "[]");

    if (!imageFile) {
      return Response.json(
        {
          success: false,
          message: "Image is required",
        },
        { status: 400 }
      );
    }

    // image buffer
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // upload cloudinary
    const uploadResult = await new Promise(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "ai-categories",
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          )
          .end(buffer);
      }
    );

    const likes = parseFloat((Math.random() * 4 + 1).toFixed(1));
    const copies = parseFloat((Math.random() * 4 + 1).toFixed(1));
    // save category
    const category = await Category.create({
      title,
      description,
      slug,
      tool,
      badge,
      badgeBg,
      tags,
      likes,
      copies,
      image: uploadResult.secure_url,
    });

    return Response.json(
      {
        success: true,
        message: "Category created successfully",
        data: category,
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
};


// GET ALL CATEGORIES
export const getAllCategories = async () => {
  try {
    await connectDB();

    const categories = await Category.find().sort({
      createdAt: -1,
    });

    return Response.json(
      {
        success: true,
        data: categories,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
};


// GET SINGLE CATEGORY
export const getSingleCategory = async (id) => {
  try {
    await connectDB();

    const category = await Category.findById(id);

    if (!category) {
      return Response.json(
        {
          success: false,
          message: "Category not found",
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        data: category,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
};


// UPDATE CATEGORY
export const updateCategory = async (req, id) => {
  try {
    await connectDB();

    const formData = await req.formData();

    const title = formData.get("title");
    const description = formData.get("description");
    const slug = formData.get("slug");
    const tool = formData.get("tool");
    const badge = formData.get("badge");
    const badgeBg = formData.get("badgeBg");

    const tags = JSON.parse(formData.get("tags") || "[]");

    const updateData = {
      title,
      description,
      slug,
      tool,
      badge,
      badgeBg,
      tags,
    };

    const imageFile = formData.get("image");

    // new image upload
    if (imageFile && imageFile.name) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadResult = await new Promise(
        (resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              {
                folder: "ai-categories",
              },
              (error, result) => {
                if (error) reject(error);
                else resolve(result);
              }
            )
            .end(buffer);
        }
      );

      updateData.image = uploadResult.secure_url;
    }

    const updatedCategory =
      await Category.findByIdAndUpdate(
        id,
        updateData,
        { new: true }
      );

    return Response.json(
      {
        success: true,
        message: "Category updated",
        data: updatedCategory,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
};


// DELETE CATEGORY + RELATED PROMPTS
export const deleteCategory = async (id) => {
  try {
    await connectDB();

    const category =
      await Category.findByIdAndDelete(id);

    if (!category) {
      return Response.json(
        {
          success: false,
          message: "Category not found",
        },
        { status: 404 }
      );
    }

    // delete related prompts
    await Prompt.deleteMany({
      categoryId: id,
    });

    return Response.json(
      {
        success: true,
        message:
          "Category and related prompts deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
};