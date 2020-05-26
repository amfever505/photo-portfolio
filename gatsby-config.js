/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDrDaiPu-2aSfaqb7WBTR7FbwNYeQn9RHM",
          projectId: "portfolio-7892d",
          databaseURL: "https://portfolio-7892d.firebaseio.com/",
          storageBucket: "gs://portfolio-7892d.appspot.com/",
        },
      },
    },
  ],
}
