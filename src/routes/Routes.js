import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Quotation from "../pages/Quotation";
import Contact from "../pages/Contact";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Contact} />
        <Route path="/quotation" exact={true} component={Quotation} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
