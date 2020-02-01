import React, { Component } from 'react'
import { Link} from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <Link className="navbar-brand" to="/">Contact Info</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            
                            <ul className="nav navbar-nav navbar-right">
                                
                                <li><Link to="/addContact"><span className="glyphicon glyphicon-plus" /> Add new Contact</Link></li>
                                <li><Link to="/"><span className="glyphicon glyphicon-list" /> Contact List</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
