//component for the trading form

import React from "react"
import {Container, Form, Button, Message, Popup} from "semantic-ui-react"
import { connect } from 'react-redux'
import {createNewTrade} from "../../redux/actions/createTradeAction"

const buttonStyle = {
    position:"relative",
    marginTop:"24px",
    height:"60%"
  }

class TradeForm extends React.Component{

  state = {
    quantity: 1,
    newTrade:false
  }

  //check to see if a trade has been executed and is in the messages
  //this will display the successful trade message then remove the message from view after time out
  componentDidUpdate(previousProps){
    if(previousProps.messages !== this.props.messages){
      this.setState({
        newTrade:true
      },()=>setTimeout(()=>this.setState({newTrade:false}),3000))
    }
  }

  //handle user changing the quantity in the form
  handleQuantityChange = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }


  //user executes a buy
  handleBuy =  () => {
    //userId, symbol, buy, price, quantity
    //check that there is actual pricing data
    if (this.props.selectedAsset.livePrice !== "Loading"){
    this.props.createNewTrade(this.props.currentUser.id,
          this.props.selectedAsset.symbol, true, this.props.selectedAsset.livePrice, parseFloat(this.state.quantity))
    }
    this.setState({quantity:1})
  }

  //user executes a sell
  handleSell =  () => {
    //userId, symbol, buy, price, quantity
    //check that there is actual pricing data
    if (this.props.selectedAsset.livePrice !== "Loading"){
    this.props.createNewTrade(this.props.currentUser.id,
      this.props.selectedAsset.symbol, false, this.props.selectedAsset.livePrice, this.state.quantity)
    }
  }

  //display message after trade is executed
  renderTradeMessage = () => {
    let direction
    if (this.props.messages.buy) {
      direction = "Buy"
    }else{
      direction = "Sell"
    }

    //message to be displayed
    return(
      <Message positive>
        <Message.Header>Executed Trade</Message.Header>
          <p>{`${direction} ${this.props.messages.quantity} ${this.props.messages.asset.name} (${this.props.messages.asset.symbol}) @ $${this.props.messages.price}`}</p>
      </Message>
    )
  }

  //display the trading instructions
  instructionsRender(){
    return(
      <Message warning>
        <Message.Header>Trading Instructions</Message.Header>
        <Message.List>
          <Message.Item>Click on an asset from the above table </Message.Item>
          <Message.Item>Enter the desired quantity</Message.Item>
          <Message.Item>Press "Buy" or "Sell" to execute the trade</Message.Item>
        </Message.List>
      </Message>
    )
  }

  //the blank form that the user sees before an asset is selected
  //no event listeners
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

  //the activated form that a user views after selecting an asset
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


  //full rendering for this component
  render(){

    return(
      <Container>
          {/*render the initial trading instructions if the user has not selected an asset ever */}
          {this.props.selectedAsset? null: this.instructionsRender()}
        <Form>
          {/*render the blank trading form if the user has not selected an asset */}
          {this.props.selectedAsset? this.selectedAssetFormRender(): this.blankFormRender()}
        </Form>

        {/*render the error message if the trade was not executed*/}
        {this.props.errors? <Message error>{this.props.errors}</Message>: null}

        {/*render the successful trade message if trade was executed properly */}
        {this.state.newTrade? this.renderTradeMessage(): null}

        {/*render the instruction pop up if the user has selected an asset before */}
        {this.props.selectedAsset? <Popup trigger={<Button color="orange" icon='question' />} content={this.instructionsRender()} />: null}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedAsset: state.selectedAsset,
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
