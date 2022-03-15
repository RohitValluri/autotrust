import React from "react";
import {BiLock} from 'react-icons/bi';
import '../styles/header.css';
import Logo from '../assets/DesignImages/ATFullIcon2.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col-3">
                   <Link to ="/"> <img className="logo" src={Logo} height="40"></img></Link>
                </div>
                <div id="middle" class ="col-7">
                <Link to="/components/Pland" class="button buttons">PERSONAL</Link>
                <Link to="/components/Cland" class="button buttons">CORPORATE</Link>
                <button class="button buttons">GOVERNMENT</button>
                <button class="button buttons">CONTACT US</button>
                </div>
                <div id="dd" class ="col-2">
                    <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn"><BiLock/> SECURE SIGN IN</a>
                    <div class="dropdown-content">
                   
                    <a href="/components/Psignin">Personal</a>
                    <a href="/components/Csignin">Corporate</a>
                    <a href="#">Government</a>
                    </div>
                    </li>
                </div>
            </div>
        </div>
    )
}