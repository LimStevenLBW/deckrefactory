import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import navbarIcon from '../images/navbar.png'
import './Navbar.scss'

const Navbar = ({ user }) => {
    return (
        <nav className = "navbar-bg navbar navbar-expand-lg navbar-light">

            <Link
                className="navbar-brand pl-4"
                to="/">
                DeckRefactory
            </Link>

            <img className = "navbarIcon" src = {navbarIcon} alt = "">
            </img>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse pr-4" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto"> {/*Set ml-auto to right align*/}
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/">
                            Home 
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/builder">
                            Deckbuilder <span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    

                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/decks">
                            My Decks
                        </NavLink>
                    </li>

                    {user ? 
                    (<React.Fragment>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/logout">
                                Sign Out
                            </NavLink>
                        </li> 
                    </React.Fragment>)
                    : 
                    (<React.Fragment>
                     <li className="nav-item">
                         <NavLink className="nav-link" to="/register">
                             Register
                         </NavLink>
                     </li>

                     <li className="nav-item">
                         <NavLink className="nav-link" to="/login">
                             Login
                         </NavLink>
                     </li> 
                    </React.Fragment>)
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
