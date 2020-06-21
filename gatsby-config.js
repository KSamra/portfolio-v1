module.exports = {
  siteMetadata: {
    title: `Software Developer`,
    description: `Software Developer located in Los Angeles, CA who is currently seeking a Junior Developer position.`,
    author: `Kavan Samra`,
    keywords: ["Kavan Samra", "KSamra", "software developer", "software engineer", "Los Angeles", "LA", "California", "UC Santa Cruz", "University of California","web developer", "programmer"],
    siteURl: "https://www.kavansamra.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: "content",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kavan Samra | Software Developer Portfolio`,
        short_name: `Kavan Samra`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/icons/logo.svg`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-offline`,
  ],
}
