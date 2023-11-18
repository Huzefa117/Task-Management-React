import "./user.css";

import { useSelector } from "react-redux";

export default function User(){
    const user = useSelector((state) => state.user.value);
    const userName = user.name;
    console.log(userName);
  return(
    <div>
        <p>{userName}</p>
    </div>
  )
}