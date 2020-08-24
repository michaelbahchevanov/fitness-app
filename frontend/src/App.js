import React from 'react';
import { Navigation, Footer } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import {
  PrivacyPolicy,
  CookiePolicy,
  Contact,
  Home,
  Profile,
  About,
  Login,
} from './pages';

const App = () => {
  return (
    <>
      <Container fluid>
        <Router>
          <Row>
            <Navigation />
          </Row>
          <Row>
            <Footer />
          </Row>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/about" exact component={About} />
            <Route path="/login" exact component={Login} />
            <Route path="/privacy" exact component={PrivacyPolicy} />
            <Route path="/cookie" exact component={CookiePolicy} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/" render={() => <div>Error 404</div>} />
          </Switch>
        </Router>
      </Container>
    </>
  );
};

export default App;
