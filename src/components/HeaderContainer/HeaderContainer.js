import React, { Component } from "react";
import { Layout, Icon } from "antd";

const { Header } = Layout;

export default class HeaderContainer extends Component {
  render() {
    return (
      <Header style={{ background: "#fff", padding: 10 }}>
        Header
        <Icon className="trigger" type={"menu-unfold"} onClick={this.toggle} />
      </Header>
    );
  }
}
