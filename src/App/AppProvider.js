import React, { Component } from "react";
const cc = require("cryptocompare");
export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor() {
    super();
    this.state = {
      page: "dashboard",
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    };
  }

  componentDidMount() {
    this.fetchCoins();
  }
  fetchCoins = async () => {
    let coinList = await cc.coinList();
    this.setState({ coinList: coinList.Data });
  };

  confirmFavorites = () => {
    this.setState({ firstVisit: false, page: "dashboard" });
    localStorage.setItem(
      "cryptodash",
      JSON.stringify({
        test: "hello"
      })
    );
  };
  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptodash"));
    if (!cryptoDashData) {
      return { page: "settings", firstVisit: true };
    }
    return {};
  }

  setPage = page => this.setState({ page });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
