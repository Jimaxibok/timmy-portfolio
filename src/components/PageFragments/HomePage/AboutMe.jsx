import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: `👋 I'm <b>Jide {Abdul-Qudus}</b>, a Developer passionate about various web technologies, 
  with penchant for <b>Web/App development</b> and also <b>UI/UX design.</b> I like scratching my own itch 
  and writing about Web-Design, UI/UX case studies, and Tech thereof. During my spare time, I'm an autodidact polymath acquiring knowledge from 😄`,
  paraTwo: `I work mostly with <b>Javascript technologies</b> like ReactJS and NodeJS. I also have hands on experience working 
  with design tools such as <b>Illustrator/Figma/Photoshop</b> <br/><br/>I currently hold 3+ years of work experience in the Development field 💯`,
};
const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['jideabdqudus', 'Jide', 'Qudus', 'Abdul', 'Abdul-Qudus', 'FullStack developer', 'Javascript', 'ReactJS', 'Front-End', 'Software developer', 'NodeJS', 'Designer', 'UI/UX']}
        />
        <h1 className="titleSeparate">
          About Me
          <span>
            &#128071;&#127998;
          </span>
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
            img="javascript.png"
            height={60}
            alt="Javascript"
            textH4="Programming"
            textH3="Javascript"
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={12}>
          <AboutTile
            img="react.png"
            alt="React"
            textH4="Front-End"
            textH3="React JS"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <AboutTile
            img="node.png"
            alt="Node"
            textH4="Back-End"
            textH3="Node JS"
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="mongodb.png"
            alt="Mongo DB"
            textH4="Database"
            textH3="Mongo DB"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="css.png"
            alt="CSS"
            textH4="Front-End"
            textH3="CSS3"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <AboutTile
            img="gatsby.png"
            alt="GATSBY"
            textH4="Front-End, CMS"
            textH3="Gatsby JS"
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="wordpress.png"
            alt="Wordpress"
            textH4="CMS"
            textH3="Wordpress"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="contentful.png"
            alt="Contentful"
            textH4="CMS"
            textH3="Contentful"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
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
            img="photoshop.png"
            alt="Photoshop"
            textH4="Design-UI/UX"
            textH3="Photoshop"
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <AboutTile
            img="illustrator.png"
            alt="Illustrator"
            textH4="Design-UI/UX"
            textH3="Illustrator"
            height={60}
            width={60}
          />
        </Col>
      </Row>
      <footer style={{ textAlign: 'center', padding: '20px' }}>
        <b>~ Jide Abdul-Qudus Portfolio ~</b>
      </footer>
    </>
  );
};
export default AboutMe;
