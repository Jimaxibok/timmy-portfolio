/* Vendor imports */
const path = require('path');
/* App imports */
const config = require('./config');
const utils = require('./src/utils/pageUtils');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
            fileAbsolutePath
          }
        }
      }
    }    
  `).then((result) => {
    if (result.errors) return Promise.reject(result.errors);
});

  ;
};
