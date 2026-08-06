import { NextRequest, NextResponse } from "next/server";
import { generateKanjiSuggestions } from "@/lib/openai";
import type { GenerateErrorResponse, GenerateResponse } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json<GenerateErrorResponse>(
        { error: "OpenAI API key is not configured" },
        { status: 500 }
      );
    }

    const body = (await request.json()) as { name?: string };
    const name = body.name?.trim();

    if (!name) {
      return NextResponse.json<GenerateErrorResponse>(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    if (!/^[a-zA-Z\s'-]+$/.test(name)) {
      return NextResponse.json<GenerateErrorResponse>(
        { error: "Please enter a name using only letters (A–Z)" },
        { status: 400 }
      );
    }

    if (name.length > 50) {
      return NextResponse.json<GenerateErrorResponse>(
        { error: "Name is too long" },
        { status: 400 }
      );
    }

    const suggestions = await generateKanjiSuggestions(name);

    return NextResponse.json<GenerateResponse>({ name, suggestions });
  } catch (error) {
    console.error("Generate API error:", error);
    return NextResponse.json<GenerateErrorResponse>(
      { error: "Failed to generate kanji suggestions. Please try again." },
      { status: 500 }
    );
  }
}
