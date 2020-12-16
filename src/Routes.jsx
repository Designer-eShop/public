import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation, Loading, PrivateRoute, Footer } from "./components";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const AboutLazy = lazy(() => import("./pages/About/About"));
const SecretLazy = lazy(() => import("./pages/Secret/Secret"));
const ProductLazy = lazy(() => import("./pages/Product/Product"));

function Routes() {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomeLazy} />
          <Route exact path="/clothes/:id" component={ProductLazy} />
          <PrivateRoute exact path="/secret" component={SecretLazy} />
          <Route exact path="/about" component={AboutLazy} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;
