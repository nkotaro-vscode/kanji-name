import Script from "next/script";
import { adsenseClientId } from "@/lib/site";

export function AdSenseScript() {
  if (!adsenseClientId) return null;

  return (
    <Script
      id="adsense-script"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
