import React from "react"
import {Container, Table} from "semantic-ui-react"
import { connect } from 'react-redux'
import {selectAssetAction} from "../redux/actions/selectAssetAction"

class TradeTableRow extends React.Component{

  componentDidUpdate(previousProps){

  }


  handleClick = (event) => {
    this.props.selectAssetAction(this.props.asset, this.props.tether)
  }

  render(){


    const textStyle = {
      textAlign: "center",

    }


    //console.log(this.props);
      return(

        <Table.Row onClick={this.handleClick}>
          <Table.Cell style={textStyle}>{this.props.asset.symbol}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.asset.name}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.asset.livePrice}</Table.Cell>
          
          <Table.Cell style={textStyle}></Table.Cell>
          </Table.Row>

        )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return{
      selectAssetAction: (asset, tether) => {
        dispatch(selectAssetAction(asset, tether))
      }
    }
  }



export default connect(null, mapDispatchToProps)(TradeTableRow)
