import React from 'react'

interface TodoListProps {
    //props의 형태를 타입스크립트로 설정
    todos: { id: string, text: string }[]
    onDeleteTodo: (id: string) => void
}

//<>를 추가하고 props 객체의 구조를 설명하는 객체를 추가한다.
const TodoList: React.FC<TodoListProps> = (props) => {

    return <ul>
        {props.todos.map((todo) => <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete</button>
        </li>)}
    </ul>
}

export default TodoList