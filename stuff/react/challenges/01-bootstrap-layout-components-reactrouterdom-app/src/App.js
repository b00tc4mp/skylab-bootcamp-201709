import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

class App extends Component {
    render() {
        return <BrowserRouter>
            <div className="container">
                <NavBar/>
                <Route exact path="/" component={Jumbotron}/>
                <Route exact path="/" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/contact" component={ContactPage}/>
            </div>
        </BrowserRouter>
    }
}

export default App