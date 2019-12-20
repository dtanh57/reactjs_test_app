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
    this.menuDropdown = [
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
    let newSelected = this.menuDropdown.find(
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
        {this.menuDropdown.map(item => {
          return <Menu.Item key={item.key}>{item.value}</Menu.Item>;
        })}
      </Menu>
    );
  };

  render() {
    const { selected } = this.state;
    return (
      <Row style={styles.container}>
        <Col span={8}>
          <Button style={styles.btnLogo} onClick={this.navTo("home")}>
            HOME
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
          <Row type="flex" align="end">
            <Button style={styles.btnJobFAQ} onClick={this.navTo("champion")}>
              Champions
            </Button>
            <Button style={styles.btnJobFAQ} onClick={this.navTo("news")}>
              News
            </Button>
            <Button style={styles.btnJobFAQ} onClick={this.navTo("submitGame")}>
              Register
            </Button>
            <Select style={styles.dropdown} defaultValue="lucy">
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
            </Select>
          </Row>
        </Col>
      </Row>
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
  menuLeft: {},
  dropdown: {
    width: 100,
    fontSize: SIZE.small_text,
    borderWidth: 0,
    alignSelf: "center",
    backgroundColor: COLOR.black
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
