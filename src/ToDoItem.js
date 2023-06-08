import { CompleteIcon } from  './CompleteIcon';
import { DeleteIcon } from  './DeleteIcon';
import './ToDoItem.css';

function ToDoItem(props){
  return(
    <li className="toDoItem">
      <CompleteIcon></CompleteIcon>
      {/* <span className={`icon icon-check ${props.completed && "icon-check-active"}`}
            onClick={props.onComplete}
      >V</span> */}
      <p className={`toDoItem-p ${props.completed && "toDoItem-p-completed"}`}>{props.text}</p>
      <DeleteIcon></DeleteIcon>
      {/* <span className='icon icon-delete'
            onClick={props.onDelete}
      >X</span> */}
    </li>
  );
}

export { ToDoItem };