import React, { Component } from "react";
import Home from "../components/Home/Home";
import { Route } from "react-router-dom";

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/tin" component={News} />
        <Route exact path="/lien-he" component={Contact} />
        <Route path="/tin-tuc/:slug.:id.html" component={NewsDetail} /> */}
      </div>
    );
  }
}

export default AppRouter;
