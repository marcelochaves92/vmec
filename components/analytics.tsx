import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();
const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();

export function Analytics() {
  return (
    <>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      {gaId && !gtmId ? <GoogleAnalytics gaId={gaId} /> : null}
    </>
  );
}
