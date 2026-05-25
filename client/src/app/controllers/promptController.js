import cloudinary from "../lib/cloudinary";
import connectDB from "../lib/mongodb"
import Category from "../models/Category";
import Prompt from "../models/Prompt";



export const createPrompt = async(req) => {
    try {
        await connectDB();

        const formData = await req.formData();

        const title = formData.get("title");
        const description = formData.get("description");
        const promptText = formData.get("prompt");
        const categoryId = formData.get("categoryId");
        const tool = formData.get("tool");
        const badge = formData.get("badge");
        const badgeBg = formData.get("badgeBg");
        const imageFile = formData.get("image");

        const tags = JSON.parse(formData.get("tags") || "[]");

        if(!imageFile){
            return Response.json({
                success: false,
                message: "Image is required"
            }, {statue: 400})
        }

        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadResult = await new Promise(
            (resolve, reject) => {
                cloudinary.uploader
                .upload_stream(
                    {
                        folder: "prompt-photo",
                    }, (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                )
                .end(buffer);
            }
        );

        const category = await Category.findById(categoryId)
        if (!category) {
          return Response.json(
            {
              success: false,
              message: "Category not found",
            },
            {
              status: 404,
            }
          );
        }
        const categorySlug = category.slug

        const likes = (Math.random() * 4 + 1).toFixed(1);
        const copies = (Math.random() * 4 + 1).toFixed(1);


        // save prompt
        const newPrompt = await Prompt.create({
            title,
            description,
            prompt: promptText,
            categoryId,
            categorySlug,
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
            message: "Prompt created successfully",
            data: newPrompt,
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
}

export const getAllPrompt = async(req) => {
    try {
        await connectDB();
        const prompts = await Prompt.find().sort({
            createdAt: -1
        })

        return Response.json(
            {
                success: true,
                data: prompts,
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
}

// GET SINGLE PROMPT BY ID

export const getSinglePrompt =
  async (id) => {

    try {

      await connectDB();

      const prompt =
        await Prompt.findById(id)
          .populate(
            "categoryId"
          );

      if (!prompt) {

        return Response.json(
          {
            success: false,
            message:
              "Prompt not found",
          },
          {
            status: 404,
          }
        );
      }

      return Response.json(
        {
          success: true,
          data: prompt,
        },
        {
          status: 200,
        }
      );

    } catch (error) {

      console.log(error);

      return Response.json(
        {
          success: false,
          message:
            error.message,
        },
        {
          status: 500,
        }
      );
    }
  };

// UPDATE PROMPT

// export const updatePrompt = async (
//   req,
//   id
// ) => {

//   try {

//     await connectDB();

//     const formData =
//       await req.formData();

//     const title =
//       formData.get("title");

//     const description =
//       formData.get(
//         "description"
//       );

//     const promptText =
//       formData.get("prompt");

//     const categoryId =
//       formData.get(
//         "categoryId"
//       );

//     const tool =
//       formData.get("tool");

//     const badge =
//       formData.get("badge");

//     const badgeBg =
//       formData.get(
//         "badgeBg"
//       );

//     const tags = JSON.parse(
//       formData.get("tags") ||
//       "[]"
//     );

//     const updateData = {
//       title,
//       description,
//       prompt: promptText,
//       categoryId,
//       tool,
//       badge,
//       badgeBg,
//       tags,
//     };

//     const imageFile =
//       formData.get("image");

//     // upload new image
//     if (
//       imageFile &&
//       imageFile.name
//     ) {

//       const bytes =
//         await imageFile.arrayBuffer();

//       const buffer =
//         Buffer.from(bytes);

//       const uploadResult =
//         await new Promise(
//           (
//             resolve,
//             reject
//           ) => {

//             cloudinary.uploader
//               .upload_stream(
//                 {
//                   folder:
//                     "ai-prompts",
//                 },
//                 (
//                   error,
//                   result
//                 ) => {

//                   if (error)
//                     reject(
//                       error
//                     );

//                   else
//                     resolve(
//                       result
//                     );
//                 }
//               )
//               .end(buffer);
//           }
//         );

//       updateData.image =
//         uploadResult.secure_url;
//     }

//     const updatedPrompt =
//       await Prompt.findByIdAndUpdate(
//         id,
//         updateData,
//         {
//           new: true,
//         }
//       );

//     return Response.json(
//       {
//         success: true,
//         message:
//           "Prompt updated successfully",
//         data: updatedPrompt,
//       },
//       {
//         status: 200,
//       }
//     );

//   } catch (error) {

//     console.log(error);

//     return Response.json(
//       {
//         success: false,
//         message:
//           error.message,
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// };

// UPDATE PROMPT CONTROLLER

export const updatePrompt = async (
  req,
  id
) => {

  try {

    await connectDB();

    const formData =
      await req.formData();

    const title =
      formData.get("title");

    const description =
      formData.get(
        "description"
      );

    const promptText =
      formData.get("prompt");

    const categoryId =
      formData.get(
        "categoryId"
      );

    const tool =
      formData
        .get("tool")
        ?.trim()
        .toLowerCase();

    const badge =
      formData
        .get("badge")
        ?.trim()
        .toLowerCase();

    const badgeBg =
      formData.get(
        "badgeBg"
      );

    const tags = JSON.parse(
      formData.get("tags") ||
      "[]"
    );

    // CATEGORY
    const category =
      await Category.findById(
        categoryId
      );

    if (!category) {

      return Response.json(
        {
          success: false,
          message:
            "Category not found",
        },
        {
          status: 404,
        }
      );
    }

    const categorySlug =
      category.slug;

    const categoryTitle =
      category.title;

    // UPDATE DATA
    const updateData = {

      title:
        title?.trim(),

      description:
        description?.trim(),

      prompt:
        promptText?.trim(),

      categoryId,

      categorySlug,

      categoryTitle,

      tool,

      badge,

      badgeBg,

      tags,

    };

    // IMAGE
    const imageFile =
      formData.get(
        "image"
      );

    if (
      imageFile &&
      imageFile.name
    ) {

      const bytes =
        await imageFile.arrayBuffer();

      const buffer =
        Buffer.from(bytes);

      const uploadResult =
        await new Promise(
          (
            resolve,
            reject
          ) => {

            cloudinary.uploader
              .upload_stream(
                {
                  folder:
                    "prompt-photo",
                },
                (
                  error,
                  result
                ) => {

                  if (error)
                    reject(
                      error
                    );

                  else
                    resolve(
                      result
                    );
                }
              )
              .end(buffer);
          }
        );

      updateData.image =
        uploadResult.secure_url;
    }

    // UPDATE
    const updatedPrompt =
      await Prompt.findByIdAndUpdate(
        id,
        updateData,
        {
          new: true,
        }
      );

    if (
      !updatedPrompt
    ) {

      return Response.json(
        {
          success: false,
          message:
            "Prompt not found",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json(
      {
        success: true,
        message:
          "Prompt updated successfully",

        data:
          updatedPrompt,
      },
      {
        status: 200,
      }
    );

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        success: false,
        message:
          error.message,
      },
      {
        status: 500,
      }
    );
  }
};

// DELETE PROMPT

export const deletePrompt =
  async (id) => {

    try {

      await connectDB();

      const prompt =
        await Prompt.findByIdAndDelete(
          id
        );

      if (!prompt) {

        return Response.json(
          {
            success: false,
            message:
              "Prompt not found",
          },
          {
            status: 404,
          }
        );
      }

      return Response.json(
        {
          success: true,
          message:
            "Prompt deleted successfully",
        },
        {
          status: 200,
        }
      );

    } catch (error) {

      console.log(error);

      return Response.json(
        {
          success: false,
          message:
            error.message,
        },
        {
          status: 500,
        }
      );
    }
  };