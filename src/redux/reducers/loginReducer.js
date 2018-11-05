
///need to remove this
const defaultState = {
        "id": 1,
       "username": "a",
       "email": "a@hotmail.com",
       "trades": [{"asset":{"id":6,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-05T14:31:57.953Z","updated_at":"2018-11-05T14:31:57.953Z"},"buy":true,"price":5000.0,"quantity":1.0},{"asset":{"id":6,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-05T14:31:57.953Z","updated_at":"2018-11-05T14:31:57.953Z"},"buy":true,"price":5050.0,"quantity":1.0},{"asset":{"id":6,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-05T14:31:57.953Z","updated_at":"2018-11-05T14:31:57.953Z"},"buy":false,"price":5000.0,"quantity":3.0},{"asset":{"id":6,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-05T14:31:57.953Z","updated_at":"2018-11-05T14:31:57.953Z"},"buy":true,"price":6000.0,"quantity":10.0},{"asset":{"id":6,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-05T14:31:57.953Z","updated_at":"2018-11-05T14:31:57.953Z"},"buy":true,"price":7000.0,"quantity":10.0},{"asset":{"id":6,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-05T14:31:57.953Z","updated_at":"2018-11-05T14:31:57.953Z"},"buy":true,"price":8000.0,"quantity":10.0},{"asset":{"id":6,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-05T14:31:57.953Z","updated_at":"2018-11-05T14:31:57.953Z"},"buy":true,"price":2000.0,"quantity":10.0},{"asset":{"id":6,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-05T14:31:57.953Z","updated_at":"2018-11-05T14:31:57.953Z"},"buy":true,"price":3000.0,"quantity":10.0},{"asset":{"id":6,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-05T14:31:57.953Z","updated_at":"2018-11-05T14:31:57.953Z"},"buy":true,"price":5000.0,"quantity":5.0},{"asset":{"id":7,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-05T14:31:57.961Z","updated_at":"2018-11-05T14:31:57.961Z"},"buy":true,"price":6000.0,"quantity":10.0},{"asset":{"id":7,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-05T14:31:57.961Z","updated_at":"2018-11-05T14:31:57.961Z"},"buy":true,"price":6000.0,"quantity":7.0},{"asset":{"id":7,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-05T14:31:57.961Z","updated_at":"2018-11-05T14:31:57.961Z"},"buy":true,"price":6000.0,"quantity":10.0},{"asset":{"id":7,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-05T14:31:57.961Z","updated_at":"2018-11-05T14:31:57.961Z"},"buy":true,"price":7000.0,"quantity":10.0},{"asset":{"id":7,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-05T14:31:57.961Z","updated_at":"2018-11-05T14:31:57.961Z"},"buy":true,"price":8000.0,"quantity":10.0},{"asset":{"id":7,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-05T14:31:57.961Z","updated_at":"2018-11-05T14:31:57.961Z"},"buy":true,"price":2000.0,"quantity":10.0},{"asset":{"id":7,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-05T14:31:57.961Z","updated_at":"2018-11-05T14:31:57.961Z"},"buy":true,"price":3000.0,"quantity":10.0},{"asset":{"id":7,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-05T14:31:57.961Z","updated_at":"2018-11-05T14:31:57.961Z"},"buy":true,"price":5000.0,"quantity":5.0},{"asset":{"id":7,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-05T14:31:57.961Z","updated_at":"2018-11-05T14:31:57.961Z"},"buy":true,"price":6000.0,"quantity":10.0},{"asset":{"id":7,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-05T14:31:57.961Z","updated_at":"2018-11-05T14:31:57.961Z"},"buy":true,"price":6000.0,"quantity":7.0},{"asset":{"id":7,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-05T14:31:57.961Z","updated_at":"2018-11-05T14:31:57.961Z"},"buy":true,"price":6000.0,"quantity":10.0}],
       "net_position": 0,
       "weighted_price": 0
}


export default function (state = defaultState, action){


  switch(action.type){
    case "LOGIN_USER":

      return action.payload.user

    case "NOT_VALID":

        return "Invalid login attempt"
    case "NOT_VALID_SIGNUP":

        return "Invalid sign up attempt"


    default:
      return state
  }



}
