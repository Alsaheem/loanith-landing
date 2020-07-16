import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Layout.css'

export default function Layout(props:any) {
    return (
        <div>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    )
}
