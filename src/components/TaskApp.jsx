import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTask from './CreateTask';
import MenuTask from './MenuTask';
import ShowTask from "./ShowTask";

function AllTasks() {
    return ( 
        <div>
            <CreateTask/> 
        </div>
     );
}

export default AllTasks;