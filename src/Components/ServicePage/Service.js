import React,{useState} from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from "../Navbar/Navbar";
import './service.css';
const Service =()=>{


    const navigate = useNavigate()

  const [user, setUser] = useState({
    name: "", mobileno: "", email: "", password: "", cpassword: ""
  })

  const usersignup = async (e) => {
    e.preventDefault();
    if (user.password === user.cpassword) {
      const data = await axios.post('/signup', {
        name: user.name,
        mobileno: user.mobileno,
        email: user.email,
        password: user.password,
      })

      if (data.status === 200) {
        alert(data.data.message);
        navigate('/login')
      } else {
        alert(data.data.message);
      }
    }
    else{
      alert("Password Not Matching");
    }

  }


  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
    e.preventDefault();
  }
    return(
        <>
      <Navbar style="background-color:#1a4664;">
      </Navbar>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="center">
        <h1>Request for Harvesting</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required name='name' value={user.name} onChange={handleInput}/>

            <label></label>
          </div>
          <div className="txt_field">
            <input type="text" required name='email' value={user.email} onChange={handleInput}/>

            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="text" required name='mobileno' value={user.mobileno} onChange={handleInput}/>

            <label>Phone no.</label>
          </div>
          <div className="txt_field">
            <input type="text" required name='password' value={user.password} onChange={handleInput} />

            <label>Password</label>
          </div>
          <div className="txt_field">
            <input type="password" required name='cpassword' value={user.cpassword} onChange={handleInput} />

            <label>Confirm Password</label>
          </div>
          <input type="submit" value="Create account" className="Create" onClick={usersignup} />
          <div className="login_link">
            already have account? <a href="Login">Login</a>
          </div>
        </form>
      </div>

        </>
    )
}
export default Service