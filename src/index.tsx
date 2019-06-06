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
import DashboardPage from './pages/AdminSite/DashboardPage/DashboardPage';
import EnquiriesPage from './pages/AdminSite/EnquiriesPage/EnquiriesPage';
import EstablishmentsPage from './pages/AdminSite/EstablishmentsPage/EstablishmentsPage';
import NewEstablishmentPage from './pages/AdminSite/EstablishmentsPage/NewEstablishmentPage';
import MessagesPage from './pages/AdminSite/MessagesPage/MessagesPage';

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
                <Route path="/admin/dashboard" component={DashboardPage}/>
                <Route path="/admin/enquiries" component={EnquiriesPage}/>
                <Route path="/admin/establishments" component={EstablishmentsPage}/>
                <Route path="/admin/new-establishment" component={NewEstablishmentPage}/>
                <Route path="/admin/messages" component={MessagesPage}/>

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
