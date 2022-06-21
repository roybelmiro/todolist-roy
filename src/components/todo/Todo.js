import './Todo.css';
import TodoList from '../todo-list/TodoList';

const Todo = () => {
    const things = [
        {id:1,title:'Eat'},
        {id:2,title:'Wake Up'}
    ]

    return (
        <div>
            <h3>To Do List!</h3>
            <TodoList dataTodo = {things} />
        </div>
    ); 
}

export default Todo;