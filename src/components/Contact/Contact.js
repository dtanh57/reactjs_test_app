import React, { PureComponent } from "react";
import { STRINGS, COLOR, SIZE, Validate } from "../../utils";
import { Input, Button, Select } from "antd";

export default class Contact extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      isValid: {
        name: { status: true, content: null },
        email: { status: true, content: null },
        subject: { status: true, content: null },
        message: { status: true, content: null }
      },
      dropdownValue: "Optional",
      dropdownList: [
        { id: "deptrai", value: "Đẹp trai" },
        { id: "nhieutien", value: "Nhiều tiền" },
        { id: "satgai", value: "Sát gái" },
        { id: "chiuchoi", value: "Chịu chơi" },
        { id: "tatca", value: "Tất cả" }
      ]
    };
    this.validate = {
      name: value => Validate.emptyContentOnly(value),
      email: value => Validate.email(value),
      subject: value => Validate.emptyContentOnly(value),
      message: value => Validate.emptyContentOnly(value)
    };
  }

  componentDidMount() {
    window.scrollTo(0, this.container.offsetTop);
  }

  onChangeText = field => e => {
    this.state.value[field] = e.target.value;
  };
  onBlur = field => () => {
    this.state.isValid[field] = this.validate[field](this.state.value[field]);
    this.forceUpdate();
  };
  onChangeDropdown = (value, option) => {
    this.state.dropdownValue = option.props.children;
  };
  onSubmit = () => {
    const { name, email, subject, message } = this.state.value;
    const { dropdownValue, isValid } = this.state;
    this.onBlur("name")();
    this.onBlur("email")();
    this.onBlur("subject")();
    this.onBlur("message")();
    if (
      isValid.name.status &&
      isValid.email.status &&
      isValid.subject.status &&
      isValid.message.status
    ) {
      alert(
        name +
          "\n" +
          email +
          "\n" +
          subject +
          "\n" +
          dropdownValue +
          "\n" +
          message
      );
    }
  };

  render() {
    const { isValid, dropdownValue } = this.state;
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
          <Input
            size="large"
            placeholder={STRINGS.your_name_placeholder}
            ref={ref => (this.name = ref)}
            onChange={this.onChangeText("name")}
            onBlur={this.onBlur("name")}
          />
          {!isValid.name.status && (
            <div style={styles.warning}>{isValid.name.content}</div>
          )}

          <div style={styles.label}>{STRINGS.your_email}</div>
          <Input
            size="large"
            placeholder={STRINGS.your_email_placeholder}
            ref={ref => (this.email = ref)}
            onChange={this.onChangeText("email")}
            onBlur={this.onBlur("email")}
          />
          {!isValid.email.status && (
            <div style={styles.warning}>{isValid.email.content}</div>
          )}

          <div style={styles.label}>{STRINGS.subject}</div>
          <Input
            size="large"
            placeholder={STRINGS.your_subject_placeholder}
            ref={ref => (this.subject = ref)}
            onChange={this.onChangeText("subject")}
            onBlur={this.onBlur("subject")}
          />
          {!isValid.subject.status && (
            <div style={styles.warning}>{isValid.subject.content}</div>
          )}

          <div style={styles.label}>{STRINGS.what_you_think}</div>
          <Select
            dropdownStyle={{ ...styles.label, marginTop: 0 }}
            defaultValue={dropdownValue}
            onChange={this.onChangeDropdown}
          >
            {this.state.dropdownList.map((item, index) => {
              return (
                <Select.Option key={item.id} value={item.id}>
                  {item.value}
                </Select.Option>
              );
            })}
          </Select>
          <div style={styles.label}>{STRINGS.your_message}</div>

          <Input.TextArea
            rows={4}
            ref={ref => (this.message = ref)}
            onBlur={this.onBlur("message")}
            onChange={this.onChangeText("message")}
          />
          {!isValid.message.status && (
            <div style={styles.warning}>{isValid.message.content}</div>
          )}

          <Button
            style={{
              display: "flex",
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 30,
              width: "20%",
              backgroundColor: COLOR.main_color,
              color: COLOR.white,
              height: 60,
              alignItems: "center"
            }}
            onClick={this.onSubmit}
          >
            {STRINGS.submit}
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
  },
  warning: {
    fontWeight: "bold",
    fontSize: SIZE.text,
    color: "red"
  }
};
