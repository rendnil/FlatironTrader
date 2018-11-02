  const defaultState= [{"asset":{"id":13,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-02T19:44:45.280Z","updated_at":"2018-11-02T19:44:45.280Z"},"buy":true,"price":5000.0,"quantity":1.0},{"asset":{"id":13,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-02T19:44:45.280Z","updated_at":"2018-11-02T19:44:45.280Z"},"buy":true,"price":5050.0,"quantity":1.0},{"asset":{"id":13,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-02T19:44:45.280Z","updated_at":"2018-11-02T19:44:45.280Z"},"buy":false,"price":5000.0,"quantity":3.0},{"asset":{"id":13,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-02T19:44:45.280Z","updated_at":"2018-11-02T19:44:45.280Z"},"buy":true,"price":6000.0,"quantity":10.0},{"asset":{"id":13,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-02T19:44:45.280Z","updated_at":"2018-11-02T19:44:45.280Z"},"buy":true,"price":7000.0,"quantity":10.0},{"asset":{"id":13,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-02T19:44:45.280Z","updated_at":"2018-11-02T19:44:45.280Z"},"buy":true,"price":8000.0,"quantity":10.0},{"asset":{"id":13,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-02T19:44:45.280Z","updated_at":"2018-11-02T19:44:45.280Z"},"buy":true,"price":2000.0,"quantity":10.0},{"asset":{"id":13,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-02T19:44:45.280Z","updated_at":"2018-11-02T19:44:45.280Z"},"buy":true,"price":3000.0,"quantity":10.0},{"asset":{"id":13,"symbol":"BTCUSDT","name":"Bitcoin","created_at":"2018-11-02T19:44:45.280Z","updated_at":"2018-11-02T19:44:45.280Z"},"buy":true,"price":5000.0,"quantity":5.0},{"asset":{"id":14,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-02T19:44:45.285Z","updated_at":"2018-11-02T19:44:45.285Z"},"buy":true,"price":6000.0,"quantity":10.0},{"asset":{"id":14,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-02T19:44:45.285Z","updated_at":"2018-11-02T19:44:45.285Z"},"buy":true,"price":6000.0,"quantity":7.0},{"asset":{"id":14,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-02T19:44:45.285Z","updated_at":"2018-11-02T19:44:45.285Z"},"buy":true,"price":6000.0,"quantity":10.0},{"asset":{"id":14,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-02T19:44:45.285Z","updated_at":"2018-11-02T19:44:45.285Z"},"buy":true,"price":7000.0,"quantity":10.0},{"asset":{"id":14,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-02T19:44:45.285Z","updated_at":"2018-11-02T19:44:45.285Z"},"buy":true,"price":8000.0,"quantity":10.0},{"asset":{"id":14,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-02T19:44:45.285Z","updated_at":"2018-11-02T19:44:45.285Z"},"buy":true,"price":2000.0,"quantity":10.0},{"asset":{"id":14,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-02T19:44:45.285Z","updated_at":"2018-11-02T19:44:45.285Z"},"buy":true,"price":3000.0,"quantity":10.0},{"asset":{"id":14,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-02T19:44:45.285Z","updated_at":"2018-11-02T19:44:45.285Z"},"buy":true,"price":5000.0,"quantity":5.0},{"asset":{"id":14,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-02T19:44:45.285Z","updated_at":"2018-11-02T19:44:45.285Z"},"buy":true,"price":6000.0,"quantity":10.0},{"asset":{"id":14,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-02T19:44:45.285Z","updated_at":"2018-11-02T19:44:45.285Z"},"buy":true,"price":6000.0,"quantity":7.0},{"asset":{"id":14,"symbol":"ETHUSDT","name":"Ethereum","created_at":"2018-11-02T19:44:45.285Z","updated_at":"2018-11-02T19:44:45.285Z"},"buy":false,"price":6000.0,"quantity":10.0}]



export default function (state = defaultState, action){


  switch(action.type){
    case "LOGIN_USER":

      return action.payload.user.trades


    case "CREATE_NEW_TRADE":
      // debugger
      return [...state, action.payload.trade]



    default:
      return state
  }



}
