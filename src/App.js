import { useState, useRef } from "react";

// const App = () => {
//   const [todo, setTodo] = useState({
//   });
//   const [todolist, setTodolist] = useState([]);
//   const handlerInput = (e) => {
//     setTodo({ ...todo, [e.target.name]: e.target.value })
//   }
//   const handlerList = () => {
//     if (todo.title.length < 5) {
//       return
//     }
//     setTodolist([...todolist, todo]);
//     setTodo({
//       title: "",
//       content: "",
//     })
//   }
//   return (

//     <div>
//       <ul>
//         {
//           todolist.map(it => <li>{it.title} / {it.content}</li>)
//         }
//       </ul>
//       <input type="text" onChange={handlerInput} value={todo.title} name="title" />
//       <input type="text" onChange={handlerInput} value={todo.content} name="content" />
//       <button onClick={handlerList}>WRITE</button>
//       {console.log(todo)}
//     </div >
//   )
// }

const App = () => {
  const [todo, setTodo] = useState({});
  const [todolist, setTodolist] = useState([]);
  // 고유 id 값을 주기 위해 
  const num = useRef(1);

  const handlerInput = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
      id: num.current,
      done: false,
    })
  }

  const handlerList = () => {
    if (todo.title.length < 5) {
      alert('5글자 이상 입력해야 합니다.')
      return
    }
    setTodolist([...todolist, todo]);
    setTodo({
      title: "",
      content: "",
    })
    // num.current = num.current + 1
    num.current++
  }

  const handlerDelete = (id) => {
    // todolist.filter(it => id !== it.id) 
    // todolist filter 순회하면서 it == it id 같지 않은 것들의 새 배열을 반환한다
    setTodolist(todolist.filter(it => id !== it.id))
  }
  const handlerModify = (id) => {
    console.log(id);
    // setTodolist(todolist.map(it => ({ it })))
    // setTodolist(todolist.map(it => (it)))
    setTodolist(todolist.map(it => (
      id === it.id
        ? {
          ...it,
          done: !it.done
        }
        : it
    )))
  }
  return (

    <div>
      <ul>
        {
          // <input type="checkbox" onChange={() => console.log('체크')} /> 
          todolist.map((it, idx) => <li key={it.id} className={it.done ? 'on' : ''}>
            <input type="checkbox" onChange={() => handlerModify(it.id)} />  {it.title} / {it.content}
            {/* <button onClick={handlerDelete(it.id)}>삭제</button> */}
            {/* 이벤트가 바로 실행되어 버렸다. 그래서 아래 () => (클릭했을 때 event) 추가했다. */}
            <button onClick={() => handlerDelete(it.id)}>삭제</button>{console.log(it.done)}
          </li>)
          // 객체에 고유한 번호가 필요하다.
        }
      </ul>
      {/* 여기는() => handlerInput() 또는 handlerInput 만 쓰면 실행된다.*/}
      <input type="text" onChange={handlerInput} value={todo.title || ''} name="title" />
      <input type="text" onChange={handlerInput} value={todo.content || ''} name="content" />
      <button onClick={handlerList}>WRITE</button>
      {console.log(todo)}
    </div >
  )
}

export default App;

