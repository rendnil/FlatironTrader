import React from "react"
import {Container, Table} from "semantic-ui-react"
import { connect } from 'react-redux'
import {selectAssetAction} from "../redux/actions/selectAssetAction"

class CurrentPositionTableRow extends React.Component{

  componentDidUpdate(previousProps){

  }




  render(){


    const textStyle = {
      textAlign: "center",

    }



    console.log("new props", this.props)
      return(

        <Table.Row>
          <Table.Cell style={textStyle}>{this.props.position.symbol}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.position.net_position}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.position.weighted_price.toLocaleString()}</Table.Cell>
        {/* <Table.Cell style={textStyle}>{this.props.position.pnl.toLocaleString()}</Table.Cell>*/}  

          </Table.Row>

        )
    }
  }

  export default CurrentPositionTableRow
