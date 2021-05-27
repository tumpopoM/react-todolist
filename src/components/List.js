import React from 'react'
import Styles from './List.style'

function List(props) {
  return (
    <ul style={Styles.List}>
      {props.children}
    </ul>
  )
}

export default List