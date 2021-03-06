import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { Navigation, Footer } from '..';
import * as Components from '..';
import * as Pages from '../../pages';
import * as Routes from '../../constants/routes';

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
            <Route exact path={Routes.LOGIN} component={Components.Login} />
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
            <Route
              exact
              path={Routes.REGISTER}
              component={Components.Register}
            />
            <Route
              exact
              path={Routes.PASSWORD_RESET}
              component={Components.ResetPassword}
            />
            <Route
              exact
              path={Routes.PASSWORD_CHANGE}
              component={Components.ChangePassword}
            />
            <Route path="/" component={Pages.NotFound} />
          </Switch>
        </Router>
      </Container>
    </>
  );
};

export default App;
