import React from "react"
import { connect } from 'react-redux'
import {Container, Table} from "semantic-ui-react"

import TradeTableRow from "./TradeTableRow"


class TradeTable extends React.Component{

    getAssetData(){
      let assetData = [ ]
      if (this.props.marketData.iexData){
      this.props.tradeableAssets.forEach((tradeableAsset)=>{
        this.props.marketData.iexData.forEach((iexAsset)=>{
            if (tradeableAsset.symbol === iexAsset.symbol){

              assetData.push({...iexAsset, tradeableAsset_id: tradeableAsset.id})
            }
        })


      })
    }
    return assetData
    }




  render(){
    console.log("trade table", this.props);


    const headerStyle = {
      textAlign: "center"
    }

    return(
      <div>
        <Container>
          <Table celled selectable>


          <Table.Header>
        <Table.Row>
          <Table.HeaderCell style={headerStyle} >Symbol</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>Name</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>Bid (USD)</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>Ask (USD)</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>% Change</Table.HeaderCell>
        </Table.Row>
          </Table.Header>

        <Table.Body>
        {this.getAssetData().map((asset)=>{
          return <TradeTableRow
          key={asset.symbol} asset={asset}
          tether={this.props.marketData.tether}/>

        })}
        </Table.Body>
          </Table>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {tradeableAssets: state.tradeableAssets,
          marketData: state.marketData
          }
}

export default connect(mapStateToProps)(TradeTable)
