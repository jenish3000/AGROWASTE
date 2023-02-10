import React from 'react'
// import Login from '../LoginPage/Login'
import Contact from './ContactUsPage/Contact'
import Aboutus from './AboutUs/Aboutus'
import './HomeStyle.css'
const Home = () => {
    return (
        <>
            
            <div className='main'>
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <img src="../images/v914-ning-21a.jpg" className="company-logo" alt="" />
                        <strong className="Companyname">
                            AgroWaste
                        </strong>
                    </div>
                    <div className="navbar-right">
                        <div className="navbar-options">
                            <span className="navbar-options-btn">
                                <a href="#">Home</a>
                            </span>
                            <span className="navbar-options-btn">
                                <a href="#about">About</a>
                            </span>
                            <span className="navbar-options-btn">
                                <a href="#">Survey</a>
                            </span>
                            <span className="navbar-options-btn">
                                <a href="#contact">Contact</a>
                            </span>
                        </div>
                        <div className="signin btn" id="log-btn">

                            <button role="button" className="button-name">
                                <a href="/Login" className="call">REGISTER/SIGN IN</a> </button>
                        </div>
                    </div>
                </div> *
                

                <div className="bodymain">
                    
                    <div className="main-image">
                        <img src="../images/agricultural-waste.jpg" className="Main-img" alt="" />
                    </div>
                    <div className="space"></div>
                    <div className="datacontainer">
                        <div className="text-container">
                            <h3 className="text-head">Pollution</h3>
                            <p className="text-contant">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quasi adipisci laborum harum, ducimus neque? Vel nostrum rem rerum quis voluptatibus, provident alias, fuga velit quasi illum deserunt quidem explicabo adipisci, similique eveniet facilis iste nam molestias incidunt. Cupiditate magni nulla, temporibus perspiciatis quam maiores. Quisquam ab eum inventore quaerat.</p>
                        </div>
                        <div className="image-contianer">
                            <img src="../images/parali.jpg" className="image1" alt="" />
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="datacontainer">
                        <div className="image-contianer">
                            <img src="../images/sugar.jpg" className="image2" alt="" />
                        </div>
                        <div className="text-container">
                            <h3 className="text-head">Residue</h3>
                            <p className="text-contant">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quasi adipisci laborum harum, ducimus neque? Vel nostrum rem rerum quis voluptatibus, provident alias, fuga velit quasi illum deserunt quidem explicabo adipisci, similique eveniet facilis iste nam molestias incidunt. Cupiditate magni nulla, temporibus perspiciatis quam maiores. Quisquam ab eum inventore quaerat.</p>
                        </div>

                    </div>
                    <div className="space"></div>
                    <div className="datacontainer">
                        <div className="text-container">
                            <h3 className="text-head">side-effects</h3>
                            <p className="text-contant">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quasi adipisci laborum harum, ducimus neque? Vel nostrum rem rerum quis voluptatibus, provident alias, fuga velit quasi illum deserunt quidem explicabo adipisci, similique eveniet facilis iste nam molestias incidunt. Cupiditate magni nulla, temporibus perspiciatis quam maiores. Quisquam ab eum inventore quaerat.</p>
                        </div>
                        <div className="image-contianer">
                            <img src="../images/side-effects.jpg" className="image3" alt="" />
                        </div>
                    </div>
                </div>

                <div className="space"></div>
 
                {/* Contact us page */}
                 <div id="contact"> <Contact /></div>


                
                 <div className="space"></div>


                {/* AboutUs Page */}
                <div id="about"> <Aboutus /></div>

            </div>


        </>
    )
}

export default Home