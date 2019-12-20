import React, { Component } from "react";
import { Layout } from "antd";
const { Content } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Content style={styles.container}>
        <div>homevl</div>
      </Content>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    minHeight: 1000,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  }
};
