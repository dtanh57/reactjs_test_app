import React, { PureComponent } from "react";

export default class News extends PureComponent {
  render() {
    return <div style={styles.container}>News</div>;
  }
}

const styles = {
  container: {
    display: "flex",
    width: "100%",
    minHeight: 1000,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  }
};
