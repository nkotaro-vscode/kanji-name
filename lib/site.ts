export const siteConfig = {
  name: "Kanji Name Generator",
  title:
    "Kanji Name Generator | Discover Your Japanese Character & Meaning",
  description:
    "Convert your Western name into beautiful Japanese Kanji with deep historical and aesthetic meanings. Get custom Kanji merch & T-shirts.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "en_US",
} as const;

export const merchShopUrl =
  process.env.NEXT_PUBLIC_MERCH_SHOP_URL ?? "#";

export const adsenseClientId =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";

export const adsenseSlots = {
  header: process.env.NEXT_PUBLIC_ADSENSE_SLOT_HEADER ?? "",
  result: process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESULT ?? "",
} as const;

export const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION ?? "";
