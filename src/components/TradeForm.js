import React from "react"
import {Container, Form, Button} from "semantic-ui-react"
import { connect } from 'react-redux'


class TradeForm extends React.Component{

  state={
    quantity: 1
  }


  handleQuantityChange = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }

  calcUsdBid(){
    let bidPrice = this.state.quantity * this.props.selectedAsset.asset.bidPrice * this.props.selectedAsset.tether

    return bidPrice.toPrecision(6)
  }

  calcUsdOffer(){
    let askPrice = this.state.quantity * this.props.selectedAsset.asset.askPrice * this.props.selectedAsset.tether
    return askPrice.toPrecision(6)
  }

  blankFormRender(){
    return(
      <Form.Group>
        <Form.Input label='Asset Name' value='Select Asset' width={4} />
        <Form.Input type="number"label='Quantity' value={1}  width={4} />
        <Form.Input label='USD Bid/Offer' value="Select Asset" placeholder='Select Asset' width={5} />
        <Button size="large" color="green">Buy</Button>
        <Button size = "large" color="red">Sell</Button>
      </Form.Group>
    )
  }

  selectedAssetFormRender(){
    return(
      <Form.Group>
        <Form.Input label='Asset Name' value={this.props.selectedAsset.asset.companyName} width={4} />
        <Form.Input onChange={this.handleQuantityChange} type="number"label='Quantity' value={this.state.quantity} placeholder='Enter Quantity' width={4} />
        <Form.Input label='Bid Price USD' value={this.calcUsdBid()} placeholder='Select Asset' width={3} />
        <Form.Input label='Ask Price USD' value={this.calcUsdOffer()} placeholder='Select Asset' width={3} />
        <Button size="large" color="green">Buy</Button>
        <Button size = "large" color="red">Sell</Button>
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
  return {selectedAsset: state.selectedAsset}
}



export default connect(mapStateToProps)(TradeForm)
