import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import ScrollSpy from "react-ui-scrollspy";
import ThemeProvider from './theme/themeProvider';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';
import config from '../../config.js';


import { Navbar, Container, Row, Col } from 'react-bootstrap';


const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Container as="main" fluid style={{ marginTop: "1rem" }}>
        <Row className="main-container">
          <Navbar as="aside" className={"col-md-2 left-sidebar sticky-md-top"}>
            <Sidebar location={location} />
          </Navbar>
          <article className={"col-md-8"}>
            <ScrollSpy scrollThrottle={200} offsetTop={200} offsetBottom={-300}>
              {children}
            </ScrollSpy>
            <footer>
              <span className={"text-muted text-center"}>2022 © AtHeartEngineer</span>
            </footer>
          </article>
          <Navbar as="aside" className={"col-md-2 right-sidebar sticky-md-top"} id="scrollspy-nav">
            <div className={"right-sidebar-title"}>Contents</div>
            <li className={"nav-item"}>
              <a href="#gatsby-focus-wrapper" className={"nav-link"}>Top</a>
            </li>
            <RightSidebar location={location} />
          </Navbar>
        </Row>
      </Container>
    </MDXProvider>

  </ThemeProvider >
);

export default Layout;
