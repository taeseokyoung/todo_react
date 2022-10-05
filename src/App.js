import React, { useRef, useState } from 'react'

const App = () => {
  const [word, setWord] = useState({});
  const [list, setList] = useState([])

  const num = useRef(1);
  // 생애주기~?
  const inputTitle = useRef(null);
  const inputContent = useRef(null);

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
  }


  return (
    <div>
      <h2>list</h2>
      <ul>
        {
          list.map((li, idx) => <li key={li.id}>{li.title} {li.content}</li>)
        }
      </ul>
      <div>{console.log(list)}</div>
      <div><input type="text" onChange={handlerWord} name="title" value={word.title || ''} ref={inputTitle} /></div>
      <div><input type="text" onChange={handlerWord} name="content" value={word.content || ''} /></div>
      <div><button onClick={handlerList}>WRITE</button></div>
    </div>
  )
}

export default App
