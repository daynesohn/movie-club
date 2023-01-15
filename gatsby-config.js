require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "movieClub",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        spaceId: `${process.env.CONTENTFUL_SPACEID}`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `react-feather`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Barlow`,
            file: `https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap`
          },
          {
            name: `Righteous`,
            file: `https://fonts.googleapis.com/css2?family=Righteous&display=swap`
          },
        ],
      },
    },
  ],
};
