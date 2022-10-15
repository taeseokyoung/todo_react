import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);


  return (

    <div>
      <ul>
        {
          list.map((it, idx) => <li key={idx}>{it}</li>)
        }
      </ul>
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input || ''} />
      <button onClick={() => setList([...list, input])}>Enter</button>
    </div>
  )
}

export default App;
