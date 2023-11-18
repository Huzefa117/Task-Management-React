import { useNavigate  } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();
    
    const clearLocalStorage = () => {
      localStorage.clear();
      navigate("/");
    };
  
    return (
      <div>
        <button onClick={clearLocalStorage}>Logout</button>
      </div>
    );
}