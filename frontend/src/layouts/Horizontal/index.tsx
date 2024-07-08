import React, { Suspense } from "react";
import { Container } from "react-bootstrap";

interface HorizontalLayoutProps {
  children?: any;
}

const Topbar = React.lazy(() => import("../Topbar"));
const Footer = React.lazy(() => import("../Footer"));
const loading = () => <div className="text-center"></div>;

const HorizontalLayout = ({ children }: HorizontalLayoutProps) => {
  return (
    <>
      <div id="wrapper">
        <Suspense fallback={loading()}>
          <Topbar topbarDark={false} />
        </Suspense>

        <div className="content-page">
          <Container fluid className="content">
            <Suspense fallback={loading()}>{children}</Suspense>
          </Container>

          <Suspense fallback={loading()}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default HorizontalLayout;
