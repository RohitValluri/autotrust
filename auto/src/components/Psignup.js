import React from 'react';
import "../styles/psignup.css";
// import { Link } from 'react-router-dom';
import Header from './header';
import car  from "../assets/DesignImages/car-g2d7b1eca2_1280.png"
import Contact from './Navigation/Footer';
class Signup extends React.Component {
    state = {
        emailId: '',
        userName: '',
        password: '',
    }
    SignupDetails = {
        "emailId": "",
        "username": "",
        "password": "" ,
      }
    handleChange = (e) =>{
        const {name,value,checked,setChecked} = e.target
        this.setState({[name]:value})
        setChecked(!checked);
        console.log(this.state.emailId);
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.username);
        this.SignupDetails.emailId = this.state.emailId;
        this.SignupDetails.userame = this.state.userName;
        this.SignupDetails.password = this.state.password;
    }
    render() {
        return (
            <div className='div-login'>
               <Header/>
                <div id="logo">
                    <div className="row">
                    <div id="k" className="col-4">
                    <h3>Sign Up</h3>
                        <div id="bd">
                        <form
                    id="main-login"
                    action={this.props.action}
                    method={this.props.method}
                    onSubmit={this.handleSubmit}>
                        <div className='col' id ="spip">
                                <label>FIRST NAME</label>
                                <input onChange={this.handleChange} type="text" id="ipb" name="userName" placeholder="Enter your first name" required /><br />
                                </div>
                                <div className='col' id ="spip">
                                <label>LAST NAME</label>
                                <input onChange={this.handleChange} type="text" id="ipb" name="userName" placeholder="Enter your last name" required /><br />
                                </div>
                                <label>EMAIL ADDRESS</label>
                                <input onChange={this.handleChange} type="email" id="ipb" name="emailId" placeholder="Enter your email Id" required /><br />
                                <label>PASSWORD</label>
                                <input onChange={this.handleChange} type="password" id="ipb" name="password" placeholder="Choose a strong password" required minLength="8" /><br />
                                <label id='agree'>
                                <input  type="checkbox" onChange={this.handleChange}/>
                                {' '}I agree to the Terms and Privacy Policy
                                </label>
                                <button type="submit" onSubmit={this.handleSubmit} id="bt" name="sgup">CREATE MY ACCOUNT</button>
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
export default Signup;






