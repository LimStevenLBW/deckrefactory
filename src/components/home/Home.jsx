import React from 'react';
import './Home.scss';
import jumbotronImage from '../../images/jumbotron.jpg';
import jumbotronButton from '../../images/navbar.png';
//import {backend, mtgIO, env} from '../../config';

const Home = (props) => {
    /*console.log(process.env)
    console.log("backend", backend);
    console.log("mtgio", mtgIO)
    console.log("env", env);*/

    return (  
    <React.Fragment>
        <div id = "home-color" className = "jumbotron jumbotron-fluid m-0">
            <div className = "container pl-5 pr-5">
            <div className = "row">
                <div className = "col-8">
                    <h1 className = "welcome-heading">Welcome to <br />DeckRefactory</h1>
                    <p className = "welcome-descript">Discover, Create, Store, and Fine-Tune your Magic the Gathering decks with our selection of tools. Come find your next idea here!</p>
                    <p className = "welcome-descript subtext">Click our logo on the right to get started</p>
                </div>

                <div className = "col-4">
                    <div 
                        onClick = {() => props.history.push('/builder')}
                        className = "jumbotron-button-container">
                        <img className = "jumbotron-button" src = {jumbotronButton} alt ="error"></img>
                    </div>      
                </div>
            </div>
        </div>
        </div>
        <div className = "row m-0 w-100">
                <div className = "home-bg-container">
                    <img className = "home-bg" src = {jumbotronImage} alt ="error"></img>
                </div>
        </div>

        <footer className = "footer-copyright">
            <div className = "footer-copyright-text"> 
                "This is an unofficial fansite. Materials used are property of ©Wizards of the Coast LLC.”
            </div>
        </footer>

    </React.Fragment>
    );
}
 
export default Home;
