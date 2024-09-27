import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowTask from '../components/ShowTask';
import CreateTask from '../components/CreateTask';
import CalendarTask from '../components/CalendarTask'
import TaskApp from '../components/TaskApp';

function AppRouter() {
    return ( 
        <div>  
        <Router>
        <Routes>
          <Route path='/' element={<CreateTask/>}/>
          <Route path='/tasks' element={<ShowTask/>}/>
          <Route path='/calendar' element={<CalendarTask/>}/>
        </Routes>
      </Router>
      </div>
     );
}

export default AppRouter;