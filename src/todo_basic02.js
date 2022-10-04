import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState({
  });
  const [todolist, setTodolist] = useState([]);

  return (

    <div>
      <ul>
        {
          todolist.map(it => <li>{it.title} / {it.content}</li>)
        }
      </ul>
      <input type="text" onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })} name="title" />
      <input type="text" onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })} name="content" />
      <button onClick={() => setTodolist([...todolist, todo])}>WRITE</button>
      {console.log(todo)}
    </div >
  )
}

export default App;