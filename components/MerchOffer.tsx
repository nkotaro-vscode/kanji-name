import { merchShopUrl } from "@/lib/site";

interface MerchOfferProps {
  kanji: string;
  romaji: string;
}

export function MerchOffer({ kanji, romaji }: MerchOfferProps) {
  return (
    <section
      className="rounded-xl border border-gold-muted/25 bg-gradient-to-br from-ink-light to-ink-muted/80 p-6 md:p-8 overflow-hidden"
      aria-labelledby="merch-offer-title"
    >
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 items-center">
        <div
          className="relative aspect-square max-w-[220px] mx-auto md:mx-0 rounded-lg
                     bg-[#111] border border-white/10 shadow-2xl flex items-center justify-center"
          aria-hidden
        >
          <div className="absolute inset-x-6 top-8 h-16 rounded-full bg-white/5" />
          <p className="kanji-display text-5xl text-white tracking-wider">
            {kanji}
          </p>
          <p className="absolute bottom-6 text-[10px] uppercase tracking-[0.25em] text-white/40">
            Premium Cotton
          </p>
        </div>

        <div className="text-center md:text-left space-y-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-gold-muted mb-2">
              Custom Merch
            </p>
            <h3
              id="merch-offer-title"
              className="text-xl md:text-2xl font-light text-paper"
            >
              Wear Your Kanji Identity
            </h3>
            <p className="text-paper-muted mt-2 text-sm leading-relaxed">
              Turn <span className="text-gold">{kanji}</span> ({romaji}) into a
              minimalist tee — printed on premium cotton with crisp, lasting ink.
            </p>
          </div>

          <a
            href={merchShopUrl}
            target={merchShopUrl.startsWith("http") ? "_blank" : undefined}
            rel={
              merchShopUrl.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="inline-flex w-full md:w-auto items-center justify-center rounded-lg
                       bg-white text-ink px-6 py-3.5 font-medium tracking-wide
                       hover:bg-paper transition-colors duration-300
                       shadow-lg shadow-black/30"
          >
            Get This Kanji on a Premium Cotton T-Shirt ($29.99)
          </a>
          <p className="text-xs text-paper-muted/60">
            Fulfillment via Printful / shop partner. Replace{" "}
            <code className="text-gold/70">NEXT_PUBLIC_MERCH_SHOP_URL</code> with
            your live product link.
          </p>
        </div>
      </div>
    </section>
  );
}
