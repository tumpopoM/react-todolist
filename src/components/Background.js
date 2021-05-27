import styles from './Background.style';

function Background(props) {
  return (
    <div style={styles.background}>
      {props.children}
    </div>
  )
}

export default Background