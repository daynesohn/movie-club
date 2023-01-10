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
        accessToken: "CFPAT-vVvIcstNeLENewy_QqJGM1dvHkfY692VnozpU1iKd5E",
        spaceId: "ut982uw7xga0",
      },
    },
  ],
};
