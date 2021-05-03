import React, { useState } from 'react'
import TodoList from "./components/TodoList"
import NewTodo from "./components/NewTodo"

//작성한 ToDO 가지고 오기
import { Todo } from "./todo.model"

const App: React.FC = () => {
  //dummy, const todos = [{ id: 't1', text: 'Finish the courser' }]

  // 기존의 useState
  //const [todos, setTodos] = useState([])

  // 타입스크립트 활용
  // state의 타입을 설정해줘야 한다.
  // import 한 Todo 사용
  const [todos, setTodos] = useState<Todo[]>([])


  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList todos={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  )
}

export default App