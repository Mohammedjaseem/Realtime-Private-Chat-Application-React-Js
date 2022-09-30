import React from "react";
import Addavathar from "../img/imgadd.png"

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        
        <form>
        <span className="logo">Jassy Chat</span>
        <span className="title">Login Now</span>
            <input className="form-inputs" type="text" placeholder="Username" />
            <input className="form-inputs" type="password" placeholder="Password" />
            <button className="btn">Login</button>
        </form>
        <p>You don't have an account? <a href="/signup">Register Now</a></p>
      </div>
    </div>
  );
};

export default Login;
