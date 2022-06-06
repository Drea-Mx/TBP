module.exports = {
  siteMetadata: {
    title: `The Branding People`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "v7y3u1wl",
      token: process.env.SANITY_GATSBY,
      "dataset": "production",
      watchMode: true,
    }
  }, "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", `gatsby-plugin-smoothscroll`, "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  }]
};