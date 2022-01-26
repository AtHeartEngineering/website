import * as React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Link from './link';

import config from '../../config.js';

import Sidebar from './sidebar';

const StyledBgDiv = styled('div')`
  height: 60px;
  position: relative;
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

const Header = ({ location }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            githubUrl
            helpUrl
            tweetText
            logo {
              link
              image
            }
            headerLinks {
              link
              text
            }
          }
        }
      }
    `}
    render={(data) => {
      const {
        site: {
          siteMetadata: { headerTitle, logo, headerLinks },
        },
      } = data;

      return (<Navbar collapseOnSelect expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="https://atheart.engineering/">
            <img
              className={'d-inline-block align-top'}
              src={logo.image}
              alt={'logo'}
              width="30"
              height="30"
            />{' '}
            <span
              className={''}
              dangerouslySetInnerHTML={{ __html: headerTitle }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="https://youtube.com/atheartengineer" target="_blank">Youtube</Nav.Link>
              <Nav.Link href="https://github.com/AtHeartEngineer" target="_blank">Github</Nav.Link>
              <Nav.Link href="https://twitter.com/AtHeartEngineer" target="_blank">Twitter</Nav.Link>
              <Nav.Link href="https://reddit.com/u/AtHeartEngineer" target="_blank">Reddit</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>);
    }}
  />
);

export default Header;


let x = <div style={{ backgroundColor: 'red' }}></div>