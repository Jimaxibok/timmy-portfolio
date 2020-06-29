/* Vendor imports */
import React from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
} from 'antd';
/* App imports */
import Header from '../../components/PageLayout/Header';


const TagPage = (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
    </Layout>
  </Layout>
);


export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fileAbsolutePath: { regex: "/index.md$/" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    allFile(filter: { name: { eq: $tag }, dir: { regex: "/tags$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default TagPage;
