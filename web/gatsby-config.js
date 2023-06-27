const siteUrl = `https://tbpmx.com/`


module.exports = {
  siteMetadata: {
    siteUrl,
    title: `The branding people`,
    description: `We are a design studio based in Mexico City specialized in brand construction and the development of visual communication systems.`,
    social: {
      twitter: `tbpmx`,
    },
    author: `tbpmx`,
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "v7y3u1wl",
      token: process.env.SANITY_GATSBY,
      "dataset": "production",
      watchMode: true,
    }
  },
  {
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: process.env.FACEBOOK_PIXEL,
    },
  }, "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", `gatsby-plugin-smoothscroll`, "gatsby-plugin-sitemap",  {
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
  },
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      // your google analytics tracking id
      trackingId: `AW-10844528718`,
      // Puts tracking script in the head instead of the body
      head: true,
      // enable ip anonymization
      anonymize: true,
    },
  },
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/components/layout/layout`),
    },
  },
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-N6B8TSV",

      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      //
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },
    },
  },
  {
    resolve: `gatsby-plugin-linkedin-insight`,
    options: {
      partnerId: process.env.LINKEDIN_PARTNER_ID,

      // Include LinkedIn Insight in development.
      // Defaults to false meaning LinkedIn Insight will only be loaded in production.
      includeInDevelopment: false
    }
  }
]
};