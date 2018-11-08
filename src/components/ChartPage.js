import React from "react"
import {Line} from 'react-chartjs-2';
import {Grid} from 'semantic-ui-react'
import {fetchHistoricalData} from "../redux/actions/historicalDataAction"
import { connect } from 'react-redux'


const API_ENDPOINT = "https://api.coindesk.com/v1/bpi/historical/close.json?start=2016-01-01&end=2018-11-05"

class ChartPage extends React.Component{

  state = {
    rawData:[ ],
    dataLabels: [],
    dataValues: [ ]
  }

    componentDidMount(){
      this.props.fetchHistoricalData("BTC")
    }


  // componentDidMount(){
  //   fetch(API_ENDPOINT)
  //   .then(r=>r.json())
  //   .then(data => {
  //     this.constructDataSet(data)})
  // }
  //
  // constructDataSet(rawData){
  //   let dataSet = { }
  //   let labels = [ ]
  //   let data = [ ]
  //
  //   for( let key in rawData.bpi){
  //     labels.push(key)
  //     data.push(rawData.bpi[key])
  //   }
  //     this.setState({
  //       dataLabels:labels,
  //       dataValues: data
  //     })
  // }



  render(){
    console.log("render chart page", this.props);

    // const chartData = {
    //   labels: this.state.dataLabels,
    //   datasets:[
    //     {
    //       label: "Bitcoin Price",
    //       borderColor: 'rgba(75,192,192,1)',
    //       fill: false,
    //       pointBorderColor: 'rgba(75,192,192,1)',
    //       backgroundColor: 'rgba(75,192,192,1)',
    //       data:this.state.dataValues
    //     }
    //   ]
    // }
    // console.log(chartData);


    return(
      <React.Fragment>
      <Grid>
  <Grid.Row columns={2}>
    <Grid.Column>

    {/*<Line data={chartData} />*/}
    </Grid.Column>
    <Grid.Column>


    </Grid.Column>
    </Grid.Row>
    </Grid>
      </React.Fragment>
    )
  }


}

const mapStateToProps = (state) => {
  return {historicalData: state.historicalData}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHistoricalData: (symbol) => dispatch(fetchHistoricalData(symbol)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChartPage)


// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };
//
// export default React.createClass({
//   displayName: 'LineExample',
//
//   render() {
//     return (
//       <div>
//         <h2>Line Example</h2>
//         <Line data={data} />
//       </div>
//     );
//   }
// });
