import React, { useState } from 'react'
import { TodoList } from './TodoList'

export const DashBoard = () => {
    const [todo, setTodo] = useState()
    const [newtodo, setnewTodo] = useState([])
    const reset = () => {
        var w = window.confirm("All To Dos will be cleared !")
        if (w == true) {
            setnewTodo([])
        }

    }

    const add = () => {
        if (!document.getElementById('inp-text').value) {
            alert("Please add a To Do !")
        }
        else {

            setnewTodo((pre) => {
                return [...pre, todo]

            })

        }

        document.getElementById('inp-text').value = ''
    }

    return (
        <div>
            <div className="h-100 w-100 flex items-center justify-center bg-teal-lightest font-sans min-h-screen sm:text-3  bg-gray-900 " >
                <div id="main" className="bg-white rounded-xl  p-6 m-5 w-full lg:w-3/4  lg:max-w-xl md:max-w-2xl  sm:max-w-xl bg-opacity-10 bg-gray-400" >

                    <div className="relative">
                        <h1 className="pb-5">TO DO APP</h1>
                        <a href="#" className=" text-gray-400 hover:text-red-400 mt-2 absolute inset-y-0 right-1">
                            <i className="material-icons" style={{ fontSize: 30 }} onClick={reset}>clear</i>
                        </a>

                    </div>
                    <div className="flex mt-4 mx-1 ">
                        <div id="inp-box" className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg w-full py-1 px-3  text-white-900 opacity-40">
                            <input spellCheck="false" className="h-full w-full outline-none bg-transparent text-2xl" type="text" placeholder="Add To Do..." id="inp-text" onChange={(e) => { setTodo(e.target.value) }} />
                            <a href="#" className="text-gray-500 hover:text-gray-900 ml-2 mt-1">
                                <i className="material-icons-outlined text-base " style={{ fontSize: 50 }} onClick={add} >add_circle</i>
                            </a>
                        </div>

                    </div>
                    <div>

                        <div className="pt-5">

                            <TodoList todos={newtodo} setTodos={setnewTodo} />

                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
