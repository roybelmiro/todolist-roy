import React,{useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Form from './components/Form';

const App = () => {
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
      <div className='app-wrapper'>
        <Header/>
        <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo = {editTodo}
          setEditTodo = {setEditTodo}
          />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setEditTodo = {setEditTodo}/>
      </div>
      <div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
