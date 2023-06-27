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
      <Header/>
      <main >{children}</main>
      <Footer/>
    </>
  )
}

export default Layout
