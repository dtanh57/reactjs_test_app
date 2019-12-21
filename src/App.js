import React, { Component } from "react";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import FooterContainer from "./components/FooterContainer/FooterContainer";
import { onChangeLanguage } from "./utils/resource/strings";
import { Spin, Icon } from "antd";

const antIcon = <Icon type="loading" style={{ fontSize: 50 }} spin />;

class App extends Component {
  state = { loading: false };
  componentDidMount() {
    onChangeLanguage(`Root`, this.onRefresh);
  }
  onRefresh = () => {
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), 500);
  };

  render() {
    if (this.state.loading) {
      return (
        <div
          style={{
            display: "flex",
            height: window.innerHeight,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Spin indicator={antIcon} />
        </div>
      );
    }
    return (
      <Router>
        <HeaderContainer />
        <AppRouter />
        <FooterContainer />
      </Router>
    );
  }
}

export default App;
