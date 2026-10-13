"use client";

import { useState } from "react";

type LegalDoc = "privacy" | "terms" | "contact" | null;

const legalContent: Record<Exclude<LegalDoc, null>, { title: string; body: string }> =
  {
    privacy: {
      title: "Privacy Policy",
      body: `We collect the name you submit solely to generate kanji suggestions. We do not sell personal data. Third-party services (OpenAI, hosting, analytics, advertising) may process technical data according to their own policies. Contact us to request deletion of correspondence.`,
    },
    terms: {
      title: "Terms of Service",
      body: `Kanji Name Generator is provided for entertainment and cultural exploration. Generated kanji are artistic suggestions, not certified translations. You are responsible for how you use generated content. We may update these terms as the service evolves.`,
    },
    contact: {
      title: "Contact",
      body: `Questions about this site, partnerships, or merchandise? Email us at hello@your-domain.com (replace with your support address before launch).`,
    },
  };

export function SiteFooter() {
  const [openDoc, setOpenDoc] = useState<LegalDoc>(null);

  return (
    <>
      <footer className="mt-16 w-full max-w-3xl mx-auto border-t border-gold-muted/20 pt-8 text-center text-sm text-paper-muted/70">
        <nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4"
          aria-label="Legal and contact"
        >
          <button
            type="button"
            onClick={() => setOpenDoc("privacy")}
            className="hover:text-gold transition-colors"
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => setOpenDoc("terms")}
            className="hover:text-gold transition-colors"
          >
            Terms of Service
          </button>
          <button
            type="button"
            onClick={() => setOpenDoc("contact")}
            className="hover:text-gold transition-colors"
          >
            Contact
          </button>
        </nav>
        <p>© {new Date().getFullYear()} Kanji Name Generator. All rights reserved.</p>
      </footer>

      {openDoc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          onClick={() => setOpenDoc(null)}
        >
          <div
            className="max-w-lg w-full rounded-xl border border-gold-muted/30 bg-ink-light p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="legal-modal-title" className="text-xl text-gold mb-3">
              {legalContent[openDoc].title}
            </h2>
            <p className="text-paper-muted text-sm leading-relaxed whitespace-pre-line">
              {legalContent[openDoc].body}
            </p>
            <button
              type="button"
              onClick={() => setOpenDoc(null)}
              className="mt-6 w-full rounded-lg border border-gold-muted/40 py-2.5 text-paper hover:border-gold/50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
