// app/api/prompts/[id]/route.js

import { deletePrompt, getSinglePrompt, updatePrompt } from "@/app/controllers/promptController";

export async function GET(
  req,
  context
) {

  const { id } =
    await context.params;

  return await getSinglePrompt(
    id
  );
}

export async function PUT(
  req,
  context
) {

  const { id } =
    await context.params;

  return await updatePrompt(
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

  return await deletePrompt(
    id
  );
}