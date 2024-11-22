import React from "react"
import { Normalizer } from "../style/Normalizer"
import { GlobalStyle } from "../style/GlobalStyle"
import Header from './header'
import Footer from "./footer"
import { Helmet } from 'react-helmet';

function Layout({ children, pageContext }) {
  if (pageContext.layout === "landing") {
    return (
      <>
        <Helmet>
          <script src="https://app.enzuzo.com/scripts/cookiebar/3ab108a2-a794-11ef-9d82-ff6eec0b7a18"></script>
        </Helmet>
        <Normalizer />
        <GlobalStyle />
        <main >{children}</main>
        <Footer/>
      </>
    )
  }

  return (
    <>
      <Normalizer />
      <GlobalStyle />
      <Header language={pageContext.language}/>
        <main >{children}</main>
      <Footer language={pageContext.language}/>
    </>
  )
}

export default Layout
