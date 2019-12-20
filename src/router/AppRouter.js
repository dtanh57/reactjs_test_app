import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home/Home";
import SubmitGame from "../components/SubmitGame/SubmitGame";
import FAQ from "../components/FAQ/FAQ";
import Jobs from "../components/Jobs/Jobs";

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/submitGame" component={SubmitGame} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/jobs" component={Jobs} />
        {/* <Route path="/tin-tuc/:slug.:id.html" component={NewsDetail} />  */}
      </div>
    );
  }
}

export default AppRouter;
