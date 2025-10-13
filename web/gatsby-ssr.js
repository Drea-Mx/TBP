const wrapWithI18nProvider = require("./src/components/wrapWithI18nProvider").wrapWithI18nProvider;
exports.wrapPageElement = wrapWithI18nProvider;

const React = require("react");

// Opcionalmente toma IDs desde ENV (si existen)
const GTM_ID = process.env.GTM_ID || "GTM-N6B8TSV";
const GOOGLE_ADS_ID = process.env.GOOGLE_ADS_ID || "AW-10844528718";
// Si tienes GA4 además del Ads, coloca tu ID en GA4_ID o deja vacío
const GA4_ID = process.env.GA4_ID || ""; // ej: "G-8M4Q1ZMR4R"
const FB_PIXEL_ID = process.env.FACEBOOK_PIXEL; // ej: "303839318016093"
const LINKEDIN_PARTNER_ID = process.env.LINKEDIN_PARTNER_ID; // ej: "1234567"
const CLARITY_ID = process.env.CLARITY_ID || "rihiy0k1gv"; // si no lo usas, borra la línea

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // --- IUBENDA: SIEMPRE PRIMERO ---
    <script
      key="iubenda-config"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          var _iub = _iub || [];
          _iub.csConfiguration = {
            siteId: 3721072,
            cookiePolicyId: 62417021,
            lang: 'es',
            storage: { useSiteId: true }
          };
        `,
      }}
    />,
    <script key="iubenda-autoblocking" type="text/javascript" src="https://cs.iubenda.com/autoblocking/3721072.js" />,
    <script key="iubenda-gpp" type="text/javascript" src="//cdn.iubenda.com/cs/gpp/stub.js" />,
    <script key="iubenda-cs" type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charSet="UTF-8" async />,

    // --- GOOGLE ADS / GA4 via gtag.js (Propósito 4: medición) ---
    <script
      key="gtag-lib"
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
      className="_iub_cs_activate"
      data-iub-purposes="4"
    />,
    <script
      key="gtag-init"
      className="_iub_cs_activate"
      data-iub-purposes="4"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          // Google Ads (sin page_view automático; IP anon)
          gtag('config', '${GOOGLE_ADS_ID}', { send_page_view: false, anonymize_ip: true });
          ${GA4_ID ? `gtag('config', '${GA4_ID}', { send_page_view: false, anonymize_ip: true });` : ""}
        `,
      }}
    />,

    // --- GOOGLE TAG MANAGER (también propósito 4) ---
    <script
      key="gtm-init"
      className="_iub_cs_activate"
      data-iub-purposes="4"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ 'gtm.start': new Date().getTime(), event:'gtm.js' });
          (function(w,d,s,l,i){
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
      }}
    />,

    // --- Microsoft Clarity (propósito 4) ---
    CLARITY_ID && (
      <script
        key="clarity"
        className="_iub_cs_activate"
        data-iub-purposes="4"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=gtm2";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `,
        }}
      />
    ),

    // --- Facebook Pixel (propósito 5: marketing) ---
    FB_PIXEL_ID && (
      <script
        key="fb-pixel"
        className="_iub_cs_activate"
        data-iub-purposes="5"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
              s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
    ),

    // --- LinkedIn Insight (propósito 5) ---
    LINKEDIN_PARTNER_ID && (
      <script
        key="linkedin-insight"
        className="_iub_cs_activate"
        data-iub-purposes="5"
        dangerouslySetInnerHTML={{
          __html: `
            _linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(){
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript"; b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })();
          `,
        }}
      />
    ),

    // --- HubSpot forms (si lo usas; propósito 5). Borra si no aplica.
    <script
      key="hsforms"
      defer
      className="_iub_cs_activate"
      data-iub-purposes="5"
      src="https://js.hsforms.net/forms/v2.js"
    />,
  ].filter(Boolean));
};
