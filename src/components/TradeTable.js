import React from "react"
import { connect } from 'react-redux'
import {Container, Table} from "semantic-ui-react"

import TradeTableRow from "./TradeTableRow"


class TradeTable extends React.Component{
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
          <Table.HeaderCell style={headerStyle}>Bid</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>Ask</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>% Change</Table.HeaderCell>
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

export default connect(mapStateToProps)(TradeTable)
