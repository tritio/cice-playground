import React, { useState, useEffect } from 'react'
import { Button } from '../../../../core/components/button/button';
import { Todo } from '../../domain/todo'

interface Props {
  onCreate(todoText: string): void
  todos: Todo[]
}

export const TodoCreate: React.FunctionComponent<Props> = ({ onCreate, todos }) => {
  const [todoText, setTodoText] = useState('')

  const clearTodo = () => setTodoText('')

  const isRepeated = todos.map( todo => todo.title ).includes(todoText);

  return (
<>
    <form
      onSubmit={event => {
        event.preventDefault()
        onCreate(todoText)
        clearTodo()
      }}
    >
      <label>
        Todo
        <input value={todoText} onChange={event => setTodoText(event.target.value)} />
      </label>
      <Button onClick={clearTodo}>Clear todo</Button>
      <button type="submit" disabled={isRepeated}>Create todo</button>
    </form>
    </>
  )
}

