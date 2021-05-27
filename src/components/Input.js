import { FaPlus } from 'react-icons/fa'
import Styles from './Input.style'
function Input(props) {
  return (
    <div style={Styles.inputBox}>
      <input style={Styles.inputTodo} value={props.value} onChange={props.onChange} type="text" />
      {/* style={{width: '300px'}} */}
      <button style={Styles.buttonAdd} type='button' onClick={props.onClick}><FaPlus style={{fontSize: '20px'}}/></button>
    </div>
  )
}

export default Input