// import React, { useState, useEffect } from 'react';
// import './styles/Signup.css';
// import { Link } from 'react-router-dom';
import React from 'react';
import car from "../assets/DesignImages/car-g2d7b1eca2_1280.png"
import Header from '../components/header';
import Contact from '../components/Navigation/Footer';
import {BiLock} from 'react-icons/bi';
    const handleSubmit = (e) =>{
        e.preventDefault();
};
class CorpSignin extends React.Component{
    render(){
        return(
            <div className='div-login'>
                <Header/>
                <div id="logo">
                    <div className="row">
                    <div id="k" className="col-4">
                    <h3>Corporate Sign In</h3>
                    <div id="bd">
                    <form
                    id="main-login"
                    onSubmit={handleSubmit}>
                    <label>COMPANY CODE</label>
                    <input onChange={this.handleChange} type="text" id="ipb" name="companycode" placeholder="Enter your Company code" required/><br/>
                    <label>USER ID</label>
                    <input onChange={this.handleChange} type="text" id="ipb" name="userId" placeholder="Enter your user Id" required/><br/>
                    <label>PASSWORD</label>
                    <input onChange={this.handleChange} type="password" id="ipb" name="Password" placeholder="Enter Password" required/><br/>
                    <label id ="para">Forgot Password?</label><br/><br/>
                    <label id='para'>
                    <input type="checkbox" onChange={this.handleChange}/>
                    {' '}Remember me on this browser</label>
                    <button type="submit" onClick={handleSubmit}id="bt" name="sgup"><BiLock/>{' '}Secure Sign In</button>
                    </form>
                </div>
                </div>
                <div className="col-7">
                            <img id="cp" src={car} alt="car" width="500" height="250"/>
                            <div className="cartxt">
                            <h2>Kenyc. Ukanyds. Qjneduc</h2><br/>
                                <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                                <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                            </div>
                        </div>
                </div>
                </div>
                <Contact/>
                </div>
        )
    }
}
export default CorpSignin;









