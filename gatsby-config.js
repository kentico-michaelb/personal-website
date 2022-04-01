require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        // ...
        {
          resolve: `@kentico/gatsby-source-kontent`,
          options: {
            projectId: `${process.env.KONTENT_PROJECT_ID}`,
            includeTaxonomies: true,
            includeTypes: true,
            usePreviewUrl: `${process.env.KONTENT_PREVIEW_ENABLED}`,
            authorizationKey: `${process.env.KONTENT_PREVIEW_KEY}`,
            languageCodenames: [
              `default`,
            ],
          },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-react-helmet`,
        {
          resolve: "gatsby-plugin-anchor-links",
          options: {
            duration:2000,
            offset: -100
          }
        },
        {
          resolve: `gatsby-plugin-postcss`,
          options: {
            postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
          }
        },
      ],
}