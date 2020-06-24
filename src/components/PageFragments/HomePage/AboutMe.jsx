import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello 👋 I'm Jide (Abdul-Qudus) a Web Designer & React Ninja, a developer with penchant for the Web, Software development, UI/UX development, and Graphic illustration. I also like scratching my own itch and writing about Web-Design, UI/UX case studies, and Tech thereof. I'm a FIFA gamer and like to think I'm a pro 😄

  I currently hold 3+ years of work experience in the Development field 💯`,
  paraTwo: `Currently I work mostly with Javascript technologies like ReactJS and NodeJS. I also
    have hands on experience working with cloud infrastructures like <b>AWS/GCP</b> and have deployed applications
    keeping scalability in mind. Docker, Kubernetes, Jenkins, SonarQube are some of the cool
    tools I use for <b>CI/ CD</b>. I'm always a learner and a self taught programmer.`,
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
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
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
      </Row>
    </>
  );
};
export default AboutMe;
