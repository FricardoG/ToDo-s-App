import './CreateToDoButton.css';

function CreateToDoButton(){
    return(
        <button className="createToDoButton" onClick={
            (event) => {
                console.log('You have clicked the button');
                console.log(event);
                console.log(event.target);
    }}> Add</button>
    );
  }

  export { CreateToDoButton };