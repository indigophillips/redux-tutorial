import React from 'react'
import {connect} from 'react-redux'
import Aminal from './Aminal'

const Aminals = ({aminals}) => (
  <div>
    {aminals.map(aminal =>
      <Aminal key={aminal.id}{...aminal} />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    aminals: state.aminals
  }
}

export default connect(mapStateToProps)(Aminals)
