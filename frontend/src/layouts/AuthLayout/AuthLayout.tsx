import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

interface AccountLayoutProps {
  bottomLinks?: any;
  children?: any;
}

const AuthLayout = ({ bottomLinks, children }: AccountLayoutProps) => {
  return (
    <>
      <div className="account-pages my-5">
        <Container>
          <Row className="justify-content-center">
            <Col xl={10}>
              <Card>
                <Card.Body className="p-0">
                  <Row className="g-0">
                    <Col lg={6} className="p-4">
                      {children}
                    </Col>
                    <Col lg={6} className="d-none d-md-inline-block">
                      <div className="auth-page-sidebar">
                        <div className="overlay">
                        </div>
                        <div className="auth-user-testimonial"></div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              {bottomLinks}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AuthLayout;
