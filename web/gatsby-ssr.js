const wrapWithI18nProvider = require("./src/components/wrapWithI18nProvider")
  .wrapWithI18nProvider
exports.wrapPageElement = wrapWithI18nProvider


const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="enzuzo-cookiebar"
      src="https://app.enzuzo.com/scripts/cookiebar/3ab108a2-a794-11ef-9d82-ff6eec0b7a18"
      async
    />,
  ]);
};
