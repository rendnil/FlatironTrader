import React from "react"
import {Container, Form, Button, Icon, Message} from "semantic-ui-react"
import { connect } from 'react-redux'
import {createNewTrade} from "../../redux/actions/createTradeAction"

const buttonStyle = {
    position:"relative",
    marginTop:"24px",
    height:"60%"
  }

class TradeForm extends React.Component{

  state={
    quantity: 1,
    newTrade:false
  }

  componentDidUpdate(previousProps){
    if(previousProps.messages !== this.props.messages){
      this.setState({
        newTrade:true
      },()=>setTimeout(()=>this.setState({newTrade:false}),5000))



    }


  }


  handleQuantityChange = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }



  handleBuy =  () => {
    //userId, symbol, buy, price, quantity

    this.props.createNewTrade(this.props.currentUser.id,
          this.props.selectedAsset.symbol, true, this.props.selectedAsset.livePrice, parseFloat(this.state.quantity))
  }

  handleSell =  () => {
    //userId, symbol, buy, price, quantity

    this.props.createNewTrade(this.props.currentUser.id,
      this.props.selectedAsset.symbol, false, this.props.selectedAsset.livePrice, this.state.quantity)
  }

  renderTradeMessage = () => {
    let direction
    console.log("messages", this.props.messages)
    if (this.props.messages.buy) {
      direction = "Buy"
    }else{
      direction = "Sell"
    }

    return(
      <Message positive>
        <Message.Header>Executed Trade</Message.Header>
          <p>{`${direction} ${this.props.messages.quantity} ${this.props.messages.asset.name} @ $${this.props.messages.price}`}</p>
      </Message>
    )
  }

  blankFormRender(){
    return(
      <Form.Group>
        <Form.Input label='Asset Name' value='Select Asset' width={4} />
        <Form.Input type="number"label='Quantity' value={1}  width={4} />
        <Form.Input label='USD Price' value="Select Asset" placeholder='Select Asset' width={5} />
        <br/>
        <Button style={buttonStyle} color="green">Buy</Button>
        <Button style={buttonStyle} color="red">Sell</Button>
      </Form.Group>
    )
  }

  selectedAssetFormRender(){
    return(
      <Form.Group>
        <Form.Input label='Asset Name' value={this.props.selectedAsset.name} width={4} />
        <Form.Input onChange={this.handleQuantityChange} type="number"label='Quantity' value={this.state.quantity} placeholder='Enter Quantity' width={4} />
        <Form.Input label='USD Price' value={this.props.selectedAsset.livePrice} placeholder='Select Asset' width={5} />


        <Button onClick={this.handleBuy} style={buttonStyle} color="green">Buy</Button>

        <Button onClick={this.handleSell} style={buttonStyle} color="red">Sell</Button>
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
      {this.props.errors? <Message error>{this.props.errors}</Message>: null}
      {this.state.newTrade? this.renderTradeMessage(): null}

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {selectedAsset: state.selectedAsset,
  currentUser:state.authUser.user,
  errors: state.errors.errors,
  messages: state.messages
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
