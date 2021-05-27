import React from 'react'
import Styles from './Total.style'

function Total(props) {
  return (
    <div style={Styles.totalText}>
      <span>You have {props.countTasks} pending tasks</span>   
      <button style={Styles.buttonClear} type='button' onClick={props.onClick}>Clear All</button>
    </div> 
  )
}

export default Total
