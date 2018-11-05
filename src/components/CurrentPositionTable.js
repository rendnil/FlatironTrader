import React from "react"
import {Table} from "semantic-ui-react"
import CurrentPositionTableRow from "./CurrentPositionTableRow"


class CurrentPositionTable extends React.Component{

  render(){
    const headerStyle = {
      textAlign: "center"
    }


      return(

          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell style={headerStyle} >Symbol</Table.HeaderCell>
                <Table.HeaderCell style={headerStyle}>Position</Table.HeaderCell>
                <Table.HeaderCell style={headerStyle}>VWAP</Table.HeaderCell>
                <Table.HeaderCell style={headerStyle}>PnL</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

        <Table.Body>
        {this.props.positions.map((position,idx)=>{
          return <CurrentPositionTableRow
          key={idx} position={position}/>

        })}
        </Table.Body>
          </Table>



      )


  }
}


export default CurrentPositionTable
//
