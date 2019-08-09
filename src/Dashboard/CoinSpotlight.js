import React from 'react'
import { AppContext } from '../App/AppProvider';
import { Tile } from '../Shared/Tile';
import CoinImage from "../Shared/CoinImage";
import styled from "styled-components";

const SpotlightName=styled.h2`
    text-align: center;

`
export default function() {
    return (
        <AppContext.Consumer>
            {({currentFavorite, coinList})=>
        <Tile> 
        <SpotlightName>{currentFavorite}</SpotlightName>
        <CoinImage spotlight coin={coinList[currentFavorite]}/>
        </Tile>}
        </AppContext.Consumer>
    )
}
