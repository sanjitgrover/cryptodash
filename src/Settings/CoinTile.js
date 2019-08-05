import React from "react";
import { AppContext } from "../App/AppProvider";
import { SelectableTile, DeletableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

export default function({ coinKey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];
        let TileClass = SelectableTile;
        if (topSection === true) {
          TileClass = DeletableTile;
        }
        return (
          <TileClass>
            <CoinHeaderGrid
              name={coin.CoinName}
              symbol={coin.Symbol}
              topSection={true}
            />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
