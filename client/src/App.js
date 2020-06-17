import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './page/LandingPage';
import About from './page/About';
const App = () =>{
    return(
        <Router>
            <Route path="/" exact>
                <LandingPage/>
            </Route>
            <Route path="/Jadwal/:id">
                <LandingPage/>
            </Route>
            <Route path="/About">
                <About/>
            </Route>
        </Router>
    )
}
export default App;