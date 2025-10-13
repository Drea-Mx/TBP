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
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'v7y3u1wl',
        token: process.env.SANITY_GATSBY,
        dataset: 'production',
        watchMode: true,
      }
    },
    // ⛔️ Quitamos los plugins que inyectaban trackers automáticamente:
    // - gatsby-plugin-facebook-pixel
    // - gatsby-plugin-linkedin-insight

    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png'
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/'
      },
      __key: 'images'
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/layout`),
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.8,
        once: true,
        disable: false,
      }
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["SITE_RECAPTCHA_KEY", "SITE_RECAPTCHA_SECRET", "FACEBOOK_PIXEL", "LINKEDIN_PARTNER_ID", "CLARITY_ID", "GA4_ID", "GTM_ID", "GOOGLE_ADS_ID"]
      },
    },
    {
      resolve: `gatsby-plugin-pinterest`
    },
  ]
};
