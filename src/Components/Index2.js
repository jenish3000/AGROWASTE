import React from 'react'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Login from './LoginPage/Login';
import SignUp from './SignupPage/SignUp';
import Home from './HomePage/Home';
import Forget from './LoginPage/Forget';
const Index2 = () => {
  return (
    <>
    <Router>
       <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Forget' element={<Forget/>}/>
       </Routes>

    </Router>
    </>
  )
}

export default Index2