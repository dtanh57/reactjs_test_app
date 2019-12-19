import React, { Component } from "react";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import FooterContainer from "./components/FooterContainer/FooterContainer";
import { Layout } from "antd";
class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <HeaderContainer />
          <AppRouter />
          <FooterContainer />
        </Layout>
      </Router>
    );
  }
}

export default App;
