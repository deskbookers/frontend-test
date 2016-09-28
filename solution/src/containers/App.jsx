import React from 'react';

import NavigationContainer from './NavigationContainer';
import CarouselContainer from './CarouselContainer';
import ResultsContainer from './ResultsContainer';
import FooterContainer from './FooterContainer';

const App = () => {
  return (
    <div>
      <div className="over-the-fold-view">
        <NavigationContainer />
        <CarouselContainer />
      </div>
      <ResultsContainer />
      <FooterContainer />
    </div>
  );
};

export default App;
