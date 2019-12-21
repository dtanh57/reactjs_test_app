import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home/Home";
import SubmitGame from "../components/SubmitGame/SubmitGame";
import News from "../components/News/News";
import Champion from "../components/Champion/Champion";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/submitGame" component={SubmitGame} />
        <Route exact path="/news" component={News} />
        <Route exact path="/champion" component={Champion} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route path="/tin-tuc/:slug.:id.html" component={NewsDetail} />  */}
      </div>
    );
  }
}

export default AppRouter;
