import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";
import Detail from "../Routes/Detail"

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="https://himiracle.github.io/landApp/" exact component={Home} />
        <Route path="https://himiracle.github.io/landApp/tv" component={TV} />
        <Route path="https://himiracle.github.io/landApp/search" component={Search} />
        <Route path="https://himiracle.github.io/landApp/movie/:id" component={Detail} />
        <Route path="https://himiracle.github.io/landApp/show/:id" component={Detail} />
        <Redirect from="*" to="https://himiracle.github.io/landApp/" />
      </Switch>
    </>
  </Router>
);