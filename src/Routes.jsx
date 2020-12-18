import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation, Loading, PrivateRoute, Footer } from "./components";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const SecretLazy = lazy(() => import("./pages/Secret/Secret"));
const ProductLazy = lazy(() => import("./pages/Product/Product"));
const LoginLazy = lazy(() => import("./pages/Login/Login"));
const RegisterLazy = lazy(() => import("./pages/Register/Register"));
const ForHerLazy = lazy(() => import("./pages/ForHer/ForHer"));
const ForHimLazy = lazy(() => import("./pages/ForHim/ForHim"));
const CartLazy = lazy(() => import("./pages/Cart/Cart"));
const SubmitLazy = lazy(() => import("./pages/SubmitOrder/SubmitOrder"));

function Routes() {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomeLazy} />
          <Route exact path="/clothes/:id" component={ProductLazy} />
          <PrivateRoute exact path="/secret" component={SecretLazy} />
          <Route exact path="/login" component={LoginLazy} />
          <Route exact path="/register" component={RegisterLazy} />
          <Route exact path="/forher" component={ForHerLazy} />
          <Route exact path="/forhim" component={ForHimLazy} />
          <Route exact path="/cart" component={CartLazy} />
          <Route exact path="/submit" component={SubmitLazy} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;
