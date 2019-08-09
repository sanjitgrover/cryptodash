import React from "react";
import styled, { css } from "styled-components";
import { SelectableTile } from "../Shared/Tile";
import { CoinHeaderGridStyled } from "../Settings/CoinHeaderGrid";
import { fontSize3, fontSizeBig, greenBoxShadow } from "../Shared/Styles";
import { AppContext } from "../App/AppProvider";

const JustifyRight = styled.div`
  justify-self: right;
`;

const JustifyLeft = styled.div`
  justify-self: left;
`;

const TickerPrice = styled.div`
  ${fontSizeBig}
`;

const ChangePct = styled.div`
  color: green;
  ${props =>
    props.red &&
    css`
      color: red;
    `}
`;

const PriceTileStyled = styled(SelectableTile)`
  ${props =>
    props.compact &&
    css`
      display: grid;
      ${fontSize3}
      grid-gap: 5px;
      grid-template-columns: repeat(3, 1fr);
      justify-items: right;
    `}
  ${props =>
    props.currentFavorite &&
    css`
      ${greenBoxShadow}
      pointer-events: none;
    `}
`;

function ChangePercent({ data }) {
  return (
    <JustifyRight>
      <ChangePct red={data.CHANGEPCT24HOUR < 0}>
        {Number(data.CHANGEPCT24HOUR).toFixed(4)}
      </ChangePct>
    </JustifyRight>
  );
}

function PriceTileCompact({ sym, data, currentFavorite, setCurrentFavorite }) {
  return (
    <PriceTileStyled onClick={setCurrentFavorite} compact currentFavorite={currentFavorite}>
      <JustifyLeft>{sym}</JustifyLeft>
      <ChangePercent data={data} />

      <div>${Number(data.PRICE).toFixed(4)}</div>
    </PriceTileStyled>
  );
}

function PriceTile({ sym, data, currentFavorite, setCurrentFavorite }) {
  return (
    <PriceTileStyled  onClick={setCurrentFavorite}  currentFavorite={currentFavorite}>
      <CoinHeaderGridStyled>
        <div>{sym}</div>
        <ChangePercent data={data} />
      </CoinHeaderGridStyled>
      <TickerPrice>${Number(data.PRICE).toFixed(4)}</TickerPrice>
    </PriceTileStyled>
  );
}

export default function({ price, index }) {
  let sym = Object.keys(price)[0];
  let data = price[sym]["USD"];
  let TileClass = index < 5 ? PriceTile : PriceTileCompact;
  return (
    <AppContext.Consumer>
      {({ currentFavorite, setCurrentFavorite }) => {
        return (
          <TileClass
            sym={sym}
            data={data}
            currentFavorite={currentFavorite === sym}
            setCurrentFavorite={()=>setCurrentFavorite(sym)}
          />
        );
      }}
    </AppContext.Consumer>
  );
}
