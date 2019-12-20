import React, { Component } from "react";
import { Layout } from "antd";
import SlideShow from "../../element/slideshow/SlideShow";

const { Content } = Layout;

export default class Home extends Component {
  imageSlide = [
    { src: require("../../utils/images/logo.png"), caption: "Lucian" },
    { src: require("../../utils/images/1.jpg"), caption: "Lucian" },
    { src: require("../../utils/images/2.jpg"), caption: "Lucian" }
  ];
  render() {
    return (
      <Content style={styles.container}>
        <SlideShow
          input={this.imageSlide}
          ratio={`10:4`}
          mode={`automatic`}
          timeout={`3000`}
        />
        <div>homevl</div>
      </Content>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    minHeight: 1000,
    justifyContent: "center",
    alignItems: "center"
  }
};
