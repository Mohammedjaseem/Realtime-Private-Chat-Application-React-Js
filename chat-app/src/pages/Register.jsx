import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import Addavathar from "../img/imgadd.png"
import { auth} from "../firebase";


const Register = () => {

  const [err, setErr] = React.useState(false); 
  const handleSubmit = (e) => {
    const handleSubmit = async (e) => {

    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res= createUserWithEmailAndPassword(auth, email, password);
      
    }
    catch(err){
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        
        <form onSubmit={handleSubmit}>
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
            {err & <span className="error">Something went wrong!</span>}
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};
}

export default Register;
