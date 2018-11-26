//each position row in the table

import React from "react"
import {Table} from "semantic-ui-react"

const CurrentPositionTableRow = ({position}) =>{

      return(
        <Table.Row>
          <Table.Cell>{position.symbol}</Table.Cell>
          <Table.Cell>{position.net_position}</Table.Cell>
        </Table.Row>
      )

  }

  export default CurrentPositionTableRow
