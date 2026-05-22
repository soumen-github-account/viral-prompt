// app/api/categories/route.js

import { createCategory, getAllCategories } from "@/app/controllers/categoryController";


export async function POST(req) {
  return await createCategory(req);
}

export async function GET() {
  return await getAllCategories();
}