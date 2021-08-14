import React, { useState } from 'react'

export const TodoItem = ({ todos, setTodos, val }) => {
    const [visib, setVisib] = useState(false)
    const [chg, setChg] = useState()
    const hide = () => {
        if (visib == false) {
            setVisib(true)
        }
        else {
            setVisib(false)
        }
    }

    const remove = () => {
        setTodos(todos.filter((e) => {
            return e !== val;
        }));
    }
    return (
        <div>
            <div id="todo-item" className="flex mb-4 py-3 mx-3 py-2 items-center rounded-xl  border-gray-500 text-gray-400 text-2xl">
                <p id="hs" className="w-full" style={visib ? { color: '#1F2735' } : {}}  >{val}</p>

                <a href="#" title="Hide" className="text-gray-400 hover:text-blue-400 mr-2 pt-3 " onClick={hide}  >
                    <i className="material-icons-outlined l" style={{ fontSize: 25 }} style={visib ? { color: '#60A5FA' } : {}} >visibility</i>
                </a>

                <a href="#" className="text-gray-400 hover:text-red-400 ml-2  pt-2" onClick={remove}>
                    <i className="material-icons-outlined " style={{ fontSize: 25 }} >delete_outline</i>
                </a>
            </div>

        </div>
    )
}

