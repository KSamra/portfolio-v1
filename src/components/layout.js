import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {GlobalStyle} from '../styles/globalStyle';

// import Header from "./header"
import Header from '../styles/blocks/header/index';
import Footer from '../styles/blocks/footer';
import MobileNav from '../styles/blocks/mobileHeader/index';
import {Center} from '../styles/theme';

// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <GlobalStyle />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Header>
        <Header.Title siteTitle={data.site.siteMetadata.title}/>
        <Header.Nav />
      </Header>
      <MobileNav />
      <Center>
        <main>{children}</main>
        <Footer />
        
          {/* © {new Date().getFullYear()}, Built with */}
      </Center>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
