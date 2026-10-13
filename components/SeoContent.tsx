export function SeoContent() {
  return (
    <section
      className="w-full max-w-3xl mx-auto mt-20 space-y-12 text-left"
      aria-labelledby="seo-content-heading"
    >
      <div className="text-center">
        <h2
          id="seo-content-heading"
          className="text-2xl md:text-3xl font-light text-paper mb-3"
        >
          Why Kanji Names?
        </h2>
        <p className="text-paper-muted leading-relaxed">
          Kanji are more than characters — each one carries centuries of poetic
          meaning, visual balance, and cultural resonance. A kanji name is a
          personal emblem: a way to express identity through Japanese aesthetics
          while honoring the sound and spirit of your Western name.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <article className="p-6 rounded-xl border border-gold-muted/20 bg-ink-light/50">
          <h3 className="text-lg text-gold mb-3">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2 text-paper-muted text-sm leading-relaxed">
            <li>Enter your Western name in English letters.</li>
            <li>Our AI selects kanji with phonetic and symbolic harmony.</li>
            <li>Read romaji pronunciation and an English meaning story.</li>
            <li>Optionally order your kanji on premium custom apparel.</li>
          </ol>
        </article>

        <article className="p-6 rounded-xl border border-gold-muted/20 bg-ink-light/50">
          <h3 className="text-lg text-gold mb-3">Perfect For</h3>
          <ul className="space-y-2 text-paper-muted text-sm leading-relaxed">
            <li>Travelers, language lovers, and Japan enthusiasts</li>
            <li>Unique gifts, social profiles, and personal branding</li>
            <li>Minimalist kanji merch with meaningful design</li>
          </ul>
        </article>
      </div>

      <article className="p-6 md:p-8 rounded-xl border border-gold-muted/20 bg-ink-light/40">
        <h3 className="text-lg text-gold mb-3">Kanji Name Generator FAQ</h3>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="text-paper font-medium">
              Is this an official Japanese name translation?
            </dt>
            <dd className="text-paper-muted mt-1 leading-relaxed">
              This tool offers artistic kanji pairings inspired by sound and
              meaning. It is designed for cultural appreciation and creative
              expression, not legal or official name registration.
            </dd>
          </div>
          <div>
            <dt className="text-paper font-medium">
              Can I buy a T-shirt with my generated kanji?
            </dt>
            <dd className="text-paper-muted mt-1 leading-relaxed">
              Yes. After generation, use the Custom T-Shirt offer to open our
              Printful-powered shop and order your design on premium cotton.
            </dd>
          </div>
        </dl>
      </article>
    </section>
  );
}
