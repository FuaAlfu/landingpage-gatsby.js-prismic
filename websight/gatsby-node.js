/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require('fs');
const dir = './.cache/caches/gatsby-source-prismic'

exports.onPreBootstrap = () => {
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir, {recursive: true})
    }
}