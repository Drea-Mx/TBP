import React from "react"
import { Normalizer } from "../style/Normalizer"
import { GlobalStyle } from "../style/GlobalStyle"
import Header from './header'
import Footer from "./footer"


function Layout({ children, black, work, blog }) {

  
  return (
    <>
      <Normalizer />
      <GlobalStyle />
      <Header black={black} work={work} blog={blog} />
      <main>{children}</main>
      <Footer blog={blog} />
    </>
  )
}




export default Layout