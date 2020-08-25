import React from 'react';
import { Navigation, Footer } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import * as Pages from './pages';
import * as Routes from './constants/routes';

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
            <Route exact path={Routes.LANDING} component={Pages.Landing} />
            <Route exact path={Routes.ACCOUNT} component={Pages.Account} />
            <Route exact path={Routes.ABOUT} component={Pages.About} />
            <Route exact path={Routes.LOGIN} component={Pages.Login} />
            <Route
              exact
              path={Routes.PRIVACY_POLICY}
              component={Pages.PrivacyPolicy}
            />
            <Route
              exact
              path={Routes.COOKIE_POLICY}
              component={Pages.CookiePolicy}
            />
            <Route exact path={Routes.CONTACT} component={Pages.Contact} />
            <Route
              exact
              path={Routes.FITNESS_PROGRAM_DESCRIPTION}
              component={Pages.Description}
            />
            <Route exact path={Routes.PURCHASE} component={Pages.Purchase} />
            <Route exact path={Routes.REGISTER} component={Pages.Register} />
            <Route path="/" component={Pages.NotFound} />
          </Switch>
        </Router>
      </Container>
    </>
  );
};

export default App;
