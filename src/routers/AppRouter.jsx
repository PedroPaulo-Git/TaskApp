import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowTask from '../components/ShowTask';
import CreateTask from '../components/CreateTask';
import AllTasks from '../components/AllTasks';

function AppRouter() {
    return ( 
        <div>  
        <Router>
        <Routes>
        <Route path='/' element={<CreateTask/>}/>
          <Route path='/tasks' element={<ShowTask/>}/>
        </Routes>
      </Router>
      </div>
     );
}

export default AppRouter;