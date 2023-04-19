import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import { Container } from 'react-bootstrap'
import s from './App.css'

function App() {
  const[todo, setTodo] = useState([])

  useEffect(() => {
    console.log('get')
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos.length != 0) {
      setTodo(todos);
    }
  }, []);

  useEffect(() => {
    console.log('set')
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  return (
    <Container className={s.container}>
      <div className="App">
        <Header/>
        <AddTodo todo={todo} setTodo={setTodo}/>
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
    </Container>
  )
}

document.body.style = 'background: #489cc1;';

export default App
