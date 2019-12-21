import React, { Component } from "react";
import { Row, Col, Icon, Button } from "antd";
import { COLOR, SIZE, STRINGS } from "../../utils";
import { NavLink, matchPath, withRouter } from "react-router-dom";
import { HeaderService } from "../HeaderContainer/services/HeaderService";

class FooterContainer extends Component {
  navToAbout = () => {
    this.props.history.push(`/home`, {
      data: { scrollToAbout: true }
    });
    if (!!matchPath(this.props.location.pathname, "/home")) {
      HeaderService.set({ scrollToAbout: true });
    }
  };
  render() {
    return (
      <Row
        style={{
          backgroundColor: COLOR.black,
          paddingTop: 30,
          paddingBottom: 30
        }}
      >
        <Col
          span={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <img
            style={styles.logo}
            src={require("../../utils/images/logo.png")}
          />
          <Row
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <Col span={12} style={styles.col}>
              <NavLink to="/home">{STRINGS.home}</NavLink>
              <NavLink to="/champion">{STRINGS.champions}</NavLink>
              <NavLink to="/news">{STRINGS.news}</NavLink>
              <NavLink to="/submitGame">{STRINGS.register}</NavLink>
            </Col>
            <Col span={12} style={styles.col}>
              <NavLink to="/faq">{STRINGS.faq}</NavLink>
              {/* <NavLink to="/about">{STRINGS.about}</NavLink> */}
              <Button
                style={{
                  color: "#1090FF",
                  backgroundColor: "transparent",
                  borderWidth: 0,
                  padding: 0
                }}
                onClick={this.navToAbout}
              >
                {STRINGS.about}
              </Button>
              <NavLink to="/contact">{STRINGS.contact_us}</NavLink>
            </Col>
          </Row>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 30
          }}
        >
          <div style={{ color: "white" }}>{STRINGS.stay_connected}</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <a href="http://facebook.com/dtanh57" target="_blank">
              <Icon style={styles.icon} type="facebook" />
            </a>
            <a href="https://www.youtube.com/channel/UCM_k0imPtv8y03Y-bCE87oA">
              <Icon style={styles.icon} type="youtube" target="_blank" />
            </a>
            <a href="https://www.instagram.com/dtanh57/">
              <Icon style={styles.icon} type="instagram" target="_blank" />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 100,
              marginTop: 150
            }}
          >
            <p style={{ color: COLOR.white }}>
              COPYRIGHT © Do Tuan Anh 12/2019
            </p>
            <p style={{ color: COLOR.white, alignSelf: "flex-end" }}>
              {STRINGS.terms_of_service} | {STRINGS.privacy_policy}
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}

const styles = {
  logo: { width: "70%" },
  col: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: 100,
    marginTop: 30
  },
  icon: {
    color: "white",
    margin: 10,
    fontSize: SIZE.text
  }
};

export default withRouter(FooterContainer);
