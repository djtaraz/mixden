module.exports = {
    siteMetadata: {
        title: `Mixden`,
        description: `Create and share your mixes`,
        author: `@djtaraz`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `mixden`,
                short_name: `mixden`,
                start_url: `/`,
                background_color: `#B4C8FF`,
                theme_color: `B4C8FF`,
                display: `minimal-ui`,
                icon: `src/images/mixden-logo-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-gatsby-cloud`,
    ],
}
