import './ToDoList.css';

function ToDoList({ children }){
    return(
      <ul className='toDoList'>
        {children}
      </ul>
    );
  }

  export { ToDoList };