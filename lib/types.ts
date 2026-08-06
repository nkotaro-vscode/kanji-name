export interface KanjiSuggestion {
  kanji: string;
  romaji: string;
  story: string;
}

export interface GenerateResponse {
  name: string;
  suggestions: KanjiSuggestion[];
}

export interface GenerateErrorResponse {
  error: string;
}
