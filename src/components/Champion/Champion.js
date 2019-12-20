import React, { PureComponent } from "react";

export default class Champion extends PureComponent {
  render() {
    return <div style={styles.container}>Champion</div>;
  }
}

const styles = {
  container: {
    width: "100%",
    minHeight: 1000,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center"
  }
};
