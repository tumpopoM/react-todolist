import React from 'react'
import Styles from './Container.style'
function Container(props) {
  return (
    <div style={Styles.width}>
      {props.children}
    </div>
  )
}
export default Container
