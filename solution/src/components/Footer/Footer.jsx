import React, { PropTypes } from 'react';

import './Footer.less';

const Footer = () => {
  return <div className="footer">
      <div className="footer__inner">
      <span>
        Officebookers
      </span>
      <span>
        @twitter
      </span>
      <span>
        @facebook
      </span>
    </div>
  </div>;
};

Footer.propTypes = {};

export default Footer;