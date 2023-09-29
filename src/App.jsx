import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AppRouter from './routers/AppRouter'
import CreateTask from './components/CreateTask';
import MenuTask from './components/MenuTask';
import AllTasks from './components/AllTasks';
import ShowTask from './components/ShowTask'

function App() {
  return(
  <div>
    <AppRouter/>
    
   </div>
  )

}
export default App;
