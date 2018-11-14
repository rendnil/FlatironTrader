import React from "react"
import { connect } from 'react-redux'
import {Segment} from "semantic-ui-react"
import CurrentPositionTable from "./CurrentPositionTable"


  const CurrentPosition = (props) =>{

        return(
          <Segment>
            <CurrentPositionTable
            baseMarketData = {props.baseMarketData}
            marketData={props.marketData}
            trades={props.currentUser.trades}
            positions={props.currentUser.positions}/>
          </Segment>
        )
  }

  const mapStateToProps = (state) => {
    return {
            currentUser: state.authUser.user,
            marketData: state.marketData,
            baseMarketData: state.baseMarketData
    }
  }

export default connect(mapStateToProps)(CurrentPosition)
//
