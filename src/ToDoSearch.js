import React, { useState } from 'react';
import './ToDoSearch.css';

function ToDoSearch({searchValue, setSearchValue}){
  
  return(
      <input 
        className='toDoSearch' 
        placeholder="Chop onion in little pieces"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      ></input>
    );
  }

  export { ToDoSearch };