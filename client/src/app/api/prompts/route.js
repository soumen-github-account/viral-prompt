import { createPrompt, getAllPrompt } from "@/app/controllers/promptController";

export async function POST(req) {
  return await createPrompt(req);
}

export async function GET(req) {
    return await getAllPrompt(req);
}
