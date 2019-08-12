import React from 'react'
import highchartConfigs from "./HighchartsConfig"
import {Tile} from "../Shared/Tile"
import {AppContext} from "../App/AppProvider"
import ReactHighcharts from "react-highcharts"

export default function PriceChart() {
    return (
        <AppContext.Consumer>
            {({})=>
            <Tile>
                <ReactHighcharts config={highchartConfigs()}/>
            </Tile>
            }
        </AppContext.Consumer>
    )
}
