import React, { PureComponent } from "react";
import { Input, Button } from "antd";
import { Loading } from "../../element";
import { STRINGS } from "../../utils";
import "./Champion.css";

export default class Champion extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {},
      error: { status: false, message: "" },
      text: "Hello Solider"
    };
  }

  componentDidMount() {
    this.onDidMount();
  }

  onDidMount = async () => {
    const { loading } = this.state;
    if (!loading) {
      this.setState({ loading: true });
    }
    await this.fetchData();
    this.setState({ loading: false });
  };

  fetchData = async () => {
    let result = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json"
    );
    let res = await result.json();
    this.state.data = res;
  };

  onGetImage = value =>
    `http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/${value}`;

  onSubmit = () => {
    this.props.history.push("/champDetail", {
      name: this.input.value
    });
  };
  onKeyPress = e => {
    if (e.key === "Enter") {
      this.onSubmit();
    }
  };
  goToChampDetail = item => () => {
    this.props.history.push("/champDetail", {
      name: item.id
    });
  };

  render() {
    const { data, loading } = this.state.data;
    let arr = [];
    if (!!data) {
      arr = Object.values(data);
    }
    return (
      <div style={styles.container}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Input
              style={{
                margin: "10px 0px 10px 0px",
                border: "1px red solid",
                padding: "6px"
              }}
              disableUnderline={true}
              onKeyPress={this.onKeyPress}
              inputRef={ref => (this.input = ref)}
              placeholder={"Enter champion"}
            />

            <Button
              variant="contained"
              color="secondary"
              onClick={this.onSubmit}
            >
              {STRINGS.submit}
            </Button>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: 12
              }}
            >
              {arr.map(item => (
                <div
                  className="container"
                  key={item.key}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    marginLeft: "6px",
                    position: "relative"
                  }}
                >
                  <img
                    className="img-home"
                    src={this.onGetImage(item.image.full)}
                  />
                  <Button style={styles.name}>
                    {/* <p onClick={this.goToChampDetail(item)}>{item.name}</p> */}
                    <p>{item.name}</p>
                  </Button>
                  <p className="title" style={styles.title}>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

const styles = {
  name: {
    textAlign: "center",
    width: "96px",
    height: "48px",
    padding: "0px",
    marginBottom: 20
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: 1000,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center"
  }
};
