import React, { useEffect } from 'react';
import './App.css';

import { CookiesProvider } from 'react-cookie';

import { createBrowserHistory } from 'history';

import ReactGA from 'react-ga';

import NavBar from '../src/nav-bar/NavBar';

import { Switch, Route, Redirect, Router, useLocation } from "react-router-dom";

import Home from './home/Home'
import About from './about/About'
import NotFound from './404/NotFound'
import Projects from './projects/Projects'
import Editor from './editor/Editor'
import Contacts from './contacts/Contacts'

import CookiePolicy from './cookie-policy/CookiePolicy'
import PrivacyPolicy from './privacy-policy/PrivacyPolicy'
import TermsOfUse from './terms-of-use/TermsOfUse'

import CookieBanner from './cookie-banner/CookieBanner'

import "./fontello/css/fontello.css"

function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

function App() {
    const history = createBrowserHistory();

    let trackingId = ''
    if(process.env.REACT_APP_GOOGLE_ANALYTICS_ID !== undefined) {
        trackingId = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
    }

    ReactGA.initialize(trackingId)
    ReactGA.set({ anonymizeIp: true })

    history.listen(location => {
        ReactGA.pageview(location.pathname)
    })
 
    return (
        <div>
            <Router history={ history }>
                <ScrollToTop />
                <NavBar></NavBar>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route path={'/article/:id'}>
                        <Editor/>
                    </Route>
                    <Route path={'/contacts'}>
                        <Contacts/>
                    </Route>
                    <Route path={'/404'}>
                        <NotFound />
                    </Route>
                    <Route path={'/privacy-policy'}>
                        <PrivacyPolicy />
                    </Route>
                    <Route path={'/cookie-policy'}>
                        <CookiePolicy />
                    </Route>
                    <Route path={'/terms-of-use'}>
                        <TermsOfUse />
                    </Route>
                    <Redirect to={"/404"} />
                </Switch> 
                <CookiesProvider>
                    <CookieBanner />
                </CookiesProvider>
            </Router>
        </div>
    );
}

export default App;
