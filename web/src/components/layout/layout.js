import React from "react"
import { Normalizer } from "../style/Normalizer"
import { GlobalStyle } from "../style/GlobalStyle"
import Header from './header'
import Footer from "./footer"

function Layout({ children, pageContext }) {
  if (pageContext.layout === "landing") {
    return (
      <>
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
