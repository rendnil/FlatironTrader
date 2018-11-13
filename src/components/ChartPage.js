import React from "react"
import {Line} from 'react-chartjs-2';
import {Header, Grid, Container,Segment} from 'semantic-ui-react'
import {fetchHistoricalData} from "../redux/actions/historicalDataAction"
import { connect } from 'react-redux'
import ChartBuilder from "../parsers/ChartBuilder"
import MarketDataTicker from "./MarketData/MarketDataTicker"
import withAuth from "../hocs/withAuth"

const startDateCode = 1483315200 ///Jan 1 2017


class ChartPage extends React.Component{

  state = {
    rawData:[ ],
    dataLabels: [],
    dataValues: [ ]
  }

    componentDidMount(){

    }




    ///need to make sure everything is loaded
  render(){
    if (this.props.bchHistoricalData&&this.props.btcHistoricalData&&this.props.ltcHistoricalData&&this.props.ethHistoricalData&&this.props.xrpHistoricalData){
    console.log("render chart page", this.props);


    return(
      <Container>
        <MarketDataTicker />
        <Grid>
          <Grid.Row columns={2}>


            <Grid.Column>
            <Segment textAlign="center">
              {<Line data={ChartBuilder.constructChartObj(this.props.btcHistoricalData,"Bitcoin",'deepskyblue')} />}
            </Segment>
            </Grid.Column>

            <Grid.Column>
            <Segment>
              {<Line data={ChartBuilder.constructChartObj(this.props.ethHistoricalData,"Ethereum",'violet')} />}
            </Segment>
            </Grid.Column>
          </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
          <Segment>
            {<Line data={ChartBuilder.constructChartObj(this.props.bchHistoricalData,"Bitcoin Cash",'goldenrod')} />}
          </Segment>
          </Grid.Column>
          <Grid.Column>
          <Segment>
            {<Line data={ChartBuilder.constructChartObj(this.props.ltcHistoricalData,"Litecoin",'palegreen')} />}
          </Segment>
          </Grid.Column>
          <Grid.Column>
          <Segment>
            {<Line data={ChartBuilder.constructChartObj(this.props.xrpHistoricalData,"Ripple",'rgba(75,192,192,1)')} />}
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
