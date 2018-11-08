import React from "react"
import {Table} from "semantic-ui-react"
import CurrentPositionTableRow from "./CurrentPositionTableRow"
import PortfolioVal from "../valuation/PortfolioVal"


class CurrentPositionTable extends React.Component{

  ////
  ///these calculations are ONLY FOR ASSETS THAT HAVE A NET POSITION
  /////
//   calcAssetPnL(){
//     let positionsWithPnL = []
//     this.props.positions.forEach((position)=>{
//       this.props.marketData.forEach((asset)=>{
//         if (asset.symbol===position.symbol){
//           let pnl = (asset.livePrice - position.weighted_price)*position.net_position
//           positionsWithPnL.push({...position, pnl:pnl} )
//         }
//       })
//     })
//     return positionsWithPnL
//
//   }
//
//   calcPortfolioPnL(){
//     if (this.calcAssetPnL()){
//     return this.calcAssetPnL().reduce((acc,cv)=>{
//       return (acc + cv.pnl)
//     },0)
//   }
// }

//////////////////////////////////////////////////////////

calcPortfolioPnL(){
  return PortfolioVal.calcPortfolioPnL(this.props.trades, this.props.marketData)
}

  render(){

    console.log("try position table", this.props);
    const headerStyle = {
      textAlign: "center"
    }


      return(

          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan={4} textAlign="right" >Total PnL: {this.calcPortfolioPnL().toLocaleString()}  </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell style={headerStyle} >Symbol</Table.HeaderCell>
                <Table.HeaderCell style={headerStyle}>Position</Table.HeaderCell>
                <Table.HeaderCell style={headerStyle}>Weighted Price</Table.HeaderCell>
              {/*  <Table.HeaderCell style={headerStyle}>PnL</Table.HeaderCell> */}
              </Table.Row>
            </Table.Header>

        <Table.Body>

        {this.props.positions.map((position)=>{
          return <CurrentPositionTableRow
          key={position.symbol} position={position}/>

        })}
        </Table.Body>
          </Table>



      )


  }
}


export default CurrentPositionTable
//
