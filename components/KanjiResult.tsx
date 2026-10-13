import { AdSlot } from "@/components/AdSlot";
import { MerchOffer } from "@/components/MerchOffer";
import type { KanjiSuggestion } from "@/lib/types";

interface KanjiResultProps {
  name: string;
  suggestions: KanjiSuggestion[];
}

export function KanjiResult({ name, suggestions }: KanjiResultProps) {
  const primary = suggestions[0];

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="text-center">
        <p className="text-paper-muted text-sm uppercase tracking-widest mb-1">
          For {name}
        </p>
        <h2 className="text-2xl font-light text-gold">Your Kanji Identity</h2>
      </div>

      <div className="space-y-6">
        {suggestions.map((suggestion, index) => (
          <article
            key={`${suggestion.kanji}-${index}`}
            className="relative p-8 rounded-xl border border-gold-muted/20 bg-ink-light/80
                       backdrop-blur-sm overflow-hidden group
                       hover:border-gold/30 transition-colors duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-5 rounded-full
                         -translate-y-1/2 translate-x-1/2
                         bg-[radial-gradient(circle,var(--color-gold)_0%,transparent_70%)]"
              aria-hidden
            />

            <div className="text-center mb-6">
              <p
                className="kanji-display text-7xl md:text-8xl text-paper mb-4
                           group-hover:text-gold transition-colors duration-500"
              >
                {suggestion.kanji}
              </p>
              <p className="text-gold font-mono text-lg tracking-wider">
                {suggestion.romaji}
              </p>
            </div>

            <div className="border-t border-gold-muted/20 pt-6">
              <p className="text-xs uppercase tracking-widest text-gold-muted mb-3">
                Story
              </p>
              <p className="text-paper-muted leading-relaxed text-base md:text-lg font-light">
                {suggestion.story}
              </p>
            </div>
          </article>
        ))}
      </div>

      {primary && (
        <MerchOffer kanji={primary.kanji} romaji={primary.romaji} />
      )}

      <AdSlot slot="result" />
    </div>
  );
}
