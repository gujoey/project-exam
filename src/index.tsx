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

//user site
import HomePage from './pages/HomePage/homePage';
import ResultsPage from './pages/ResultsPage/resultsPage';
import HotelSpecificPage from './pages/HotelSpecificPage/HotelSpecificPage';
import EnquirySuccessPage from './pages/EnquiriesSuccessPage/enquiriesSuccessPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ContactSuccessPage from './pages/ContactPage/ContactSuccessPage';

//admin site
import LoginPage from './pages/AdminSite/LoginPage/LoginPage';

const routes = (
    <HashRouter>
        <Switch>
            <App>
                {/*user site*/}
				<Route path="/" exact component={HomePage} />
                <Route path="/result/:id" component={ResultsPage}/>
                <Route path="/establishments/:id" component={HotelSpecificPage}/>
                <Route path="/enquiry-success" component={EnquirySuccessPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/contact-success" component={ContactSuccessPage}/>

                {/*admin site*/}
                <Route path="/admin/login" exact component={LoginPage} />
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
