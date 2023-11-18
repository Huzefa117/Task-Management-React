import { Link } from 'react-router-dom';
import AddTaskButton from './AddTaskButton';
import './tasklist.css'
import Logout from '../Logout';

export default function TaskList(){
    const tasks = JSON.parse(localStorage.getItem("taskList"));
    console.log(tasks);
    return (
        <>
        <div><Logout /></div>
        <header> 
            <Link to="/taskform"><AddTaskButton /></Link></header>
        <ul className="Tasks">
            {tasks.map((task) => (
                <li >
                 <p key={task.id} className="task-title">{task.title}</p>   
                 <p key = {task.id} className="task-description">{task.description}</p>
                 <input type="checkbox" name="completed" value={task.status} key = {task.id} className={task.status}/>
                 </li>
            ))}
        </ul>
        </>
    )
}