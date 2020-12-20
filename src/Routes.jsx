import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation, Loading, PrivateRoute, Footer } from "./components";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const ProductLazy = lazy(() => import("./pages/Product/Product"));
const LoginLazy = lazy(() => import("./pages/Login/Login"));
const RegisterLazy = lazy(() => import("./pages/Register/Register"));
const ForHerLazy = lazy(() => import("./pages/ForHer/ForHer"));
const ForHimLazy = lazy(() => import("./pages/ForHim/ForHim"));
const CartLazy = lazy(() => import("./pages/Cart/Cart"));
const SubmitLazy = lazy(() => import("./pages/SubmitOrder/SubmitOrder"));
const OrdersLazy = lazy(() => import("./pages/Orders/Orders"));

function Routes() {
  const [scrollbar, setScrollbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setScrollbar(true);
    } else {
      setScrollbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={["/submit", "/orders"]}>
            <Navigation />
            <PrivateRoute exact path="/submit" component={SubmitLazy} />
            <PrivateRoute exact path="/orders" component={OrdersLazy} />
          </Route>
          <Route exact path={["/", "/forher", "/forhim"]}>
            <Navigation
              menufill="secondary"
              cartfill="secondary"
              logofill="secondary"
              position="fixed"
              linkcolor="secondary"
              navbgcolor={scrollbar && "ok"}
              navbgcolorfs="ok"
            />
            <Route exact path="/" component={HomeLazy} />
            <Route exact path="/forher" component={ForHerLazy} />
            <Route exact path="/forhim" component={ForHimLazy} />
          </Route>
          <Route
            exact
            path={[
              "/clothes/:id",
              "/login",
              "/register",
              "/cart",
              "/submit",
              "/orders",
            ]}
          >
            <Navigation />
            <Route exact path="/clothes/:id" component={ProductLazy} />
            <Route exact path="/login" component={LoginLazy} />
            <Route exact path="/register" component={RegisterLazy} />
            <Route exact path="/cart" component={CartLazy} />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;
