import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import "./signup.css";
import { login } from "../features/UserStore";
import { useDispatch } from "react-redux";

 function SignUpPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
 const [signUpData, setSignUpData] = useState({
  name: '',
  email: '',
  password:''
 })


 const handleInputChange = (event) => {
  setSignUpData({
    ...signUpData,
    [event.target.name]: event.target.value,
  });
};

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:8083/user/signupUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpData),
    });
    if (response.ok) {
      const responsejson = await response.json();
      console.log(responsejson);
      console.log(JSON.stringify(responsejson));
      dispatch(login({id: responsejson.id, name: responsejson.name}))
      navigate("/taskForm");
      console.log('Data submitted successfully');
      // Handle success response
    } else {
      console.error('Error submitting data:', response.statusText);
      // Handle error response
    }
  } catch (error) {
    console.error('Error submitting data:', error);
  }
};


  return (
    <>
      <div className="signup-container">
        <h1 className="signup-title">Sign Up</h1>
        <form
          className="signup-form"
          onSubmit={handleSubmit}
        >
          <label className="signup-form form-field label ">
            Enter Name:
            <input
              className="signup-form form-field input "
              type="text"
              name="name"
              value={signUpData.name}
              onChange={handleInputChange}
            />
          </label>
          <label className="signup-form form-field label ">
            Enter Email:
            <input
              className="signup-form form-field input "
              type="text"
              name="email"
              value={signUpData.email}
              onChange={handleInputChange}
            />
          </label>
          <label className="signup-form form-field label ">
            Enter Password:
            <input
              className="signup-form form-field input "
              type="password"
              name="password"
              value={signUpData.password}
              onChange={handleInputChange}
            />
          </label>
          <input className="signup-form submit-button" type="submit" />
        </form>
      </div>
    </>
  );
}



export default SignUpPage;
