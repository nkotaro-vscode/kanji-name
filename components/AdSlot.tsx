"use client";

import { useEffect, useRef } from "react";
import { adsenseClientId, adsenseSlots } from "@/lib/site";

type AdSlotProps = {
  slot: keyof typeof adsenseSlots;
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

export function AdSlot({ slot, className = "" }: AdSlotProps) {
  const pushed = useRef(false);
  const adSlotId = adsenseSlots[slot];
  const isConfigured = Boolean(adsenseClientId && adSlotId);

  useEffect(() => {
    if (!isConfigured || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense script may not be loaded yet during local dev
    }
  }, [isConfigured]);

  if (!isConfigured) {
    return (
      <aside
        className={`w-full max-w-2xl mx-auto rounded-lg border border-dashed border-gold-muted/25 bg-ink-light/40 px-4 py-8 text-center ${className}`}
        aria-label="Advertisement placeholder"
      >
        <p className="text-xs uppercase tracking-widest text-gold-muted mb-1">
          Advertisement
        </p>
        <p className="text-sm text-paper-muted/70">
          AdSense slot ({slot}) — set{" "}
          <code className="text-gold/80">NEXT_PUBLIC_ADSENSE_CLIENT</code> and
          slot env vars in production.
        </p>
      </aside>
    );
  }

  return (
    <aside
      className={`w-full max-w-2xl mx-auto flex justify-center overflow-hidden ${className}`}
      aria-label="Advertisement"
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsenseClientId}
        data-ad-slot={adSlotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
