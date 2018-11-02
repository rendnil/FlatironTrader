import React from "react"
import {Container, Table} from "semantic-ui-react"
import { connect } from 'react-redux'


class TradeTableRow extends React.Component{
  findAsset(state){
    return state.iexData.find((asset)=>{
      return asset.symbol === this.props.asset.symbol
    })
  }

  tetherConversion(){
    if(this.props.marketData.tether){
      return this.props.marketData.tether
    }else{
      return 1
    }
  }


  render(){
    console.log("row render",this.props.asset.name);
    console.log(this.props.marketData);

    const textStyle = {
      textAlign: "center",

    }

    if (this.props.marketData.iexData && this.props.marketData){
      // debugger
      return(

        <Table.Row>
          <Table.Cell style={textStyle}>{this.props.asset.symbol}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.asset.name}</Table.Cell>
          <Table.Cell style={textStyle}>{(this.tetherConversion()*this.findAsset(this.props.marketData).bidPrice).toPrecision(6)}</Table.Cell>
          <Table.Cell style={textStyle}>{(this.tetherConversion()*this.findAsset(this.props.marketData).askPrice).toPrecision(6)}</Table.Cell>
          <Table.Cell style={textStyle}>{(this.findAsset(this.props.marketData).changePercent*100).toPrecision(3)}%</Table.Cell>
          </Table.Row>
      )
    }else{
      return null
    }
  }
}

const mapStateToProps = (state, props) => {
  return ({marketData: state.marketData})
}


export default connect(mapStateToProps)(TradeTableRow)
