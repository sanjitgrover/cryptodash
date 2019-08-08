import React from 'react'
import styled, {css} from 'styled-components'
import {SelectableTile} from "../Shared/Tile"
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid';
import {fontSize3} from "../Shared/Styles"


const PriceTileStyled = styled(SelectableTile)`
    ${props=> props.compact && css`
        ${fontSize3}
    `}
`
function PriceTile({sym, data}){
    return(
        <PriceTileStyled>
        <CoinHeaderGridStyled>
        <div>{sym}</div>
        <div>{data.CHANGEPCT24HOUR}</div>
        </CoinHeaderGridStyled>
        </PriceTileStyled>
    );
}

export default function ({price, index}) {
    let sym=Object.keys(price)[0];
    let data=price[sym]["USD"];
    //console.log("recieved price", price);
    return (
        <PriceTile 
           sym={sym} data={data}>
        </PriceTile>
    )
}
