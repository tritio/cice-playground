import React, {useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './button/button';
import classNamesBind from 'classnames/bind';
//import { Input } from './input/input';
import { Todo } from './todo';




function App() {

  // Declara una nueva variable de estado, la cual llamaremos “count”
  // HOOKS: https://es.reactjs.org/docs/hooks-intro.html

  const [todos, setTodos] = useState<Todo[]>([{completed: false, id: 1, text: 'Hacer la compra'}, {completed: false, id: 2, text: 'Ir a la piscina'}])

  const [value, setValues] = useState('')

  function addTodo() {
    const newTodo = {id: Math.random() * 1000, completed: true, text: value}
    setTodos([...todos, newTodo]);
    setValues('');
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



  return (
    <div className="App">



      <input value={value} onChange = {event => setValues(event.target.value)} />

       {todos.map( todo =>

          <li
              key={todo.id}
              onClick={() => completeTodo(todo.id)}

          >
            {todo.text}
          </li>
        )}

      <form onSubmit = {event => event.preventDefault()}>
        <button onClick={addTodo} >Create todo</button>
        { /*   <button onClick={() => addTodo({id: Math.random() * 1000, completed: true, text: value})} > Create todo  </button>*/}

      </form>
    </div>
  );
}

export default App;
