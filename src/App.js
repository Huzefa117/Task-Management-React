import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './login/Login'
import SignUpPage from './signup/Signup';
import TaskForm from './task/Taskform';
import TaskList from './task/TaskList';


function App() {
  return (
    <div className="Task-App">
      <header className="Task-App-header">
        
        <Routes>
        <Route path='/' element = {<LoginPage />}/>
          <Route path='/signup' element = {<SignUpPage/>} />
          <Route path='/taskForm' element = {<TaskForm />} />
          <Route path='/taskLists' element = {<TaskList />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
