import { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import "./login.css";

function LoginPage(){
  let navigate = useNavigate();
  const[loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) =>{
   e.preventDefault();
   const response = await fetch('http://localhost:8083/user/authUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData)
   });

   if(response.ok){
    const jso = await response.json();
    console.log(jso);
   navigate("/taskForm");
   }else{
    const jso = await response.json();
    console.log(jso);
   }
    
  }

  
  return (
    <>
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form
          className="login-form"
          onSubmit={handleSubmit}
        >
          <label className="login-form form-field label ">
            Enter Email:
            <input
              className="login-form form-field input "
              type="text"
              name="email"
              value={loginData.email}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <label className="login-form form-field label ">
            Enter Password:
            <input
              className="login-form form-field input "
              type="password"
              name="password"
              value={loginData.password}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <input className="login-form submit-button" type="submit" />
          
          <h1>New user?</h1>
          <div>
            <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </>
  );

}

export default LoginPage;
