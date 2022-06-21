import './TodoList.css';

const TodoList = (props) => {
    console.log(props.dataTodo);
    return(
        <div>
            <ul>
                {
                    props.dataTodo.map((things) => {
                         <li key={things.id}>{things.title}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;