//current position table format

import React from "react"
import {Table, Header, Label} from "semantic-ui-react"
import CurrentPositionTableRow from "./CurrentPositionTableRow"
import PortfolioVal from "../../parsers/PortfolioVal"


const CurrentPositionTable = (props) =>{

  //calculate the pnl for the entire portfolio of user trades
  const calcPortfolioPnL = () => {
    return PortfolioVal.calcPortfolioPnL(props.trades, props.marketData)
  }


      return(
          <React.Fragment>

            <Header floated="left"as="h2"  >Outright Position</Header>

            {/* display the pnl for the portfolio */}
            <Header floated="right" as = "h2" textAlign="right" >
            PnL:
              <Label size="big" color='blue' >
              {(calcPortfolioPnL()).toLocaleString("en", {maximumFractionDigits: 2})} USD
              </Label>
            </Header>

            {/*table to house position rows */}
            <Table textAlign="center" celled compact="very" >
              <Table.Header >

                <Table.Row >
                  <Table.HeaderCell>Symbol</Table.HeaderCell>
                  <Table.HeaderCell>Net Position</Table.HeaderCell>

                </Table.Row>
              </Table.Header>

              <Table.Body>
                {props.positions.map((position)=>{
                  return <CurrentPositionTableRow
                  key={position.symbol} position={position}/>
                })}
              </Table.Body>
            </Table>
        </React.Fragment>
      )
    }


export default CurrentPositionTable
