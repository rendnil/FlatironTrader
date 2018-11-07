import React from "react"
import {Line} from 'react-chartjs-2';

const API_ENDPOINT = "https://api.coindesk.com/v1/bpi/historical/close.json?start=2011-01-01&end=2018-11-05"

class ChartPage extends React.Component{

  state = {
    rawData:[ ]
  }


  // componentDidMount(){
  //   fetch(API_ENDPOINT)
  //   .then(r=>r.json())
  //   .then(data => {
  //     this.setState({rawData:data})})
  // }

  // constructDataSet(rawData){
  //   let dataSet = { }
  //   let labels = [ ]
  //   let data = [ ]
  //
  //   for( let key in rawData.bpi){
  //     labels.push(key)
  //     data.push(rawData.bpi[key])
  //   }
  //   dataSet.labels = labels
  //   dataSet.data = data
  //   return dataSet
  // }

  render(){
    console.log("render");
    return(
      <React.Fragment>
      <Line data={{
        labels: [1,2,3,4,5],
        datasets:[
          {data:[100,200,300,400,500]}
        ]
      }} />
      </React.Fragment>
    )
  }


}

export default ChartPage

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
