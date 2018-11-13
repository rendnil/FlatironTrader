import React from "react"
import {Container, Table} from "semantic-ui-react"

import {selectAssetAction} from "../../redux/actions/selectAssetAction"

class CurrentPositionTableRow extends React.Component{


  render(){
    const textStyle = {
      textAlign: "center",
    }


      return(
        <Table.Row>
          <Table.Cell style={textStyle}>{this.props.position.symbol}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.position.net_position}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.position.weighted_price.toLocaleString("en", {maximumFractionDigits: 2})}</Table.Cell>
        </Table.Row>
      )
    }
  }

  export default CurrentPositionTableRow
