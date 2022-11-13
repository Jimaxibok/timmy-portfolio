import React from 'react'
import { Row, Col } from 'antd'
import AboutTile from '../../AbouTile'
import { stripTags, domHtml } from '../../../utils/stripTags'
import SEO from '../../Seo'

const pageText = {
  paraOne: `👋 I'm <b>Ayantunji Timilehin</b>, a Full-Stack Software Engineer 
  with penchant for <b>Web/App development</b>. I like scratching my own itch 
  and studingy software Technologies, UI/UX case studies, and Tech-bits thereof. During my spare time, I'm an autodidact polymath acquiring knowledge from various resources online 🤓.`,
  paraTwo: `I work mostly with <b>Web technologies</b>, I currently hold <b>4 years of work experience</b> in the Development field working across Startups, Multinational corporation, Fintech and Cryptocurrency exchange platforms in <b>Nigeria,</b> <b>Africa</b> and the <b>United States</b>. `,
}
const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`
  return (
    <>
      <div>
        <SEO
          title="Home"
          description={description}
          path=""
          keywords={[
            'Ayantunji Timilehin',
            'timilehinayantunji',
            'Timilehin',
            'Ayantunji',
            'timmy',
            'Micheal',
            'developer',
            'software',
            'frontend',
            'FullStack developer',
            'Javascript',
            'ReactJS',
            'Front-End',
            'Software developer',
            'NodeJS',
            'Designer',
            'UI/UX',
            'Meaning of Timilehin',
            'Qoder',
          ]}
        />
        <h1 className="titleSeparate">
          About Me
          <span>&#128071;&#127998;</span>
        </h1>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <br />
      <h3 className="titleSeparate">
        Tools Pack
        <span role="img" aria-label="Bag Pack">
          🎒
        </span>
      </h3>
      <Row gutter={[20, 20]}>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="react.png"
            alt="React"
            textH4="Front-End"
            textH3="React JS"
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="next-js.jpeg"
            alt="React"
            textH4="Front-End"
            textH3="NextJS"
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="typescript.png"
            alt="Typescript"
            textH4="Scripting"
            textH3="Typescript"
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="antd.jpeg"
            alt="CSS"
            textH4="Styling"
            textH3="Antd Design"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="css.png"
            alt="CSS"
            textH4="Styling"
            textH3="CSS3"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="sass.png"
            alt="sass"
            textH4="Styling"
            textH3="Sass"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="figma.png"
            alt="FIGMA"
            textH4="Design-UI/UX"
            textH3="Figma"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="cypress.jpeg"
            alt="FIGMA"
            textH4="Cypress"
            textH3="Cypress"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="node.png"
            alt="Octopus"
            textH4="Backend"
            textH3="Node Js"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <AboutTile
            img="jenkins.png"
            alt="Jenkins"
            textH4="CI/CD"
            textH3="Jenkins"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="octopus.png"
            alt="Octopus"
            textH4="CI/CD"
            textH3="Octopus"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="git.png"
            height={60}
            alt="Git"
            textH4="Development Tool"
            textH3="Git"
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="github.png"
            alt="Github"
            textH4="Development Tool"
            textH3="Github"
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="gitlab.png"
            alt="Gitlab"
            textH4="Development Tool"
            textH3="Gitlab"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <AboutTile
            img="seo.png"
            alt="Seo"
            textH4="Optimization"
            textH3="Search Engine Optimization"
          />
        </Col>
      </Row>
      <footer style={{ textAlign: 'center', padding: '20px' }}>
        <b>~ Ayantunji Timilehin Portfolio ~</b>
      </footer>
    </>
  )
}
export default AboutMe
