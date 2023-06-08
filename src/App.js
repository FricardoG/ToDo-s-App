import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from '././ToDoSearch';
import { ToDoList } from '././ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

const defaultToDos = [ //The default toDos that the app starts with.
  { text: 'Chop onion', completed: true },
  { text: 'Buy tomatoes', completed: false },
  { text: 'Make coffee', completed: false },
  { text: 'Wash the dishes', completed: true },
  { text: 'Watch tv', completed: false },
  { text: 'Learn React.JS', completed: false },
];

function App() {
  
  const [searchValue, setSearchValue] = React.useState(''); //Search bar state props.
  const [toDos, setToDos] = React.useState(defaultToDos); 
  const completedToDos = toDos.filter(todo => !!todo.completed).length; //Filter on completed (true) property.
  const totalToDos = toDos.length;
  const searchedToDos = toDos.filter(
    (todo) => {
      const toDoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    }
  );
  const completeToDo = (text) => {   // Function that defines a toDo completed when clicked on the V icon.
    const newToDos = [...toDos]; //Duplicating toDos array.
    const toDoIndex = newToDos.findIndex((todo) => todo.text == text); //Finds the toDo index matching the argument text passed on the first function.
    newToDos[toDoIndex].completed = true; // Modifyng the toDo to completed state.
    setToDos(newToDos);
  }
  const deleteToDo = (text) => {   // Function that defines a toDo deleted when clicked on the X icon.
    const newToDos = [...toDos]; //Duplicating toDos array.
    const toDoIndex = newToDos.findIndex((todo) => todo.text == text); //Finds the toDo index matching the argument text passed on the first function.
    newToDos.splice(toDoIndex, 1); // Modifyng the toDo to deleted state.
    setToDos(newToDos);
  }
  
  return (
    <>
      <ToDoCounter completed={completedToDos} total={totalToDos} />
      <ToDoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <ToDoList>
        {searchedToDos.map(todo => (
          <ToDoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDo(todo.text)}
            onDelete={() => deleteToDo(todo.text)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />

    </>
  );
}

export default App;