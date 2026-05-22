// // app/api/categories/[id]/route.js

// import { deleteCategory, getSingleCategory, updateCategory } from "@/app/controllers/categoryController";


// export async function GET(req, { params }) {
//   return await getSingleCategory(params.id);
// }

// export async function PUT(req, { params }) {
//   return await updateCategory(req, params.id);
// }

// export async function DELETE(req, { params }) {
//   return await deleteCategory(params.id);
// }

// app/api/categories/[id]/route.js

import {
  deleteCategory,
  getSingleCategory,
  updateCategory,
} from "@/app/controllers/categoryController";

export async function GET(
  req,
  context
) {

  const { id } =
    await context.params;

  return await getSingleCategory(
    id
  );

}

export async function PUT(
  req,
  context
) {

  const { id } =
    await context.params;

  return await updateCategory(
    req,
    id
  );

}

export async function DELETE(
  req,
  context
) {

  const { id } =
    await context.params;

  return await deleteCategory(
    id
  );

}