/*import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';
import * as serviceWorker from './components/ServiceWorker/serviceWorker';*/

import React from 'react';
import './styles/styles.scss';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import * as serviceWorker from './components/ServiceWorker/serviceWorker';
import {
    Route,
    Switch,
    HashRouter
} from 'react-router-dom';

import App from './components/App/App';
import AppDefault from './components/ReactDefault/App';

const routes = (
    <HashRouter>
        <Switch>
            <App>
				<Route path="/" exact component={AppDefault} />
            </App>
        </Switch> 
    </HashRouter>
);

const outlet = document.getElementById('root');

const render = () => {
    ReactDOM.render(
        <AppContainer>
            {routes}
        </AppContainer>,
        outlet
    );
};

render();

if ((module as any).hot) {
    (module as any).hot.accept(render);
}
serviceWorker.unregister();
