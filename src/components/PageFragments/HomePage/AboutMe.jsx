import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import ProjectTile from '../../ProjectTile';
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
      <hr />
      <h3 className="titleSeparate">
      Tools Pack
      <span role="img" description="aria-label">
        🎒
      </span>
    </h3>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Mangalore, KA, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ProjectTile
            img="bumblevir.png"
            alt="virus image"
            textH3="COVID-19 Tracker"
            textH4="An app that tracks Numbers of Death, Infected and Recovered COVID-19 patients Globally and in all 186 countries. Built using React and Chart JS."
            height={60}
            width={60}
            a="/contact"
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
