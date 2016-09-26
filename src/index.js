import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Root from './containers/Root';
import reducers from './reducers';
import './styles/styles.sass';

// MOCK
const preloadedState = {
    slider: {
        items: [
            { src: '/static/images/image-1.jpg' },
            { src: '/static/images/image-2.jpg' },
            { src: '/static/images/image-3.jpg' },
            { src: '/static/images/image-4.jpg' },
        ],
    },
};

const store = createStore(reducers, preloadedState);
const rootEl = document.getElementById('root');

const render = (App) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>,
        rootEl
    );
}


if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        ReactDOM.unmountComponentAtNode(rootEl);
        setImmediate(() => {
            render(require('./containers/Root').default);
        });
    });
}

render(Root);
