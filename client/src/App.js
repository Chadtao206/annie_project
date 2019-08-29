import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Savedmate from "./pages/Savedmate";
import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/mate" component={Savedmate} />
        <Route exact path="/profile" component={Profile} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
