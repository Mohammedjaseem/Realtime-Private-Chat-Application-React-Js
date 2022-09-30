import React from "react";
import Addavathar from "../img/imgadd.png"

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        
        <form>
        <span className="logo">Jassy Chat</span>
        <span className="title">Register Now</span>
            <input className="form-inputs" type="text" placeholder="Username" />
            <input className="form-inputs" type="email" placeholder="Email" />
            <input className="form-inputs" type="password" placeholder="Password" />
            <input style={{display:"none"}} type="file" id="file" />
            <label htmlFor="file">
                <img src={Addavathar} alt="upload" />
                <span> Add an avathar</span>
            </label>
            <button className="btn">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Register;
