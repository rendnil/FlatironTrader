import React from "react"
import {Table} from "semantic-ui-react"
import CurrentPositionTableRow from "./CurrentPositionTableRow"
import PortfolioVal from "../parsers/PortfolioVal"


class CurrentPositionTable extends React.Component{


  calcPortfolioPnL(){
    return PortfolioVal.calcPortfolioPnL(this.props.trades, this.props.marketData)
  }

  render(){

    //console.log("try position table", this.props);
    const headerStyle = {
      textAlign: "center"
    }


      return(

          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan={4} textAlign="right" >Total Portfolio Value: {this.calcPortfolioPnL().toLocaleString()}  </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell style={headerStyle} >Symbol</Table.HeaderCell>
                <Table.HeaderCell style={headerStyle}>Net Position</Table.HeaderCell>
                <Table.HeaderCell style={headerStyle}>Weighted Price</Table.HeaderCell>

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
