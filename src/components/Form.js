import React, {useEffect} from 'react';
import {v4 as uuidV4} from "uuid";

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
  
    const updateTodo = (title,id,completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }

  useEffect(() => {
    if(editTodo) {
        setInput(editTodo.title);
    }else{
        setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    if(!editTodo){
        setTodos([...todos, {id: uuidV4(), title:input, completed:false}]);
        setInput("");
    }else{
        updateTodo(input, editTodo.id, editTodo.completed)
    }
  };
   
    return (
    <form onSubmit={onFormSubmit}>
        <input type="text" className="task-input" placeholder="Masukkan todo" value={input} required onChange={onInputChange}/>
        <button type="submit" className='button-add'>
            {editTodo ? "Perbarui" : "Tambah"}
        </button>
    </form> 
  )
}

export default Form;