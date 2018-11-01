import React from "react"
import {Container, Table} from "semantic-ui-react"
import { connect } from 'react-redux'


class TradeTableRow extends React.Component{
  findAsset(state){
    return state.iexData.find((asset)=>{
      return asset.symbol === this.props.asset.symbol
    })
  }


  render(){
    console.log("inthe row",this.props);

    if (this.props.marketData.iexData && this.props.marketData){
      // debugger
      return(
        <Table.Row>
        <Table.Cell>{this.props.asset.symbol}</Table.Cell>
        <Table.Cell>{this.props.asset.name}</Table.Cell>
        <Table.Cell>{this.findAsset(this.props.marketData).bidPrice.toPrecision(6)}</Table.Cell>
        <Table.Cell>{this.findAsset(this.props.marketData).askPrice.toPrecision(6)}</Table.Cell>
        <Table.Cell>{(this.findAsset(this.props.marketData).changePercent*100).toPrecision(3)}%</Table.Cell>
        </Table.Row>
      )
    }else{
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return ({marketData: state.marketData})
}


export default connect(mapStateToProps)(TradeTableRow)
