// import { useState } from "react";

// const App = () => {

//   const [input, setInput] = useState();

//   return (
//     <div style={{ textAlign: "center", padding: "100px 0" }}>
//       {input}
//       {
//         list.map(it => <li>lt</li>)
//       }
//       <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
//       {/* 초기값 0 설정을 하니까 입력값이 자꾸 0으로 되돌아온다. {input} 으로 바꿔줬다.*/}
//       <button onClick={() => setInput(input + 1)}>입력</button>
//     </div>
//   );
// }



import { useState } from "react";

const App = () => {

  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  return (
    <div style={{ textAlign: "center", padding: "100px 0" }}>
      <ul>
        {
          list.map((it, idx) => <li key={idx}>{it}</li>)
        }
      </ul>
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input || ''} />
      {/* 초기값 0 설정을 하니까 입력값이 자꾸 0으로 되돌아온다. {input} 으로 바꿔줬다.*/}
      {/* <button onClick={() => setList(['01','02'])}>입력</button> */}
      {/* <button onClick={() => setList([input])}>입력</button> */}
      {/* data가 쌓이지 않는다. */}
      {/* <button onClick={() => setList(['01', input])}>입력</button> */}
      {/* list 에다가 input을 넣을 수 있으면 되지 않을까? */}
      <button onClick={() => setList([...list, input])}>입력</button>
      {/* 원래 있는 값에다가 input을 집어넣는다. 앞에있는것들은 늘여놓고 뒤에있는것은 집어넣는다. */}
      {console.log(list)}
    </div>
  );
}

export default App;