import React from 'react'
import { Layout, Row, Col } from 'antd'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Header from '../../components/PageLayout/Header'
import SEO from '../../components/Seo'
import SidebarWrapper from '../../components/PageLayout/Sidebar'
import TagCard from '../../components/TagCard'
import Config from '../../../config'
import pocketMoni from '../../images/pocketmoni.jpeg'
import edutech from '../../images/edutech.jpeg'
import assetstack from '../../images/assetstack.jpeg'
import gardenacademy from '../../images/garden-academy.jpeg'
import vulte from '../../images/vulte.jpeg'

const Tags = ({ data }) => {
  const {
    allFile: { edges },
  } = data
  const rawTags = data.allMarkdownRemark.edges
    .map(edge => edge.node.frontmatter.tags)
    .reduce((prev, curr) => prev.concat(curr))
  rawTags.filter((tag, index) => index === rawTags.indexOf(tag)).sort() // Remove duplicates and sort values
  // const tagPage = Config.pages.tag;
  const tagData = Config.tags
  const projectsToMap = [
    {
      img: pocketMoni,
      website: 'hhtps://www.pmportal.etranzactng.com',
      projectName: 'PocketMoni Agent Portal',
      description:
        'A portal built for the Mobile App and POS machine users. To manage their transactions, while helping admins manage agents operations',
    },
    {
      img: gardenacademy,
      website: 'https://www.gardenacademy.io',
      projectName: 'Garden Academy',
      description:
        'A mini-udemy application for learning and development. Mainly targets interns and people with interest in getting into the IT world',
    },
    {
      img: assetstack,
      projectName: 'Assetstack',
      description:
        'AssetStack is a Special Purpose Vehicle Asset-Investment platform. FundManagers creates Funds for Investors to invest in.',
    },
    {
      img: vulte,
      website: 'https://www.vulte.ng',
      projectName: 'Vulte',
      description:
        'A banking application where users can create bank accounts automatically and begin transactions almost immediately',
    },
    {
      img: edutech,
      website: 'https://www.edutech.global',
      projectName: 'Edutech Website',
      description: 'The official website of Edutech',
    },
  ]
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SEO
          title="Projects"
          description="This page consists of various Projects undergone by Ayantunji Timilehin."
          path="projects"
        />
        <SidebarWrapper>
          <>
            <div className="marginTopTitle">
              <h1 className="titleSeparate">
                Projects
                <span role="img" aria-label="laptop">
                  💻
                </span>
              </h1>
            </div>
            <Row gutter={[30, 20]}>
              {projectsToMap.map(val => (
                <Col key={val.projectName} xs={24} sm={24} md={12} lg={8}>
                  <TagCard
                    img={val.img}
                    website={val.website}
                    projectName={val.projectName}
                    description={val.description}
                  />
                </Col>
              ))}
            </Row>
            <footer style={{ textAlign: 'center', padding: '20px' }}>
              <b>~ Ayantunji Timilehin Portfolio ~</b>
            </footer>
          </>
        </SidebarWrapper>
      </Layout>
    </Layout>
  )
}

Tags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string.isRequired,
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.object.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index.md$/" } }) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "tags" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Tags
