import React from 'react';
import { connect } from 'react-redux';

import NavigationBar from '../components/NavigationBar/NavigationBar';

const NAV_LABEL = 'Officebookers';
const NAV_LINKS_MOCK = {
  'Home': {
    primary: false,
    href: '#'
  },
  'Sign In': {
    primary: true,
    href: '#/signin'
  }
};

const mapStateToProps = (state, props) => {
  return {
    label: NAV_LABEL,
    links: NAV_LINKS_MOCK
  };
};

export default connect(mapStateToProps, null)(NavigationBar);