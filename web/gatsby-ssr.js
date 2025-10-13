const wrapWithI18nProvider = require("./src/components/wrapWithI18nProvider").wrapWithI18nProvider;
exports.wrapPageElement = wrapWithI18nProvider;

const React = require("react");

exports.onRenderBody = ({ setHeadComponents /*, setPostBodyComponents */ }) => {
  // --- 1) Iubenda: configuración + autoblocking SIEMPRE primero en <head> ---
  const iubenda = [
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
    <script
      key="iubenda-autoblocking"
      type="text/javascript"
      src="https://cs.iubenda.com/autoblocking/3721072.js"
    />,
    <script
      key="iubenda-gpp"
      type="text/javascript"
      src="//cdn.iubenda.com/cs/gpp/stub.js"
    />,
    <script
      key="iubenda-cs"
      type="text/javascript"
      src="//cdn.iubenda.com/cs/iubenda_cs.js"
      charSet="UTF-8"
      async
    />,
  ];

  // --- 2) Google (gtag + GTM) insertados DESPUÉS y bloqueados hasta consentimiento ---
  // Nota: 'AW-10844528718' es tu ID de Google Ads; si activas GA4, añade también su ID en otro gtag('config', 'G-XXXX').
  const google = [
    // gtag loader (Ads/GA4). Marcado para que Iubenda lo suprima hasta consentimiento (propósito 4 = analítica).
    <script
      key="gtag-loader"
      async
      className="_iub_cs_activate"
      data-iub-purposes="4"
      src="https://www.googletagmanager.com/gtag/js?id=AW-10844528718"
    />,
    // gtag init y configuración básica
    <script
      key="gtag-inline"
      className="_iub_cs_activate"
      data-iub-purposes="4"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          // Config de Google Ads (sin page_view automático y con anonimización IP)
          gtag('config', 'AW-10844528718', { send_page_view: false, anonymize_ip: true });
          // Si tienes una propiedad GA4, descomenta y reemplaza G-XXXX:
          // gtag('config', 'G-XXXX', { send_page_view: false, anonymize_ip: true });
        `
      }}
    />,
    // Google Tag Manager (bloqueado por Iubenda)
    <script
      key="gtm-inline"
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
          })(window,document,'script','dataLayer','GTM-N6B8TSV');
        `
      }}
    />,
  ];

  // Importante: no insertamos el <noscript> de GTM para evitar carga sin consentimiento.
  // Si quisieras añadirlo, hazlo en setPostBodyComponents y deja un comentario avisando
  // que puede cargar sin consentimiento en navegadores con JS deshabilitado.

  setHeadComponents([...iubenda, ...google]);
};
