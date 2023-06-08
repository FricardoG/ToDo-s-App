import { CompleteIcon } from  './CompleteIcon';
import { DeleteIcon } from  './DeleteIcon';
import './ToDoItem.css';

function ToDoItem(props){
  return(
    <li className="toDoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      ></CompleteIcon>

      <p className={`toDoItem-p ${props.completed && "toDoItem-p-completed"}`}>{props.text}</p>
      
      <DeleteIcon
        onDelete={props.onDelete}
      ></DeleteIcon>
    </li>
  );
}

export { ToDoItem };