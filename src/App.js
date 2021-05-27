import React, {useState, useMemo, useCallback} from 'react';
import './App.css';
import Input from './components/Input'
import List from './components/List'
import Item from './components/Item'
import Background from './components/Background';
import Container from './components/Container';
import Title from './components/Title';
import Total from './components/Total'

function App() {
  const [tasks, setTasks] = useState([]) //['xxx','xxx'] = [<Item />, <Item />]
  const [inputText, setInputText] = useState('')
  // const [isMouseInside, setIsMouseInside] = useState(false)

  const onChangeInput = useCallback((e) => {
    setInputText(e.target.value)
  }, [])

  const countTasks = useMemo(() => tasks.length ? tasks.length : 'X', [tasks])

  const addToDo = useCallback((e) => {
    const data = [...tasks] // ...tasks คือการ clone ตัว tasks มาเพื่อทำอะไรสักอย่างกับตัวแปรนี้ก่อนเซตค่าใหม่กลับเข้าไป
    data.push(inputText)
    setTasks(data)
    setInputText('')
  }, [inputText, tasks]) // [inputText, tasks] ถ้า key มีการเปลี่ยนแปลงถึงจะทำงาน

  const removeToDo = useCallback((id) => {
    // console.log('Hey Delete It!: ', id);
    const data = [...tasks]
    let newData = data.filter((item, index) => {
      return index !== id;
    })
    setTasks(newData)
    // console.log('newData: ', newData);
  }, [tasks])

  const clearAllToDo = useCallback((e) => {
    setTasks([])
    // setInputText('')
  }, [])

  // const mouseEnter = useCallback((e) => {
  //   console.log('mouseEnter id: ', e.target.id);
  //   setIsMouseInside(true)
  //   console.log('mouseEnter: ', isMouseInside);
  // }, [isMouseInside])
  // const mouseLeave = useCallback((e) => {
  //   console.log('mouseLeave id: ', e.target.id);
  //   setIsMouseInside(false)
  //   console.log('mouseLeave: ', isMouseInside);
  // }, [isMouseInside])

  return (
    <Background>
      <Container>
        <Title />
        <Input value={inputText} onChange={onChangeInput} onClick={addToDo}/>
        <List>
          {
            tasks.map((title, i) => (
              <Item title={title} id={i} key={i} onSelect={removeToDo} /> // key ควรเป็นอะไรที่ไม่ซ้ำอย่างเช่น id
              // <Item title={title} id={i} key={i} onSelect={removeToDo} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} isMouseInside={isMouseInside}/> // key ควรเป็นอะไรที่ไม่ซ้ำอย่างเช่น id
            ))
          }
        </List>
        {countTasks !== 'X' && <Total countTasks={countTasks} onClick={clearAllToDo}/>}
        {/* หลัง && จะทำงานก็ต่อเมื่อเงื่อนไขข้างหน้าเป็น true เท่านั้น */}
      </Container>
    </Background>
  )
}

export default App;
