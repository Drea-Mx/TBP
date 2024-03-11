import React from "react"
import { Normalizer } from "../style/Normalizer"
import { GlobalStyle } from "../style/GlobalStyle"
import Header from './header'
import Footer from "./footer"
import LandingPixel from "../landing/Pixels/Landing"

function Layout({ children, pageContext }) {
  if (pageContext.layout === "landing") {
    return (
      <>
        <LandingPixel />
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
