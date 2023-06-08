import './ToDoCounter.css';

function ToDoCounter({ total, completed }){
    return(
      <h1 className="toDoCounter">
        You have completed <span> {completed} </span> out of <span> {total} </span> ToDo's
      </h1>
    );
  }

  export { ToDoCounter };