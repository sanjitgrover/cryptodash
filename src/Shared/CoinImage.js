import React from "react";

export default function({ coin, style }) {
    console.log("image", coin.ImageUrl)
  return (
    <img
      alt={coin.CoinSymbol}
      style={style || { height: "50px" }}
      src={`http://cryptocompare.com${coin.ImageUrl}`}
    />
  );
}
