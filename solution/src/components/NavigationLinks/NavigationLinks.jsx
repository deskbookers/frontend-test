import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './NavigationLinks.less';

const renderLinksList = (links) => {
  return Object.keys(links).map((label, index) => {
    const link = links[label];
    let href;
    let primary;
    
    if (typeof link === 'object') {
      href = link.href;
      primary = link.primary;
    } else if (typeof link === 'string') {
      href = link;
      primary = true;
    } else {
      return null;
    }
    
    return <a 
      className={classNames(
        'navigation-links__link',
        {
          'navigation-links__link-primary': primary,
          'navigation-links__link-secondary': !primary
        }
      )}
      key={index} 
      href={href}
    >
      {label}
    </a>
  });
};

const NavigationLinks = ({ links }) => {
  return <div className="navigation-links">
    {renderLinksList(links)}
  </div>;
};

NavigationLinks.propTypes = {
  links: PropTypes.object
};

export default NavigationLinks;