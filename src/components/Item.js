import { FaRegTrashAlt } from 'react-icons/fa';
import Styles from "./Item.style";
import React, {useState, useCallback} from 'react';
// import Button from '@material-ui/core/Button';

function Item (props) {
  const [isMouseInside, setIsMouseInside] = useState(null)

  const mouseEnter = useCallback((e) => {
    setIsMouseInside(parseInt(e.target.id))
  }, [])

  const mouseLeave = useCallback((e) => {
    setIsMouseInside(null)
  }, [])

  return (
    <li id={props.id} style={Styles.Item} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <span style={Styles.Title}>{props.title}</span>
      <div style={isMouseInside !== props.id ? Styles.Overlay : Styles.OverlayShow}>
        <button style={Styles.Button} onClick={() => { props.onSelect(props.id) }}><FaRegTrashAlt /></button>
      </div>
    </li>
  )
}

export default Item