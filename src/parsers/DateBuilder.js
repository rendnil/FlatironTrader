//class for constructing dates from raw formats

export default class DateBuilder {

  static dateFormat(rawDate){
    //create usable date instance
   let fullDate = new Date(rawDate)

   //return date string in month/day/year format
   return `${fullDate.getMonth()+1}/${fullDate.getDate()}/${fullDate.getFullYear()}`
 }

  //method to format date into typical time format
  // hour:minutes:seconds
   static timeFormat(rawDate){

     let fullDate = new Date(rawDate)
     let hours
     let minutes
     let seconds

     if (fullDate.getHours() < 10){
       hours = "0"+fullDate.getHours()
     }else{
       hours = fullDate.getHours()
     }
     if (fullDate.getMinutes() < 10){
       minutes= "0"+fullDate.getMinutes()
     }else{
       minutes = fullDate.getMinutes()
     }
     if (fullDate.getSeconds() < 10){
       seconds = "0"+fullDate.getSeconds()
     }else{
       seconds = fullDate.getSeconds()
     }

     return `${hours}:${minutes}:${seconds}`
   }


} //end class
