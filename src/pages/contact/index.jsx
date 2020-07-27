import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import SEO from '../../components/Seo';

const Contact = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Contact"
        description="Hello friend jideabdqudus here. You can contact me through the contact form on this page."
        path="/contact"
        keywords={['jideabdqudus', 'Jide', 'Qudus', 'Abdul', 'Abdul-Qudus', 'Abdul-Azeez', 'FullStack developer', 'Javascript', 'ReactJS', 'Front-End', 'Software developer', 'NodeJS', 'Designer', 'UI/UX']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">
            Contact
            <span role="img" aria-label="blog">
              📞
            </span>
          </h1>
        </div>
        <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <img
              src="../../contact.png"
              alt="contact"
              className="widthFull contactImgBorder"
            />
          </Col>
          <ContactForm />
        </Row>
        <footer style={{ textAlign: 'center', padding: '20px' }}>
          <b>~ Jide Abdul-Qudus Portfolio ~</b>
        </footer>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Contact;
