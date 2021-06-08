import React from 'react'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'

import {BrowserRouter as Router} from 'react-router-dom'

export default function App() {
    return (
        <>
            <Router>
                <Navbar/>
            </Router>
            
            <Footer/>
        </>
    )
}
