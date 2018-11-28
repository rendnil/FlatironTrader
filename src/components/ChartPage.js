//component for the charting page

import React from "react"
import {Line} from 'react-chartjs-2';
import {Grid, Container,Segment} from 'semantic-ui-react'
import {fetchHistoricalData} from "../redux/actions/historicalDataAction"
import { connect } from 'react-redux'
import ChartBuilder from "../parsers/ChartBuilder"
import MarketDataTicker from "./MarketData/MarketDataTicker"
import withAuth from "../hocs/withAuth"

const ChartPage = (props) =>{

    ///need to make sure everything is loaded

    if (props.bchHistoricalData&&props.btcHistoricalData&&props.ltcHistoricalData&&props.ethHistoricalData&&props.xrpHistoricalData){

    //generate the different charts
    return(
      <Container>
        <MarketDataTicker />

        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment textAlign="center">
                {<Line data={ChartBuilder.constructChartObj(props.btcHistoricalData,"Bitcoin",'deepskyblue')} />}
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
                {<Line data={ChartBuilder.constructChartObj(props.ethHistoricalData,"Ethereum",'violet')} />}
              </Segment>
            </Grid.Column>
          </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <Segment>
              {<Line data={ChartBuilder.constructChartObj(props.bchHistoricalData,"Bitcoin Cash",'goldenrod')} />}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              {<Line data={ChartBuilder.constructChartObj(props.ltcHistoricalData,"Litecoin",'palegreen')} />}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              {<Line data={ChartBuilder.constructChartObj(props.xrpHistoricalData,"Ripple",'rgba(75,192,192,1)')} />}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    )
  }
  else{
    return null
  }

}

const mapStateToProps = (state) => {
  return {
    btcHistoricalData: state.historicalData["BTC"],
    ethHistoricalData: state.historicalData["ETH"],
    xrpHistoricalData: state.historicalData["XRP"],
    ltcHistoricalData: state.historicalData["LTC"],
    bchHistoricalData: state.historicalData["BCH"]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHistoricalData: (symbol) => dispatch(fetchHistoricalData(symbol)),
  }
}
export default withAuth(connect(mapStateToProps, mapDispatchToProps)(ChartPage))
