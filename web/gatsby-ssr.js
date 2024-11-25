const wrapWithI18nProvider = require("./src/components/wrapWithI18nProvider")
  .wrapWithI18nProvider
exports.wrapPageElement = wrapWithI18nProvider


const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // Primer script (cookiebar)
    <script
      key="enzuzo-cookiebar"
      src="https://app.enzuzo.com/scripts/cookiebar/3ab108a2-a794-11ef-9d82-ff6eec0b7a18"
      async
    />,
    // Segundo script y div (cookies)
    <div key="enzuzo-root" id="__enzuzo-root"></div>,
    <script
      key="enzuzo-root-script"
      id="__enzuzo-root-script"
      src="https://app.enzuzo.com/scripts/cookies/3ab108a2-a794-11ef-9d82-ff6eec0b7a18"
      async
    />,
    <div id="__enzuzo-root"></div>,
    <script 
    id="__enzuzo-root-script" 
    src="https://app.enzuzo.com/scripts/privacy/3ab108a2-a794-11ef-9d82-ff6eec0b7a18" />,

  ]);
};