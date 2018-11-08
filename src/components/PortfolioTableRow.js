import React from "react"
import {Container, Table} from "semantic-ui-react"


class PortfolioTableRow extends React.Component{

  componentDidUpdate(previousProps){

  }



  // findAsset(state){
  //   return state.iexData.find((asset)=>{
  //     return asset.symbol === this.props.asset.symbol
  //   })
  // }
  //
  // tetherConversion(){
  //   if(this.props.marketData.tether){
  //     return this.props.marketData.tether
  //   }else{
  //     return 1
  //   }
  // }

  // handleClick = (event) => {
  //   this.props.selectAssetAction(this.props.asset, this.props.tether)
  // }

  determineBuyOrSell(trade){
    return trade.buy? "Buy" : "Sell"
  }

  render(){
    //console.log("row render",this.props.asset.name);
    //console.log(this.props.marketData);

    const textStyle = {
      textAlign: "center",

    }


      //console.log(this.props);
      return(

        <Table.Row>
          <Table.Cell style={textStyle}>{this.props.trade.asset.symbol}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.trade.asset.name}</Table.Cell>
          <Table.Cell style={textStyle}>{this.determineBuyOrSell(this.props.trade)}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.trade.price.toLocaleString()}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.trade.quantity}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.trade.pnl.toLocaleString()}</Table.Cell>
          </Table.Row>

        )
    }
  }

  export default PortfolioTableRow
