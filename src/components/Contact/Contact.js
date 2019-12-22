import React, { PureComponent } from "react";
import { STRINGS, COLOR, SIZE } from "../../utils";
import { Input, Button, Select } from "antd";

export default class Contact extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: "",
        email: "",
        subject: ""
      },
      validate: {
        name: true,
        email: true,
        subject: true
      }
    };
  }

  componentDidMount() {
    window.scrollTo(0, this.container.offsetTop);
  }

  render() {
    return (
      <div
        ref={ref => (this.container = ref)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: COLOR.white,
          paddingTop: 30,
          paddingBottom: 30,
          backgroundImage: `url(${require("../../utils/images/background_dark.jpg")})`
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: 40, textAlign: "center" }}>
          {STRINGS.contact_us.toUpperCase()}
          <p>{STRINGS.intro_contact}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: COLOR.white,
            color: COLOR.black,
            padding: 30,
            borderRadius: 10,
            width: "50%",
            marginTop: SIZE.app_padding
          }}
        >
          <div style={styles.label}>{STRINGS.your_name}</div>
          <Input size="large" placeholder={STRINGS.your_name_placeholder} />
          <div style={styles.label}>{STRINGS.your_email}</div>
          <Input size="large" placeholder={STRINGS.your_email_placeholder} />
          <div style={styles.label}>{STRINGS.subject}</div>
          <Input size="large" placeholder={STRINGS.your_subject_placeholder} />
          <div style={styles.label}>{STRINGS.what_you_think}</div>
          <Select
            style={{ ...styles.label, fontSize: null, marginTop: 0 }}
            defaultValue="Option1"
          >
            <Select.Option value="Option1">Option1</Select.Option>
            <Select.Option value="Option2">Option2</Select.Option>
          </Select>
          <div style={styles.label}>{STRINGS.your_message}</div>
          <Input.TextArea rows={4} />
          <Button
            style={{
              display: "flex",
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 30,
              width: "20%",
              backgroundColor: COLOR.main_color,
              color: COLOR.white
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

const styles = {
  label: {
    fontWeight: "bold",
    fontSize: SIZE.text,
    marginTop: SIZE.app_padding
  }
};
