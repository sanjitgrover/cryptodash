import React, { Component } from "react";
import _ from 'lodash';
const cc = require("cryptocompare")
export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends Component {
  constructor() {
    super();
    this.state = {
      page: "dashboard",
      favorites: ["BTC", "ETH", "XMR", "DOGE"],
      ...this.savedSettings(),
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      confirmFavorites: this.confirmFavorites,
      setFilteredCoins: this.setFilteredCoins
    };
  }

  componentDidMount() {
    this.fetchCoins();
    this.fetchPrices();
  }
  fetchCoins = async () => {
    let coinList = await cc.coinList();
    this.setState({ coinList: coinList.Data });
  };

  fetchPrices = async()=>{
    if(this.state.firstVisit){
      return;
    }
    let prices = await this.prices();
    prices=prices.filter(price=>Object.keys(price).length);
    //console.log("prices", prices);
    this.setState({prices});
  }

  prices=async()=>{
    let returnData = [];
    for(let i=0;i<this.state.favorites.length; i++){
      try{
        let priceData = await cc.priceFull(this.state.favorites[i], 'USD');
        returnData.push(priceData);
      }catch(e){
        console.warn('Fetch Price Error', e);
      }
    }
    return returnData;
  }

  addCoin=key=>{
    let {favorites} = this.state;
    if(favorites.length < MAX_FAVORITES){
    favorites.push(key);
    this.setState({favorites});
    }
  }

  removeCoin =key=>{
    let {favorites} = this.state;
    this.setState({favorites: _.pull(favorites, key)});
  }

  isInFavorites = key=> _.includes(this.state.favorites , key)

  confirmFavorites = () => {
    this.setState({ firstVisit: false, page: "dashboard" },
    ()=>{
      this.fetchPrices();
    }
    );
    localStorage.setItem(
      "cryptodash",
      JSON.stringify({
        favorites: this.state.favorites
      })
    );
  };
  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptodash"));
    if (!cryptoDashData) {
      return { page: "settings", firstVisit: true };
    }
    let {favorites} = cryptoDashData; 
    return {favorites};
  }

  setPage = page => this.setState({ page });

  setFilteredCoins =(filteredCoins)=>this.setState({filteredCoins});

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
