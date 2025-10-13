const wrapWithI18nProvider = require("./src/components/wrapWithI18nProvider")
  .wrapWithI18nProvider
exports.wrapPageElement = wrapWithI18nProvider


const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // Primer script de configuración de Iubenda
    <script
      key="iubenda-config"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          var _iub = _iub || [];
          _iub.csConfiguration = {
            "siteId": 3721072,
            "cookiePolicyId": 62417021,
            "lang": "es",
            "storage": {"useSiteId": true}
          };
        `,
      }}
    />,
    // Script de autoblocking
    <script
      key="iubenda-autoblocking"
      type="text/javascript"
      src="https://cs.iubenda.com/autoblocking/3721072.js"
    />,
    // Script de GPP
    <script
      key="iubenda-gpp"
      type="text/javascript"
      src="//cdn.iubenda.com/cs/gpp/stub.js"
    />,
    // Script de Iubenda Cookie Solution
    <script
      key="iubenda-cs"
      type="text/javascript"
      src="//cdn.iubenda.com/cs/iubenda_cs.js"
      charset="UTF-8"
      async
    />,
  ]);
};

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();

  // guardamos índice original para mantener estabilidad entre elementos de misma prioridad
  headComponents.forEach((c, i) => { c.__order = i; });

  const toSrc = (c) => (c?.props && c.props.src) ? String(c.props.src) : "";
  const isScript = (c) => c && c.type === "script";

  // Heurísticas:
  // 0 = Iubenda (siempre primero)
  // 1 = neutro
  // 2 = Google/Facebook/LinkedIn/Clarity (siempre después)
  const priority = (c) => {
    if (!isScript(c)) return 1;

    const src = toSrc(c);
    const html = c?.props?.dangerouslySetInnerHTML?.__html || "";

    const isIubConfig = /_iub\.csConfiguration/.test(html);
    const isIubendaSrc = /(^|\/\/)(cs\.iubenda\.com|cdn\.iubenda\.com)\//.test(src);

    if (isIubConfig || isIubendaSrc) return 0;

    const isGoogle = /googletagmanager\.com|google-analytics\.com|gtag\/js/.test(src);
    const isFB     = /connect\.facebook\.net/.test(src);
    const isLkd    = /snap\.licdn\.com/.test(src);
    const isClarity= /clarity\.ms/.test(src);

    if (isGoogle || isFB || isLkd || isClarity) return 2;

    // Inline GTM/gtag sin src
    const isInlineGT = /(gtag\(|googletagmanager\.com|GTM-)/.test(html);
    if (isInlineGT) return 2;

    return 1;
  };

  headComponents.sort((a, b) => {
    const pa = priority(a);
    const pb = priority(b);
    return pa === pb ? (a.__order - b.__order) : (pa - pb);
  });

  replaceHeadComponents(headComponents);
};

