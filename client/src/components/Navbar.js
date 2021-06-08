import React from 'react'
import Home from './Home';
import Certificates from './Certificates';
import About from './About';
import Contact from './Contact';

import {
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <ul style={{ display: 'grid', gridTemplateColumns: '100px 100px 100px 100px', padding: '10px' }} >
                <div>
                    <Link to='/' >Home</Link>
                </div>
                <div>
                    <Link to='/certificates' >Certificates</Link>
                </div>
                <div>
                    <Link to='/about' >About</Link>
                </div>
                <div>
                    <Link to='/contact' >Contact</Link>
                </div>
            </ul>

            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/certificates'>
                    <Certificates/>
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/contact'>
                    <Contact/>
                </Route>
            </Switch>
        </>
    )
}
