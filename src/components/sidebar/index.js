import * as React from 'react';
import Tree from './tree';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { ExternalLink } from 'react-feather';
import config from '../../../config';

// eslint-disable-next-line no-unused-vars

const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </li>
  );
})``;

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      return (
        <>
          <div className="group">
            <div className={'sidebar-title'}>Here Be Treasures</div>
            <Tree edges={allMdx.edges} />
          </div>
          <div className="group">
            <div className={'sidebar-title'}>Treasure Maps</div>
            <ul className={"nav nav-pills flex-column mb-auto"}>
              {config.sidebar.links.map((link, key) => {
                if (link.link !== '' && link.text !== '') {
                  return (
                    <li className={"nav-item " + key}>
                      <a href={link.link} target="_blank" className={"nav-link"} aria-current="page">
                        {link.text}
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </>
      );
    }}
  />
);

export default SidebarLayout;
