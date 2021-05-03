import React, { useRef } from 'react'

type NewTodoProps = {
    //onAddTodo는 함수타입이며 인자로 string을 받는다.
    onAddTodo: (todoText: string) => void
}


const NewTodo: React.FC<NewTodoProps> = (props) => {
    //참조하는 대상이 HTMLInputElement라고 설정
    const textInputRef = useRef<HTMLInputElement>(null)

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        //해당 값이 null값이 올 수 있기 때문에 ! 를 사용
        const enterText = textInputRef.current!.value
        //console.log(enterText)
        props.onAddTodo(enterText)
    }

    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input type='text' id='todo-text'
                    ref={textInputRef} />
            </div>
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default NewTodo