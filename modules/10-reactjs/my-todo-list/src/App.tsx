import React, { useState, useEffect } from 'react';
import './App.css';
import { TodoList } from './features/todo/ui/todo-list/todo-list'
import { Todo } from './features/todo/domain/todo'
import { TodoCreate } from './features/todo/ui/todo-create/todo-create'
import { Page } from './core/components/page/page';
import axios from 'axios';




function App() {

  // Declara una nueva variable de estado, la cual llamaremos todos
  // HOOKS: https://es.reactjs.org/docs/hooks-intro.html

  const [todos, setTodos] = useState<Todo[]>([])


  function addTodo(todoText: string) {
    const newTodo = {id: Math.random() * 1000, completed: true, title: todoText}
    setTodos([...todos, newTodo]);

  }

  function completeTodo(id: number) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )
  }

  useEffect( () => {

    const fetchData = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/todos/');
      console.log("ejemplo", result.data);
      setTodos(result.data);

  };
  fetchData();

}, []);


  return (
    <>
    <Page>
      <TodoList todos={todos} onCompleteTodo={completeTodo}></TodoList>
      <TodoCreate onCreate={addTodo} todos={todos} />
    </Page>
    </>
  );
}

export default App;
