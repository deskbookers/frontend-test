import React, { PropTypes } from 'react';

import NavigationEmblem from '../NavigationEmblem/NavigationEmblem';
import NavigationLinks from '../NavigationLinks/NavigationLinks';

import './NavigationBar.less';

const NavigationBar = ({ label, links }) => {
  return (
    <div className="navigation-bar">
      <div className="navigation-bar__inner">
        <NavigationEmblem 
          label={label}
        />
        <NavigationLinks 
          links={links}
        />
      </div>
    </div> 
  );
};

NavigationBar.propTypes = {
  label: PropTypes.string.isRequired,
  links: PropTypes.object
};

export default NavigationBar;