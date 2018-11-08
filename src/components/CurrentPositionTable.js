import React from "react"
import {Table} from "semantic-ui-react"
import CurrentPositionTableRow from "./CurrentPositionTableRow"


class CurrentPositionTable extends React.Component{

  calcAssetPnL(){

    let positionsWithPnL = []
    this.props.positions.forEach((position)=>{
      this.props.marketData.forEach((asset)=>{
        if (asset.symbol===position.symbol){
          let pnl = (asset.livePrice - position.weighted_price)*position.net_position
          positionsWithPnL.push({...position, pnl:pnl} )
        }
      })
    })
    return positionsWithPnL

  }

  calcPortfolioPnL(){
    if (this.calcAssetPnL()){
    return this.calcAssetPnL().reduce((acc,cv)=>{
      return (acc + cv.pnl)
    },0)
  }
}



  render(){

    //console.log(this.calcAssetPnL());
    const headerStyle = {
      textAlign: "center"
    }


      return(

          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan={4} textAlign="right" > Total PnL:{this.calcPortfolioPnL().toLocaleString()}  </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell style={headerStyle} >Symbol</Table.HeaderCell>
                <Table.HeaderCell style={headerStyle}>Position</Table.HeaderCell>
                <Table.HeaderCell style={headerStyle}>Weighted Price</Table.HeaderCell>
                <Table.HeaderCell style={headerStyle}>PnL</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

        <Table.Body>

        {this.calcAssetPnL().map((position)=>{
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
