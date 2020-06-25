import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { Button, Row, Col } from 'antd';
import SEO from '../components/Seo';

export default class Resume extends Component {
  constructor() {
    super();
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;
    const pageToggle = () => {
      if (pageNumber === 1) {
        this.setState({ pageNumber: 2 });
      } else {
        this.setState({ pageNumber: 1 });
      }
      return 1;
    };

    return (
      <div>
        <SEO
          title="Resume"
          description="My resume consists of my biodata of experience. I'm open to various challenges that come
          in the way of building various web applications."
          path="resume"
        />
        <Document
          file="../webresume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
          style={{ width: '100%', height: '100%' }}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <Row justify="center" style={{ background: 'lightslategray' }}>
          <Col span={2}>
            <p>{`Page ${pageNumber} of ${numPages}`}</p>
          </Col>
          <Col span={2}>
            <Button type="primary" onClick={pageToggle}>{pageNumber === 1 ? 'Next Page' : 'Previous Page'}</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
