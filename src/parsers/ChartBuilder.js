///class used to  construct chart datasets for use with Chart.js
import DateBuilder from "./DateBuilder"

const startDateCode = 1525132800 ///May 1 2018

export default class ChartBuilder {

  //construct the dataSet object with is composed of dataLabels and dataValues
  static constructChartDataSet(symbolDataSet){
    let dataSet = { }
    let labels = [ ]
    let data = [ ]

    //input in this app will be the api data set for the specific asset
    if (symbolDataSet){
      //iterate over the data to construct the label and data arrays
      symbolDataSet.forEach((day)=>{
        //check the date is after the start date
        if (day.time>startDateCode){
          //push value and data into respective arrays
          labels.push(DateBuilder.dateFormat(day.time*1000))
          data.push(day.close)
        }
      })
      dataSet = {dataLabels:labels, dataValues:data}
      return dataSet
    }
  }

  //method for constructing the chart obj tht will be passed to
  //the Chart.js component
  static constructChartObj(symbolDataSet, label, color){
    //first construct the data object 
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
