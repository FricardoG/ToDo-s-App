import React from "react";
import { ToDoIcon } from  './ToDoIcon';

function CompleteIcon(){
    return(
        <ToDoIcon 
            type="check"
            color="grayL"
        />
    );
}

export { CompleteIcon };