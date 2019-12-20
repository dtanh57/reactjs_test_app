import React, { PureComponent } from "react";

export default class SubmitGame extends PureComponent {
  render() {
    return <div style={styles.container}>News</div>;
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
