import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Root from './containers/Root';
import reducers from './reducers';
import './styles/styles.sass';

const preloadedState = {
    slider: {
        items: [
            { src: '/images/1.jpg' },
            { src: '/images/2.jpg' },
            { src: '/images/3.jpg' },
        ],
    },
};

const store = createStore(reducers, preloadedState);
const rootEl = document.getElementById('root');

const render = (App) => {
    ReactDOM.render(
        <AppContainer>
            <App store={store} />
        </AppContainer>,
        rootEl
    );
}


if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        // ReactDOM.unmountComponentAtNode(rootEl);
        setImmediate(() => {
            render(require('./containers/Root').default);
        });
    });
}

render(Root);
