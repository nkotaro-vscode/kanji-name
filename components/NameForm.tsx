"use client";

import { FormEvent, useState } from "react";
import type { GenerateResponse } from "@/lib/types";
import { KanjiResult } from "./KanjiResult";

export function NameForm() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GenerateResponse | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong");
        return;
      }

      setResult(data as GenerateResponse);
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-paper-muted mb-2 tracking-wide uppercase"
          >
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John, Emily, Alexander..."
            className="w-full px-5 py-4 bg-ink-light border border-gold-muted/30 rounded-lg
                       text-paper text-lg placeholder:text-paper-muted/50
                       focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30
                       transition-all duration-300"
            disabled={loading}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <button
          type="submit"
          disabled={loading || !name.trim()}
          className="w-full py-4 px-6 rounded-lg font-medium tracking-wide
                     bg-gradient-to-r from-crimson to-crimson-glow
                     text-paper hover:opacity-90
                     disabled:opacity-40 disabled:cursor-not-allowed
                     transition-all duration-300
                     shadow-lg shadow-crimson/20"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-3">
              <span className="inline-block w-5 h-5 border-2 border-paper/30 border-t-paper rounded-full animate-spin" />
              Crafting your kanji...
            </span>
          ) : (
            "Discover My Kanji"
          )}
        </button>
      </form>

      {error && (
        <div
          role="alert"
          className="p-4 rounded-lg border border-crimson/40 bg-crimson/10 text-paper text-center animate-fade-in-up"
        >
          {error}
        </div>
      )}

      {loading && (
        <div className="space-y-6 animate-fade-in-up">
          <div className="h-32 loading-shimmer rounded-lg" />
          <div className="h-24 loading-shimmer rounded-lg" />
        </div>
      )}

      {result && !loading && (
        <KanjiResult name={result.name} suggestions={result.suggestions} />
      )}
    </div>
  );
}
