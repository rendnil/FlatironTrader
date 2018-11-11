///class used to value construct chart datasets
const startDateCode = 1509543293 ///Nov 1 2017

export default class ChartBuilder {

  static constructChartDataSet(symbolDataSet){
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

  static dateFormat(rawDate){
    let fullDate = new Date(rawDate*1000)

    return `${fullDate.getMonth()+1}/${fullDate.getDate()}/${fullDate.getFullYear()}`
  }

  static constructChartObj(symbolDataSet, label, color){
    //debugger
    let dataSet = this.constructChartDataSet(symbolDataSet)

    return {
      labels: dataSet.dataLabels,
      datasets:[
        {
          label: label,
          borderColor: color,
          fill: false,
          pointBorderColor: color,
          backgroundColor: color,
          data:dataSet.dataValues,
          pointRadius: 1
        }
      ]
    }
  }







}//end class


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
