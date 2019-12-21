import React, { Component } from "react";
import { Col, Row } from "antd";
import SlideShow from "../../element/slideshow/SlideShow";
import { HeaderService } from "../HeaderContainer/services/HeaderService";

export default class Home extends Component {
  imageSlide = [
    { src: require("../../utils/images/3.jpg"), caption: "Gao Ranger" },
    {
      src: require("../../utils/images/logo.png"),
      caption: "League of Legend"
    },
    { src: require("../../utils/images/1.jpg"), caption: "Cậu Vàng" },
    { src: require("../../utils/images/2.jpg"), caption: "Lão Hạc" }
  ];

  info = [
    { title: "Name", value: "Đỗ Tuấn Anh" },
    { title: "Email", value: "dtanh57@gmail.com" },
    { title: "Phone", value: "084.857.1994" },
    { title: "Role", value: "Developer" },
    { title: "Programming Language", value: "Java, Javascript, ..." },
    {
      title: "Technique",
      value: "React Native, Reactjs, Android Java, Html, Css, ..."
    },
    {
      title: "Intent",
      value: "Become a pro dev, travel to Franch, ..."
    },
    { title: "Language", value: "French, English" },
    { title: "Hobby", value: "Gaming, football, sleeping, reading, ..." }
  ];

  quotes = [
    {
      id: 1,
      content: "Một ngày 24 tiếng không bằng 1 tiếng em cười"
    },
    {
      id: 2,
      content: "Không phải Chí Phèo nhưng anh muốn thấy nụ cười em Nở"
    },
    {
      id: 3,
      content:
        "Tôi thường dạy nhảy trong vũ trường. Người ta gọi tôi là thầy giáo bar"
    },
    { id: 4, content: "Con dâu chăm SÓC cho bố chồng" },
    { id: 5, content: "Tớ giống với mợ tớ, lúc nào cũng nhớ cậu" },
    {
      id: 6,
      content: "Tụi mày cố làm đàn anh mãi nên vẫn không trở được thành đàn ông"
    },
    { id: 7, content: "Đã là tiền thì chắc chắn bạc" },
    { id: 8, content: "Mong là chết có 'vàng' mã chứ kiếp này mình 'bạc' quá" },
    { id: 9, content: "Có nhiều thằng xếp hàng để cua em, anh đầu hàng." },
    {
      id: 10,
      content:
        "Nghe tin Huyền té xe,đến bệnh viện gã tặng bông. Gã bần thần nhìn nhan sắc Huyền hỏi ngã nặng không?"
    },
    {
      id: 11,
      content: "Lúc trẻ: em muốn sống bên anh. Về già : tôi muốn sánh bên ông"
    },
    {
      id: 12,
      content: "Đái ra trường ngày đầu năm học. Một ngày khai trường"
    },
    {
      id: 13,
      content: "Người mẹ yêu âm nhạc: Thấy vui khi con try hard"
    }
  ];

  componentDidMount() {
    HeaderService.onChange(`Home-HeaderService`, this.onScrollTo);
    if (
      this.props.location.state &&
      this.props.location.state.data.scrollToAbout
    ) {
      window.scrollTo(0, this.about.offsetTop);
    }
  }

  onScrollTo = data => {
    if (data.scrollToAbout) {
      window.scrollTo(0, this.about.offsetTop);
    }
  };

  render() {
    return (
      <Col style={styles.container}>
        <SlideShow
          input={this.imageSlide}
          ratio={`11:4`}
          mode={`automatic`}
          timeout={`4000`}
        />
        <div
          ref={ref => (this.about = ref)}
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            paddingBottom: 30,
            paddingTop: 30,
            backgroundImage: `url(${require("../../utils/images/background.jpg")})`
          }}
        >
          <Col span={12} style={styles.wrapCol}>
            <img
              style={styles.avatar}
              src={require("../../utils/images/avatar.jpg")}
            />
          </Col>
          <Col span={12} style={{ ...styles.wrapCol, paddingLeft: 20 }}>
            {this.info.map(item => (
              <div
                style={{
                  marginBottom: 12,
                  alignSelf: "flex-start",
                  fontWeight: "500"
                }}
                key={item.title}
              >
                <b>{item.title}:</b> {item.value}
              </div>
            ))}
          </Col>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 30,
            width: "100%",
            backgroundImage: `url(${require("../../utils/images/background_dark.jpg")})`
          }}
        >
          {this.quotes.map(item => (
            <div
              style={{
                paddingBottom: 30,
                alignSelf: "center",
                fontWeight: "500",
                fontSize: 20,
                color: "white"
              }}
              key={item.id}
            >
              "{item.content}"
            </div>
          ))}
        </div>
      </Col>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: 1000
  },
  avatar: {
    width: "80%"
  },
  wrapCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center"
  }
};
