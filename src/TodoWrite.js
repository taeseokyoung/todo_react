import React from 'react'

const TodoWrite = ({ list, word, handlerList, handlerWord, inputTitle }) => {
    return (
        <div>
            <div>{console.log(list)}</div>
            <div><input type="text" onChange={handlerWord} name="title" value={word.title || ''} ref={inputTitle} /></div>
            <div><input type="text" onChange={handlerWord} name="content" value={word.content || ''} /></div>
            <div><button onClick={handlerList}>WRITE</button></div>
        </div>
    )
}

export default TodoWrite