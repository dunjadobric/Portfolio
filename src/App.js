import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Competences from "./Competences";
import Contact from "./Contact";

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <div className="header">
                        <ul className="headerList">
                            <Link to="/" className="headerItem">About</Link> 
                            <Link to="/projects" className="headerItem">Projects</Link>  
                            <Link to="/competences" className="headerItem">Competences</Link>    
                            <Link to="/contact" className="headerItem">Contact</Link>
                        </ul>             
                    </div>

                    <div className="content">
                        <Route path="/" exact component={About}/>
                        <Route path="/projects" exact component={Projects}/>
                        <Route path="/competences" exact component={Competences}/>
                        <Route path="/contact" exact component={Contact}/>
                    </div>
                </Router>
            </div>
        )
    }
}