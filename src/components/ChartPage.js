import React from "react"
import {Line} from 'react-chartjs-2';
import {Grid, Container} from 'semantic-ui-react'
import {fetchHistoricalData} from "../redux/actions/historicalDataAction"
import { connect } from 'react-redux'
import ChartBuilder from "../parsers/ChartBuilder"

const startDateCode = 1483315200 ///Jan 1 2017


class ChartPage extends React.Component{

  state = {
    rawData:[ ],
    dataLabels: [],
    dataValues: [ ]
  }

    componentDidMount(){
      this.props.fetchHistoricalData("BTC")
      // this.props.fetchHistoricalData("ETH")
      // this.props.fetchHistoricalData("LTC")
      // ///need to delay these last two to avoid overloading
      // setTimeout(()=>this.props.fetchHistoricalData("XRP"),500)
      // setTimeout(()=>this.props.fetchHistoricalData("BCH"),1000)


    }


  constructChartDataSet(symbolDataSet){
      let dataSet = { }
       let labels = [ ]
       let data = [ ]
if (symbolDataSet){
      symbolDataSet.forEach((day)=>{

        if (day.time>startDateCode){ //check the date

        labels.push(this.dateFormat(day.time))
        data.push(day.close)
      }})

      dataSet = {dataLabels:labels,
      dataValues:data}
      return dataSet

    }


  }

  dateFormat(rawDate){
    let fullDate = new Date(rawDate*1000)

    return `${fullDate.getMonth()+1}/${fullDate.getDate()}/${fullDate.getFullYear()}`
  }

  constructChartObj(dataSet, label, color){
    return {
      labels: dataSet.dataLabels,
      datasets:[
        {
          label: label,
          borderColor: color,
          fill: false,
          pointBorderColor: color,
          backgroundColor: color,
          data:dataSet.dataValues
        }
      ]
    }
  }


  render(){
    if (this.props.bchHistoricalData){
    console.log("render chart page", this.props);
    //console.log(this.constructChartData(this.props.btcHistoricalData));

    //  const chartData = {
    //   labels: this.constructChartData(this.props.btcHistoricalData).dataLabels,
    //   datasets:[
    //     {
    //       label: "Bitcoin Price",
    //       borderColor: 'rgba(75,192,192,1)',
    //       fill: false,
    //       pointBorderColor: 'rgba(75,192,192,1)',
    //       backgroundColor: 'rgba(75,192,192,1)',
    //       data:this.constructChartData(this.props.btcHistoricalData).dataValues
    //     }
    //   ]
    // }
    //console.log(chartData);


    return(
      <Container>
        <h1>Market Data</h1>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              {<Line data={ChartBuilder.constructChartObj(this.props.btcHistoricalData,"Bitcoin",'rgba(75,192,192,1)')} />}
            </Grid.Column>
            <Grid.Column>
              // {<Line data={ChartBuilder.constructChartObj(this.props.ethHistoricalData,"Ethereum",'rgba(75,192,192,1)')} />}
            </Grid.Column>
          </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            // {<Line data={ChartBuilder.constructChartObj(this.props.bchHistoricalData,"Bitcoin Cash",'rgba(75,192,192,1)')} />}
          </Grid.Column>
          <Grid.Column>
            // {<Line data={ChartBuilder.constructChartObj(this.props.ltcHistoricalData,"Litecoin",'rgba(75,192,192,1)')} />}
          </Grid.Column>
          <Grid.Column>
            // {<Line data={ChartBuilder.constructChartObj(this.props.xrpHistoricalData,"Ripple",'rgba(75,192,192,1)')} />}
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
export default connect(mapStateToProps, mapDispatchToProps)(ChartPage)
