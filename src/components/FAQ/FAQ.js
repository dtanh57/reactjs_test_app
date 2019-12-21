import React, { PureComponent } from "react";
import { STRINGS, COLOR, SIZE } from "../../utils";

export default class FAQ extends PureComponent {
  asked_question = [
    {
      question: "Why are you so handsome?",
      answer: "I always ask my self that."
    },
    {
      question: "Where can I find you?",
      answer: "You can find me in my house."
    },
    {
      question: "Why so serious?",
      answer: "Let put a smile on your face."
    },
    {
      question: "Why do you ride in a private jet?",
      answer: "I don't know how to drive a car."
    },
    {
      question:
        "还为系统的有经验的用户提供了一个高级编辑器，以进一步自定义问题。 强烈建议您在开始使用高级编辑器之前，先通过 与我们联系，因为它实际上对用户的友好程度较低。 未经高级培训在高级编辑器中创建的问题可能无法按预期工作。选择其他问题布局 展开布局，然后单击任何不同的样式以更改问题文本，答案框和媒体的显示位置。 选择其他样式后，单击“预览”，查看问题在每个布局中的外观。?",
      answer: "What the fuck did you just fucking say??"
    }
  ];

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
        <div style={{ fontWeight: "bold", fontSize: 40 }}>
          {STRINGS.frequently_asked_question}
        </div>
        <div
          style={{
            backgroundColor: COLOR.white,
            color: COLOR.black,
            padding: 30,
            borderRadius: 10,
            width: "50%",
            marginTop: SIZE.app_padding
          }}
        >
          {this.asked_question.map((item, index) => {
            return (
              <>
                <div style={{ fontWeight: "bold", fontSize: SIZE.text }}>
                  {item.question}
                </div>
                <div
                  style={{
                    fontSize: SIZE.text,
                    marginBottom: SIZE.app_padding,
                    fontWeight: "300"
                  }}
                >
                  {item.answer}
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}
