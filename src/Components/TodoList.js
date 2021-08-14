import React from 'react'
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, setTodos }) => {

    return (
        <div>
            {todos.map((val, index) => {

                return (
                    <TodoItem todos={todos} setTodos={setTodos} val={val} key={index} />
                )
            })}
        </div>
    )
}
