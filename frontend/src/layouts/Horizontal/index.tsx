import React, { Suspense } from "react";
import { Container } from "react-bootstrap";

interface HorizontalLayoutProps {
  children?: any;
}

const Topbar = React.lazy(() => import("../Topbar"));
const Footer = React.lazy(() => import("../Footer"));

const HorizontalLayout = ({ children }: HorizontalLayoutProps) => {
  return (
    <>
      <div id="wrapper">
        <Suspense>
          <Topbar topbarDark={false} />
        </Suspense>

        <div className="content-page">
          <Container fluid className="content">
            <Suspense>{children}</Suspense>
          </Container>

          <Suspense>
            <Footer />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default HorizontalLayout;
