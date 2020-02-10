import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className = "navbar-bg navbar navbar-expand-lg navbar-light">
            <Link
                className="navbar-brand"
                to="/">
                DeckRefactory
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
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

                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/register">
                            Register
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/login">
                            Login
                        </NavLink>
                    </li>


                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
