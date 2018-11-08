///class used to value construct chart datasets
const startDateCode = 1483315200 ///Jan 1 2017

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
          data:dataSet.dataValues
        }
      ]
    }
  }







}//end class
