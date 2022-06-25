import React from 'react';
const TodoList = ({todos,setTodos,setEditTodo}) => {

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    // const handleComplete = (todo) => {
    //     setTodos(
    //         todos.map((item) => {
    //             if(item.id === todo.id) {
    //                 return {...item, completed : !item.completed}
    //             }
    //             return item;
    //         })
    //     )
    // }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo); 
    }
    return(
        <div> 
                    {todos.map((todo) => {
                        return (
                            
                            <li key={todo.id} className='list-item'>
                                <input 
                                type="text"
                                disabled
                                className={`list ${todo.completed ? "complete" : ""}`}
                                value={todo.title} 
                                onChange={(event) => event.preventDefault()}/>
                                <div>                        
                                  
                                    <button className='button-edit task-button' onClick={()=>handleEdit(todo)}>
                                        <i className='fa fa-edit'></i>
                                    </button>
                                    <button className='button-delete task-button' onClick={()=>handleDelete(todo)}>
                                        Hapus
                                    </button>
                                </div>
                            </li>   
                            )
                    })
                }
             
        </div>
    );
}

export default TodoList;