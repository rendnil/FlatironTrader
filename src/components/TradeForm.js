import React from "react"
import {Container, Form, Button} from "semantic-ui-react"

class TradeForm extends React.Component{
  render(){
    return(
      <Container>
      <Form>
        <Form.Group>
          <Form.Input label='Asset Name' placeholder='Select Asset' width={5} />
          <Form.Input type="number"label='Quantity' placeholder='Select Asset' width={4} />
          <Form.Input label='USD Bid/Offer' placeholder='Select Asset' width={5} />
          <Button size="large" color="green">Buy</Button>
          <Button size = "large" color="red">Sell</Button>

        </Form.Group>

      </Form>

      </Container>
    )
  }
}

export default TradeForm
