import React from 'react'
import {connect} from 'react-redux'
import {addAminal} from '../actions'

const submitAminal = (event, dispatch) => {
  if (event.keyCode === 13) {
    dispatch(addAminal(event.currentTarget.value))
    event.currentTarget.value = ''
  }
}

const AddAminal = (props) => (
  <input
    placeholder='Enter aminal img url here'
    onKeyUp={event => {
      submitAminal(event, props.dispatch)
    }}
  />
)

export default connect()(AddAminal)
