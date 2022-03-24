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
            usePreviewUrl: true,
            authorizationKey: `${process.env.KONTENT_PREVIEW_KEY}`,
            languageCodenames: [
              `default`,
            ],
          },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        {
          resolve: `gatsby-plugin-postcss`,
          options: {
            postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
          }
        },
      ],
}