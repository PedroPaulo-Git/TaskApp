import React from "react";
import CreateTask from './CreateTask';
import MenuTask from './MenuTask';
import ShowTask from "./ShowTask";

function AllTasks() {
    return ( 
        <div>
  <CreateTask /> 
  <ShowTask/>
        </div>
     );
}

export default AllTasks;