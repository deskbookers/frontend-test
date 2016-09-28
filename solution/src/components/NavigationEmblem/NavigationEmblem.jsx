import React, { PropTypes } from 'react';

import './NavigationEmblem.less';

// NOTE Emblem mock, fetched from a static path
import emblem from '../../images/icons/png/marker.png';

const NavigationIcon = () => {
  return <div className="navigation-emblem__icon">
    <img src={emblem} />
  </div>;
};

const NavigationEmblem = ({ label }) => {
  return <div className="navigation-emblem">
    <NavigationIcon />
    <span className="navigation-emblem__label">
      {label}
    </span>
  </div>;
};

NavigationEmblem.propTypes = {
  label: PropTypes.string.isRequired
};

export default NavigationEmblem;