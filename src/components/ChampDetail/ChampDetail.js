import React, { PureComponent } from "react";
import { Loading } from "../../element";

class ChampDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      error: { status: false, message: "" },
      loading: true
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
    const { name } = this.props.location.state;
    let result = await fetch(this.setUrl(name));
    if (result.status === 200) {
      let res = await result.json();
      this.state.data = res.data[name];
    } else {
      this.state.error.status = true;
      this.state.error.message = "Champion not found!";
    }
  };

  setUrl = value =>
    `http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion/${value}.json`;

  onGetImage = value =>
    `http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/${value}`;

  render() {
    const { data, loading, error } = this.state;
    const convertStats = data.stats
      ? Object.keys(data.stats).map(function(key) {
          return [key, data.stats[key]];
        })
      : [];
    if (error.status) {
      return (
        <div style={{ ...styles.container, fontWeight: "bold", fontSize: 40 }}>
          {error.message}
        </div>
      );
    }
    return (
      <div style={styles.container}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div style={{ fontWeight: "bold", fontSize: "30px" }}>
              {data.name} - {data.title}
            </div>
            <img
              style={{ height: 300, width: 300, margin: "20px 0 20px 0" }}
              className="img-home"
              src={this.onGetImage(data.image.full)}
            />
            <div style={styles.text}>
              <b>Quote:</b> {data.lore}
            </div>
            <div
              style={{
                ...styles.text,
                fontWeight: "bold",
                margin: 0,
                color: "red"
              }}
            >
              SPELLS
            </div>
            {data.spells.map((item, index) => (
              <div key={item.id} style={{ ...styles.text, margin: 0 }}>
                <b>{item.name}: </b>
                {item.description}
              </div>
            ))}
            {convertStats.map((item, index) => {
              return (
                <div style={{ ...styles.text, margin: 0 }} key={item[0]}>
                  <b>{item[0]}: </b>
                  {item[1]}
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "70%",
    alignSelf: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 0 20px 0"
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    width: "60%"
  }
};

export default ChampDetail;
