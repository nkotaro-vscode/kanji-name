import OpenAI from "openai";
import type { KanjiSuggestion } from "./types";

function getOpenAIClient(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OpenAI API key is not configured");
  }
  return new OpenAI({ apiKey });
}

const SYSTEM_PROMPT = `You are a cultural consultant specializing in Japanese kanji aesthetics for Western names.
Your task is to suggest 1-3 beautiful kanji combinations that phonetically or conceptually resonate with a given Western name.

Rules:
- Choose kanji that are visually striking and carry positive, poetic meanings
- Consider phonetic similarity (ateji-style) AND semantic beauty
- Each suggestion must include accurate romaji reading
- Write the "story" field in elegant, evocative English (2-4 sentences) explaining the kanji's meaning and why it suits the name
- Do NOT use offensive or negative kanji
- Return ONLY valid JSON, no markdown`;

function buildUserPrompt(name: string): string {
  return `Suggest kanji for the Western name "${name}".

Return JSON in this exact shape:
{
  "suggestions": [
    {
      "kanji": "漢字",
      "romaji": "romaji reading",
      "story": "English explanation of meaning and why it fits the name"
    }
  ]
}`;
}

export async function generateKanjiSuggestions(
  name: string
): Promise<KanjiSuggestion[]> {
  const openai = getOpenAIClient();
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: buildUserPrompt(name) },
    ],
    response_format: { type: "json_object" },
    temperature: 0.8,
  });

  const content = completion.choices[0]?.message?.content;
  if (!content) {
    throw new Error("No response from OpenAI");
  }

  const parsed = JSON.parse(content) as { suggestions: KanjiSuggestion[] };

  if (!Array.isArray(parsed.suggestions) || parsed.suggestions.length === 0) {
    throw new Error("Invalid response format");
  }

  return parsed.suggestions;
}
