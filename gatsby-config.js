/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        spreadsheetId: "1Vt0Z9DHjmp6yahplAhUoCjCqFRmpjF7AYYq5Juvu1S4",
        spreadsheetName: "Sheet2Web",
        typePrefix: "GoogleSpreadsheet",
        credentials: require('./credentials/livehacks-1174-9baa14d6d2cf.json'),
        filterNode: () => true,
        mapNode: node => node
      }
    }
  ]
}
