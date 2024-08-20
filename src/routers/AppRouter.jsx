import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowTask from '../components/ShowTask';
import CreateTask from '../components/CreateTask';
import CalendarTask from '../components/CalendarTask'
import AllTasks from '../components/AllTasks';

function AppRouter() {
    return ( 
        <div>  
        <Router>
        <Routes>
          <Route path='/Tasks/' element={<CreateTask/>}/>
          <Route path='/tasks' element={<ShowTask/>}/>
          <Route path='/calendar' element={<CalendarTask/>}/>
        </Routes>
      </Router>
      </div>
     );
}

export default AppRouter;