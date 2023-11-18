import { useState } from "react";
import { Link } from "react-router-dom";
import User from "../user/User";
import "./taskform.css";
import Logout from "../Logout";

export default function TaskForm() {
  const [taskFormData, setTaskFormData] = useState({
    title : "",
    description: "",
    dayTime: "",
    completed: false
  })
 
 const handleInputChange = (e) => {
   setTaskFormData({
    ...taskFormData,
    [e.target.name] : e.target.value
   })
 }

 const handleSubmit = async (e) => {
   e.preventDefault();
   const bodyData = {
    ...taskFormData,
    "accountId": localStorage.getItem("id")
   }

   try{
    fetch('http://localhost:8083/saveTask',{
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData)
    })
     .then(response => response.json())
     .then(data => {
      console.log(data.taskList);
      if(data.status){
        localStorage.setItem("taskList", JSON.stringify(data.taskList));
      }
     })
     .catch( error => {
      console.error('Error: ', error);
     })
    
   }catch(error){
    console.log(error);
   }
 }

  return (
    <>
    <User />
    <Logout />
    <div className="container">
      <header className="header">Task Form</header>
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-control">
        <label>Title</label>
        <input 
         type='text'
         placeholder='Add Task'
         name = 'title'
         value={taskFormData.title}
         onChange={(e) => handleInputChange(e)}/>
      </div>

      <div className="form-control">
        <label>Description</label>
        <textarea 
        type = 'text' 
        placeholder="Add Description"
        name = "description"
        value={taskFormData.description}
         onChange={(e) => handleInputChange(e)}/>
      </div>

      <div className="form-control" >
        <label>Day & Time</label>
        <input 
        type='text' 
        placeholder="Add Day & Time" 
        name = "dayTime"
        value={taskFormData.dayTime}
         onChange={(e) => handleInputChange(e)}/>
      </div>

      <div>
        <input
        type="checkbox" 
        name="completed"
        value={taskFormData.completed}
         onChange={(e) => handleInputChange(e)}/>
         <label>Completed</label>
      </div>
      
      <input type = 'submit' value = 'Save Task' className='btn btn-block'/>
      <div>
            <Link to="/taskLists">Get Tasks</Link>
          </div>
      

    </form>
    </div>
    </>
  );
}
