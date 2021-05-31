
const Styles = {
  Item: {
    listStyle: 'none',
    padding: '10px 20px',
    background: '#f1f1f1',
    borderRadius: '5px',
    marginTop: '15px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden'
  },
  Title: {
    width: '100%'
  },
  Overlay: {
    position: 'absolute',
    left: '',
    right: '0',
    top: '0',
    overflow: 'hidden',
    width: '0',
    height: '100%',
    transition: '.5s ease',
  },
  OverlayShow: {
    width: '10%',
    height: '100%',
    transition: '.5s ease',
    right: '0%',
    position: 'absolute',
    top: '0'
  },
  Button: {
    cursor: 'pointer',
    border: 'none',
    background: '#ED2939',
    color: 'white',
    height: '100%',
    width: '100%'
  }
}

export default Styles