import React, {useState}  from "react";
import { Link } from "react-router-dom";

const Home = () => {
  
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const [flag, setFlag] = useState(true)
  
  
  return (
    <div className="wrapper">
      {
        
    <div style={{ marginTop: "100px" }} id="info">
      {isLoginTrue && isLoginTrue.userLogin ? (
        
        <Link to = '/Employee'>
        <button onClick= {() => setFlag(false)} >Please Click Here for Employee Details</button>
        </Link>
      ) : (
        <></>
      )}
     
    </div>
        
    }
    </div>
  );
};

export default Home;