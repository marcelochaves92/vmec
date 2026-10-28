import { GoogleAnalytics } from "@next/third-parties/google";

const DEFAULT_GTM_ID = "GTM-MQJ8T8DS";

function resolveGtmId() {
  const fromEnv = process.env.NEXT_PUBLIC_GTM_ID?.trim();
  if (fromEnv && /^GTM-[A-Z0-9]+$/i.test(fromEnv)) return fromEnv;
  return DEFAULT_GTM_ID;
}

export const gtmId = resolveGtmId();

const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();

export const gtmHeadScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`;

export function Analytics() {
  if (!gaId || gtmId) return null;
  return <GoogleAnalytics gaId={gaId} />;
}

export function GoogleTagManagerNoscript() {
  if (!gtmId) return null;

  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  );
}
