import React, { useRef, useState } from 'react'
import TodoList from './TodoList';
import TodoWrite from './TodoWrite';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const App = () => {


  const [word, setWord] = useState({});
  const [list, setList] = useState([])

  const num = useRef(1);
  // 생애주기~?
  const inputTitle = useRef(null);
  const inputContent = useRef(null);

  const navi = useNavigate();

  const handlerWord = e => {
    const { name, value } = e.target;
    setWord({
      ...word,
      [name]: value,
      id: num.current
    })
  }


  const handlerList = () => {
    // const hg = /^[ㄱ-ㅎ|가-힣]+$/;
    const hg = /^[ㄱ-ㅎ 가-힣]*$/;

    // 느낌표가 빠지니까 ㄴㄴㄴ를 한글로 인식하지 못하네 왜..?
    if (!hg.test(word.title)) {
      alert('한글만 작성 가능합니다.')
      setWord({
        ...word,
        title: "",
      })
      inputTitle.current.focus();
      return
    }

    if (!word.title || !word.content) {
      alert('더 입력하셔야 합니다.');
      return
    }

    if (word.title.length < 5) {
      alert('더 입력하셔야 합니다.')
      // 1. 입력창을 비운다., 2. 비운 입력창에 포커스를 준다.
      setWord({
        ...word,
        title: "",
      })
      inputTitle.current.focus();
      return
    }

    if (word.content.length < 5) {
      alert('더 입력하셔야 합니다.')
      setWord({
        ...word,
        title: "",
      })
      // inputContent.current.focus();
      return
    }

    setList([...list, word]);
    setWord({
      title: "",
      content: "",
    })
    num.current++
    navi('/board')
  }


  return (

    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/board'>Board</NavLink>
        <NavLink to='/write'>Write</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<TodoList list={list} setList={setList} />} />
        <Route path='/board' element={<TodoList list={list} setList={setList} />} />
        <Route path='/write' element={<TodoWrite list={list} word={word} handlerWord={handlerWord} handlerList={handlerList} inputTitle={inputTitle} />} />
      </Routes>
    </div>
  )
}

export default App
