import React, { PureComponent } from "react";
import { Layout, Icon, Button, Menu, Select, Row, Col } from "antd";
import { COLOR, SIZE } from "../../utils/";
import { withRouter } from "react-router-dom";

const { Header } = Layout;
class HeaderContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: "English"
    };
    this.menuItems = [
      {
        key: 1,
        value: "English"
      },
      {
        key: 2,
        value: "Vietnamese"
      }
    ];
  }

  navTo = value => () => {
    this.props.history.push(`/${value}`, {
      // name: item.id
    });
  };
  handleMenuClick = e => {
    let newSelected = this.menuItems.find(
      item => item.key === parseInt(e.key, 10)
    ).value;
    this.setState({ selected: newSelected });
  };

  renderDropdown = () => {
    return (
      <Menu
        style={{
          backgroundColor: COLOR.main_color,
          width: "20%",
          justifyContent: "flex-end"
        }}
        onClick={this.handleMenuClick}
      >
        {this.menuItems.map(item => {
          return <Menu.Item key={item.key}>{item.value}</Menu.Item>;
        })}
      </Menu>
    );
  };

  render() {
    const { selected } = this.state;
    return (
      <Row style={styles.container}>
        <Col span={14}>
          <Button style={styles.btnLogo} onClick={this.navTo("home")}>
            <img
              style={styles.logo}
              alt={"logo"}
              src={require("../../utils/images/logo.png")}
            />
            LFC HD
          </Button>
        </Col>
        <Col span={10}>
          <Row style={{ alignItems: "flex-end" }}>
            <Button onClick={this.navTo("jobs")}>Jobs</Button>
            <Button onClick={this.navTo("faq")}>FAQ</Button>
            <Select defaultValue="lucy">
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
            </Select>
            <Button onClick={this.navTo("submitGame")}>SUBMIT YOUR GAME</Button>
          </Row>
        </Col>
      </Row>
    );
  }
}

const styles = {
  container: {
    background: COLOR.main_color,
    display: "flex",
    height: 40,
    overflow: "hidden",
    padding: 0
  },
  btnLogo: {
    height: 40,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: SIZE.text,
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
