import React from "react"
import {Container, Table} from "semantic-ui-react"

import {selectAssetAction} from "../../redux/actions/selectAssetAction"

const CurrentPositionTableRow = (props) =>{

    const textStyle = {
      textAlign: "center",
    }

      return(
        <Table.Row>
          <Table.Cell style={textStyle}>{props.position.symbol}</Table.Cell>
          <Table.Cell style={textStyle}>{props.position.net_position}</Table.Cell>
        </Table.Row>
      )

  }

  export default CurrentPositionTableRow
