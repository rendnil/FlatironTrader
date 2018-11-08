import React from "react"
import {Container, Table} from "semantic-ui-react"
import { connect } from 'react-redux'
import {selectAssetAction} from "../redux/actions/selectAssetAction"

class TradeTableRow extends React.Component{

  state={
    cellsSelected: false,
    priceChange: false

  }

  componentDidUpdate(previousProps){
    ///check for price changes and make the cell active
    if (previousProps.asset.livePrice !== this.props.asset.livePrice){


      this.setState({
        priceChange: true
      })

      setTimeout(()=>this.setState({
        priceChange: false
      }),1000)


    }
  }

  checkPriceChange = () =>{

  }




  handleClick = (event) => {
    this.setState({
      cellsSelected: !this.state.cellsSelected
    })
    this.props.selectAssetAction(this.props.asset)
  }

  calcPercentChange(){

    if(this.props.baseMarketData.length>0){
      let baseAssetData = this.props.baseMarketData.find((data)=>{

        return data.symbol === this.props.asset.symbol
      })

      let percentChange = (this.props.asset.livePrice-baseAssetData.open24hours)/baseAssetData.open24hours
      return percentChange.toFixed(4)
    }
  }

  render(){


    const textStyle = {
      textAlign: "center",

    }



    //console.log("trade table row",this.props);

      return(
        <Table.Row active={this.state.cellsSelected} onClick={this.handleClick}>
          <Table.Cell style={textStyle}>{this.props.asset.symbol}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.asset.name}</Table.Cell>
          <Table.Cell active={this.state.priceChange} style={textStyle}>{this.props.asset.livePrice}</Table.Cell>
          <Table.Cell style={textStyle}>{(this.calcPercentChange()*100).toLocaleString()}%</Table.Cell>
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
