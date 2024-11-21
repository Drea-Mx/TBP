const wrapWithI18nProvider = require("./src/components/wrapWithI18nProvider")
  .wrapWithI18nProvider
exports.wrapPageElement = wrapWithI18nProvider


export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script src="https://app.enzuzo.com/scripts/cookiebar/3ab108a2-a794-11ef-9d82-ff6eec0b7a18"></script>
  ])
}