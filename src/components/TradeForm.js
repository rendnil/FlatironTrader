import React from "react"
import {Container, Form, Button, Icon} from "semantic-ui-react"
import { connect } from 'react-redux'
import {createNewTrade} from "../redux/actions/createTradeAction"

class TradeForm extends React.Component{

  state={
    quantity: 1
  }


  handleQuantityChange = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }



  handleBuy =  () => {
    //userId, symbol, buy, price, quantity
    this.props.createNewTrade(this.props.currentUser.id,
      this.props.selectedAsset.symbol, true, this.props.selectedAsset.livePrice, this.state.quantity)
  }

  handleSell =  () => {
    //userId, symbol, buy, price, quantity

    this.props.createNewTrade(this.props.currentUser.id,
      this.props.selectedAsset.symbol, false, this.props.selectedAsset.livePrice, this.state.quantity)
  }

  blankFormRender(){
    return(
      <Form.Group>
        <Form.Input label='Asset Name' value='Select Asset' width={4} />
        <Form.Input type="number"label='Quantity' value={1}  width={4} />
        <Form.Input label='USD Price' value="Select Asset" placeholder='Select Asset' width={5} />
        <Button size="large" color="green">Buy</Button>
        <Button size = "large" color="red">Sell</Button>
      </Form.Group>
    )
  }

  selectedAssetFormRender(){
    return(
      <Form.Group>
        <Form.Input label='Asset Name' value={this.props.selectedAsset.name} width={4} />
        <Form.Input onChange={this.handleQuantityChange} type="number"label='Quantity' value={this.state.quantity} placeholder='Enter Quantity' width={4} />
        <Form.Input label='USD Price' value={this.props.selectedAsset.livePrice} placeholder='Select Asset' width={5} />


        <Button onClick={this.handleBuy} size="large" color="green">Buy</Button>
  
        <Button onClick={this.handleSell} size = "large" color="red">Sell</Button>
      </Form.Group>
    )
  }



  render(){
    console.log(this.props);
    return(
      <Container>
      <Form>
        {this.props.selectedAsset? this.selectedAssetFormRender(): this.blankFormRender()}

      </Form>

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {selectedAsset: state.selectedAsset,
  currentUser:state.currentUser
}
}

const mapDispatchToProps = (dispatch) => {
  return{
    createNewTrade: (userId, assetId, buy, price, quantity) => {
      dispatch(createNewTrade(userId, assetId, buy, price, quantity))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(TradeForm)
