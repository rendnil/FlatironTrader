import React from "react"
import {Table, Header, Label} from "semantic-ui-react"
import CurrentPositionTableRow from "./CurrentPositionTableRow"
import PortfolioVal from "../../parsers/PortfolioVal"


const CurrentPositionTable = (props) =>{

  const calcPortfolioPnL = () => {
    return PortfolioVal.calcPortfolioPnL(props.trades, props.marketData)
  }



    //console.log("try position table", props);
    const headerStyle = {
      textAlign: "center"
    }


      return(
          <React.Fragment>
            <Header floated="left"as="h2"  >Outright Position</Header>
            <Header floated="right" as = "h2" textAlign="right" >

            PnL:
            <Label size="big" color='blue' >
            {(calcPortfolioPnL()).toLocaleString("en", {maximumFractionDigits: 2})} USD
            </Label>


            </Header>

            <Table celled compact="very" >
              <Table.Header >

                <Table.Row >
                  <Table.HeaderCell style={headerStyle}>Symbol</Table.HeaderCell>
                  <Table.HeaderCell style={headerStyle}>Net Position</Table.HeaderCell>


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
