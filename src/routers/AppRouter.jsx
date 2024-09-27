import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from '../components/context/ContextTasks';
import ShowTask from '../components/ShowTask';
import CreateTask from '../components/CreateTask';
import CalendarTask from '../components/CalendarTask'
import TaskApp from '../components/TaskApp';

function AppRouter() {
  return (
    <div>
      <TaskProvider>
        <Router>
          <Routes>
            <Route path='/' element={<CreateTask />} />
            <Route path='/2' element={<TaskApp />} />
            <Route path='/tasks' element={<ShowTask />} />
            <Route path='/calendar' element={<CalendarTask />} />
          </Routes>
        </Router>
      </TaskProvider>
    </div>
  );
}

export default AppRouter;