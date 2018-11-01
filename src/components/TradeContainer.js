import React from "react"
import { connect } from 'react-redux'
import {Container, Table} from "semantic-ui-react"

import TradeTableRow from "./TradeTableRow"


class TradeContainer extends React.Component{
  // parseData(state){
  //
  // }
  //
  // findAssetData(state){
  //
  //   this.props.tradeableAssets.map((tradeableAsset)=>{
  //     return state.find((asset)=>{
  //       return asset.symbol === tradeableAsset.symbol
  //     })
  //   })
  // }


  render(){
    console.log("dijfoaidj", this.props);

    return(
      <div>
        <Container>
          <Table celled selectable>
          <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Symbol</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Bid</Table.HeaderCell>
          <Table.HeaderCell>Ask</Table.HeaderCell>
          <Table.HeaderCell>% Change</Table.HeaderCell>
        </Table.Row>
          </Table.Header>
        <Table.Body>
        {this.props.tradeableAssets.map((asset)=>{
          return <TradeTableRow key={asset.id} asset={asset} />

        })}

        </Table.Body>
          </Table>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {tradeableAssets: state.tradeableAssets}
}

export default connect(mapStateToProps)(TradeContainer)
