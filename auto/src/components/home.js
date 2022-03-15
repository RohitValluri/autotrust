import React from 'react';
import '../styles/home.css';
import Header from '../components/header'
import Imgslider from '../components/poster'
import Section from '../components/section';
import Contact from '../components/Navigation/Footer';
export default function Home(){
    return(
        <div>
            <Header/>
            <Imgslider/>
            <Section/>
            <Contact/>
        </div>
    )
}