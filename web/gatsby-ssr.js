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