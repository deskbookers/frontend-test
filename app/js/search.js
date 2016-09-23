// Define API url
const COWORK_API = 'https://www.deskbookers.com/nl-nl/sajax.json';

// Initial definition for spaces results
let spacesResults = {
  results: []
};

// We render the form and find the search
function formRender() {
  ReactDOM.render(
    React.createElement(CoworkFormSearch, {
      results: spacesResults.results
    }),
    document.getElementById('form')
  );
}

// We render the results
function loadingResults() {
  ReactDOM.render(
    React.createElement("div", {className: 'loader'}, 'loading results...'),
    document.getElementById('results')
  );
  // Animate to the results
  animate(document.body, "scrollTop", "", 0, document.getElementById("results").offsetTop, 1000, true);
}

// We render the results
function resultsRender() {
  if(spacesResults.results.length!==0){ // Yay we have spaces that match!
    ReactDOM.render(
      React.createElement(CoworkResults, {
        results: spacesResults.results
      }),
      document.getElementById('results')
    );
  } else { // We don't have spaces that match
    ReactDOM.render(
      React.createElement("h1", {className: 'no-results'}, 'No matches found.'),
      document.getElementById('results')
    );
  }
  // Animate to the results
  animate(document.body, "scrollTop", "", 0, document.getElementById("results").offsetTop, 1000, true);
}

// Search results render
function runSearch(searchTerm) {
  superagent
    .get(COWORK_API+'?q='+searchTerm)
    .end(function(err, res) {
      if (err || !res.ok) {
       alert('There was an error');
     } else {
      spacesResults.results = JSON.parse(res.text).rows;
      resultsRender();
     }
    });
}

// Cowork search form initial render
const CoworkFormSearch = React.createClass({
  handleSearchClick: function() {
    loadingResults();
    let searchTerm = this.refs.input.value;
    runSearch(searchTerm);
  },
  handleKeyPress: function(e) {
    if (e.key === 'Enter') {
      loadingResults();
      let searchTerm = this.refs.input.value;
      runSearch(searchTerm);
    }
  },
  render: function() {
    // We create the input and button elements for the search
    return React.createElement('div', {},
      [
        React.createElement('input', {
          ref: 'input',
          onKeyPress: this.handleKeyPress ,
          placeholder: 'Find a place to work e.g. Amsterdam...'
        }),
        React.createElement('button', {
          onClick: this.handleSearchClick
        }, 'Search')
      ])
  }
});


// Search result render
const CoworkResults = React.createClass({
  render: function() {
    let rows = this.props.results.map(function(item) {
      // Map the cowork spaces items
      return React.createElement("div",
            { className: "cowork-result" },
            // Create all the elements for the cowork result
            React.createElement("div", {key: item.name, className: 'cw-name'}, item.name),
            React.createElement("div", {key: item.location_name, className: 'cw-location'}, item.location_name+', '+item.location_city),
            React.createElement("div", {key: item.rating, className: 'rating-'+bootstrapStars(item.rating)}),
            React.createElement("div", {key: item.hour_price, className: 'cw-price'}, '€'+item.hour_price),
            React.createElement("img", {src: item.image_urls[0], width: '100'})

      );
    });
    // Create the search result elements
    return React.createElement('div', {},
      [
        React.createElement("h1", {className: 'results'}, 'Search results'),
        React.createElement('div', {}, rows)
      ])
  }
});

// Star rating calculation to display Bootstrap stars
const bootstrapStars = (rating) => {
  return parseInt(5*(rating/10));
};

// Scroll to results
function animate(elem,style,unit,from,to,time,prop) {
    if( !elem) return;
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            if (prop) {
                elem[style] = (from+step*(to-from))+unit;
            } else {
                elem.style[style] = (from+step*(to-from))+unit;
            }
            if( step == 1) clearInterval(timer);
        },25);
    elem.style[style] = from+unit;
}

// Render the initial form
formRender();
