import React, { PureComponent } from "react";
import { Loading } from "../../element/";
import { STRINGS } from "../../utils/";
import moment from "moment";

export default class News extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      error: { status: false, message: false }
    };
  }

  componentDidMount() {}
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
      "https://newsapi.org/v2/everything?q=bitcoin&from=2019-11-22&sortBy=publishedAt&apiKey=96744c1ba43243ca83f8ce40b085fae1",
      { method: "GET" }
    );
    if (result.status === 200) {
      let res = await result.json();
      console.log(res);
      this.state.data = res.articles;
    } else {
      this.state.error.status = true;
      this.state.error.message = "Server Error";
    }
  };

  render() {
    const { loading, data, error } = this.state;
    if (error.status) {
      return <div style={styles.container}>{error.message}</div>;
    }
    if (loading) {
      return <Loading />;
    }
    return (
      <div>
        {data.map((item, index) => (
          <div key={index} style={styles.itemContainer}>
            <div style={{ backgroundColor: "black", height: 350, width: 420 }}>
              <img style={styles.image} src={item.urlToImage} />
            </div>
            <div style={styles.itemColumn}>
              <div>
                <div style={{ fontSize: 20 }}>
                  {STRINGS.author}: {item.author}
                </div>
                <div style={{ fontSize: 20 }}>
                  {STRINGS.date}:{" "}
                  {moment(item.publishedAt).format("DD/MM/YYYY")}
                </div>
                <div style={{ fontSize: 20 }}>
                  {STRINGS.title}: <b>{item.title}</b>
                </div>
              </div>
              <div style={{ fontSize: 20, marginTop: 50 }}>
                {item.description}
              </div>
              <a
                style={{ fontSize: 20, marginTop: 100 }}
                href={item.url}
                target="_blank"
              >
                <b>{STRINGS.read_more}</b>
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    width: "100%",
    minHeight: window.innerHeight,
    justifyContent: "center",
    alignItems: "center"
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    height: 350,
    overflow: "hidden",
    margin: "30px 150px 30px 150px"
  },
  itemColumn: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
    justifyContent: "space-around",
    borderColor: "red"
  },
  image: { height: 350, width: 420 }
};
