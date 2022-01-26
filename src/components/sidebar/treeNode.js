import * as React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';
import { Dropdown } from 'react-bootstrap';
import { divide } from 'lodash';

const TreeNode = ({ className = '', firstLevel, setCollapsed, collapsed, url, title, items, ...rest }) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }

  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;

  if (firstLevel) {
    return (
      <ul className={calculatedClassName + ' firstlevel nav nav-pills flex-column mb-auto'}>
        {title && (
          <Link to={url}>
            {title}
            {title && hasChildren ? (
              <button onClick={collapse} aria-label="collapse" className="collapser">
                {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
              </button>
            ) : null}
          </Link>
        )}

        {!isCollapsed && hasChildren ? (
          <>
            {items.map((item, index) => (
              <TreeNode
                key={item.url + index.toString()}
                setCollapsed={setCollapsed}
                collapsed={collapsed}
                {...item}
              />
            ))}
          </>
        ) : null}
      </ul>
    )
  } else {
    return (
      <li className={calculatedClassName + ' nav-item'}>
        {title && (
          <Link to={url} className="nav-link">
            {title}
            {title && hasChildren ? (
              <button onClick={collapse} aria-label="collapse" className="collapser">
                {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
              </button>
            ) : null}
          </Link>
        )}

        {!isCollapsed && hasChildren ? (
          <Dropdown>
            {items.map((item, index) => (
              <TreeNode
                key={item.url + index.toString()}
                setCollapsed={setCollapsed}
                collapsed={collapsed}
                {...item}
              />
            ))}
          </Dropdown>
        ) : null}
      </li>
    );
  }
};

export default TreeNode;
