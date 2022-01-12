module.exports = {
  // pathPrefix: `/hashoctoz`,
  siteMetadata: {
    title: `moonbitz.xyz`,
    description: `Hello!`,
    siteURL: `https://moonbitz.xyz`,
    email: `moonbitzzz@gmail.com`,
    twitter: `https://twitter.com/moonbitzzz`,
    fxhash: `https://www.fxhash.xyz/u/Moonbitz`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Moonbitz`,
        short_name: `moonbitz`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
