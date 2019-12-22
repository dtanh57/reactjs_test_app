import React, { PureComponent } from "react";
import { Loading } from "../../element";

class ChampDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
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
    let res = await result.json();
    this.state.data = res.data[name];
    console.log(res.data[name]);
  };

  setUrl = value =>
    `http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion/${value}.json`;

  onGetImage = value =>
    `http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/${value}`;

  render() {
    const { data, loading } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          marginTop: 20
        }}
      >
        {loading ? (
          <Loading />
        ) : (
          <>
            <div style={{ fontWeight: "bold", fontSize: "30px" }}>
              {data.name} - {data.title}
            </div>
            <img
              style={{ height: 300, width: 300, marginTop: 20 }}
              className="img-home"
              src={this.onGetImage(data.image.full)}
            />
          </>
        )}
      </div>
    );
  }
}

export default ChampDetail;
