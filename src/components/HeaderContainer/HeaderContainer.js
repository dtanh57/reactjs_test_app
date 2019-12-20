import React, { Component } from "react";
import { Layout, Icon, Button } from "antd";
import { COLOR, SIZE } from "../../utils/";
import { withRouter } from "react-router-dom";

const { Header } = Layout;

class HeaderContainer extends Component {
  navTo = value => () => {
    this.props.history.push(`/${value}`, {
      // name: item.id
    });
  };

  render() {
    return (
      <Header style={styles.container}>
        <Button style={styles.btnLogo} onClick={this.navTo("home")}>
          <img
            alt={"logo"}
            style={styles.logo}
            src={require("../../utils/images/logo.png")}
          />
          LFC HD
        </Button>
        <div style={this.header}>
          <Button style={styles.btnJobFAQ} onClick={this.navTo("jobs")}>
            Jobs
          </Button>
          <Button style={styles.btnJobFAQ} onClick={this.navTo("faq")}>
            FAQ
          </Button>
          <Button
            style={{
              ...styles.btnJobFAQ,
              borderLeftWidth: 1,
              borderColor: COLOR.grey_light
            }}
          >
            <Icon type="flag" /> Language <Icon type="caret-down" />
          </Button>
          <Button style={styles.btnSubmit} onClick={this.navTo("submitGame")}>
            SUBMIT YOUR GAME
          </Button>
        </div>
      </Header>
    );
  }
}

const styles = {
  container: {
    background: COLOR.main_color,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    overflow: "hidden"
  },
  btnLogo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: SIZE.text,
    margin: 0,
    borderWidth: 0,
    backgroundColor: COLOR.main_color,
    color: COLOR.white
  },
  logo: {
    width: 100,
    height: 40
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 40
  },
  btnJobFAQ: {
    backgroundColor: COLOR.main_color,
    color: COLOR.white,
    borderWidth: 0,
    height: 40,
    fontSize: SIZE.text,
    paddingRight: SIZE.app_padding,
    paddingLeft: SIZE.app_padding
  },
  btnSubmit: {
    backgroundColor: COLOR.black,
    color: COLOR.white,
    height: 40,
    borderWidth: 0,
    fontSize: SIZE.text
  }
};

export default withRouter(HeaderContainer);
