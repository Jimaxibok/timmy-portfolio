import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { Button, Row, Col } from 'antd';
import { Link } from 'gatsby';
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
    return (
      <div>
        <SEO
          title="Resume"
          description="A look at my resume shows my biodata & some experiences."
          path="resume"
        />
        <Document
          file="../webresume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
          style={{ maxWidth: '100px', maxHeight: '300px' }}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <Row justify="center" style={{ background: 'lightslategray' }}>
          <Col span={2}>
            <p>{`Page ${pageNumber} of ${numPages}`}</p>
          </Col>
          <Col span={2}>
            <Button type="primary">
              <Link to="/">
                Go back home
              </Link>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
