import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

// import Link from './link';
import config from '../../config';
import styled from '@emotion/styled';

import { Container } from 'react-bootstrap';


export const ListItem = styled(({ className, active, level, ...props }) => {
  let id = props.to.replace("#", "");

  return (
    <li className={className + " nav-item"}>
      <a data-to-scrollspy-id={id} href={props.to} {...props} className={"nav-link"}>
        {props.children}
      </a>
    </li>
  );
})`

  a {
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    /*padding: 0.45rem 0 0.45rem ${props => (props.level || 0) * 1}rem;*/
    display: block;
    position: relative;

    &:hover {
      color: var(--color-link);
    }

`;

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      let navItems = [];

      let finalNavItems;

      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        const navItems = allMdx.edges.map((item, index) => {
          let innerItems;

          if (item !== undefined) {
            if (
              item.node.fields.slug === location.pathname ||
              config.gatsby.pathPrefix + item.node.fields.slug === location.pathname
            ) {
              if (item.node.tableOfContents.items) {
                innerItems = item.node.tableOfContents.items.map((innerItem, index) => {
                  const itemId = innerItem.title
                    ? innerItem.title.replace(/\s+/g, '').toLowerCase()
                    : '#';

                  return (
                    <ListItem key={index} to={`#${itemId}`} level={1}>
                      {innerItem.title}
                    </ListItem>
                  );
                });
              }
            }
          }
          if (innerItems) {
            finalNavItems = innerItems;
          }
        });
      }

      if (finalNavItems && finalNavItems.length) {
        return (
          <>
            {finalNavItems}
          </>
        );
      } else {
        return (
          <>
            <div></div>
          </>
        );
      }
    }}
  />
);

export default SidebarLayout;
