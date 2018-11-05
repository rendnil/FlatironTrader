import React from "react"
import {Container, Table} from "semantic-ui-react"
import { connect } from 'react-redux'
import {selectAssetAction} from "../redux/actions/selectAssetAction"

class CurrentPositionTableRow extends React.Component{

  componentDidUpdate(previousProps){

  }




  render(){
    console.log("position row", this.props);

    const textStyle = {
      textAlign: "center",

    }


      //console.log(this.props);
      return(

        <Table.Row>
          <Table.Cell style={textStyle}>{this.props.position.symbol}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.position.netPosition}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.position.vwap.toLocaleString()}</Table.Cell>
          <Table.Cell style={textStyle}>{(this.props.position.netPosition*(this.props.position.price - this.props.position.vwap)).toLocaleString()}</Table.Cell>

          </Table.Row>

        )
    }
  }

  export default CurrentPositionTableRow
