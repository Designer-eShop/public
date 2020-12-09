import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Loading, PrivateRoute } from "./components";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const AboutLazy = lazy(() => import("./pages/About/About"));
const SecretLazy = lazy(() => import("./pages/Secret/Secret"));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomeLazy} />
          <PrivateRoute exact path="/secret" component={SecretLazy} />
          <Route exact path="/about" component={AboutLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
