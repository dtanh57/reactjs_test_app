import React, { Component } from "react";
import { Layout, Icon } from "antd";
import { COLOR } from "../../utils/";

const { Header } = Layout;

export default class HeaderContainer extends Component {
  render() {
    return (
      <Header
        style={{
          background: COLOR.main_color,
          padding: 10,
          textAlign: "center"
        }}
      >
        <p style={{ color: COLOR.white }}>Header</p>
        <Icon
          style={{ marginTop: 10 }}
          type={"menu-unfold"}
          onClick={this.toggle}
        />
      </Header>
    );
  }
}
