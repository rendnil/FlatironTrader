import React from "react"
import {Table} from "semantic-ui-react"
import { connect } from 'react-redux'
import {selectAssetAction} from "../../redux/actions/selectAssetAction"

class TradeTableRow extends React.Component{

  constructor(props){
    super(props)
    this.interval = null
  }

  state = {
    cellsSelected: false,
    priceChange: false,
    positiveChange: false,
    negativeChange: false
  }

  componentDidUpdate(previousProps){
    ///check for price changes and make the cell active
    if (previousProps.asset.livePrice < this.props.asset.livePrice){

      this.setState({
        positiveChange: true
      })

      this.revertColor()


    }else if (previousProps.asset.livePrice > this.props.asset.livePrice) {
      this.setState({
        negativeChange: true
      })
    this.revertColor()

    }
  }

  componentWillUnmount() {
    //clear intervals upon unmounting
    clearTimeout(this.interval)

  }

  revertColor(){
    this.interval = setTimeout(()=>this.setState({
      positiveChange: false,
      negativeChange: false
    }),3000)
  }

  handleClick = (event) => {
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
    return(
      <Table.Row active={this.state.cellsSelected} onClick={this.handleClick}>
        <Table.Cell>{this.props.asset.symbol}</Table.Cell>
        <Table.Cell>{this.props.asset.name}</Table.Cell>
        <Table.Cell positive={this.state.positiveChange} negative={this.state.negativeChange}>{this.props.asset.livePrice}</Table.Cell>
        <Table.Cell >{(this.calcPercentChange()*100).toLocaleString()}%</Table.Cell>
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
