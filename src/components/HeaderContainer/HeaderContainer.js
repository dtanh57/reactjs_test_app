import React, { PureComponent } from "react";
import { Layout, Icon, Button, Menu, Row, Col, Dropdown } from "antd";
import { COLOR, SIZE, STRINGS, setLanguage, lang } from "../../utils/";
import { withRouter, NavLink, matchPath } from "react-router-dom";
import { HeaderService } from "./services/HeaderService";

class HeaderContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: lang
    };
    this.menuDropdown = [
      {
        key: 1,
        value: "English",
        lang: "en"
      },
      {
        key: 2,
        value: "Vietnamese",
        lang: "vi"
      }
    ];
  }

  navTo = (value, data = {}) => () => {
    this.props.history.push(`/${value}`, {
      data: data
    });
  };
  navToAbout = () => {
    this.props.history.push(`/home`, {
      data: { scrollToAbout: true }
    });
    if (!!matchPath(this.props.location.pathname, "/home")) {
      console.log(window.location.pathname);
      HeaderService.set({ scrollToAbout: true });
    }
  };

  onDropdownClick = e => {
    let indexSelected = this.menuDropdown.find(
      item => item.key === parseInt(e.key, 10)
    );
    let newSelected = indexSelected.value;
    setLanguage(indexSelected.lang);
    this.setState({ selected: newSelected });
  };
  renderDropdown = () => {
    return (
      <Menu onClick={this.onDropdownClick}>
        {this.menuDropdown.map(item => {
          return <Menu.Item key={item.key}>{item.value}</Menu.Item>;
        })}
      </Menu>
    );
  };

  render() {
    const { selected } = this.state;
    return (
      <div>
        <Row style={styles.container}>
          <Col span={8}>
            <Button style={styles.btnLogo} onClick={this.navTo("home")}>
              {STRINGS.home}
            </Button>
          </Col>
          <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={styles.logo}
              alt={"logo"}
              src={require("../../utils/images/logo.png")}
            />
          </Col>
          <Col span={8}>
            <Row style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button style={styles.btnJobFAQ} onClick={this.navTo("champion")}>
                {STRINGS.champions}
              </Button>
              <Button style={styles.btnJobFAQ} onClick={this.navTo("news")}>
                {STRINGS.news}
              </Button>
              <Button
                style={styles.btnJobFAQ}
                onClick={this.navTo("submitGame")}
              >
                {STRINGS.register}
              </Button>
              <Dropdown overlay={this.renderDropdown} trigger={["click"]}>
                <Button style={styles.btnSubmit}>
                  {selected} <Icon type="down" />
                </Button>
              </Dropdown>
            </Row>
          </Col>
        </Row>
        <Row style={styles.containerBelow}>
          <Col span={11} style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ height: 80 }}
              src={require("../../utils/images/logo.png")}
            />
          </Col>
          <Col
            span={13}
            style={{
              display: "flex",
              backgroundColor: COLOR.grey_light,
              height: 80,
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundImage: `url(${require("../../utils/images/header.png")})`,
              backgroundSize: "100%"
            }}
          >
            <NavLink style={styles.menuBelow} to="/faq">
              {STRINGS.faq}
            </NavLink>
            <Button
              style={{
                color: COLOR.white,
                backgroundColor: "transparent",
                borderWidth: 0,
                fontSize: SIZE.text,
                marginRight: 40
              }}
              onClick={this.navToAbout}
            >
              {STRINGS.about}
            </Button>
            <NavLink style={styles.menuBelow} to="/contact">
              {STRINGS.contact_us}
            </NavLink>
          </Col>
        </Row>
      </div>
    );
  }
}

const styles = {
  container: {
    background: COLOR.black,
    display: "flex",
    height: 40,
    overflow: "hidden",
    padding: 0,
    alignItems: "center"
  },
  containerBelow: {
    display: "flex",
    height: 80,
    overflow: "hidden",
    alignItems: "center"
  },
  menuBelow: {
    color: COLOR.white,
    fontSize: SIZE.text,
    marginRight: 40
  },
  btnLogo: {
    height: 40,
    display: "flex",
    alignItems: "center",
    fontSize: SIZE.text,
    borderWidth: 0,
    backgroundColor: COLOR.black,
    color: COLOR.white
  },
  logo: {
    width: 100,
    height: 40
  },
  btnJobFAQ: {
    backgroundColor: COLOR.black,
    color: COLOR.white,
    borderWidth: 0,
    height: 40,
    fontSize: SIZE.small_text,
    paddingRight: SIZE.app_padding,
    paddingLeft: SIZE.app_padding
  },
  btnSubmit: {
    backgroundColor: COLOR.black,
    color: COLOR.white,
    height: 40,
    borderWidth: 0,
    fontSize: SIZE.small_text
  }
};

export default withRouter(HeaderContainer);
