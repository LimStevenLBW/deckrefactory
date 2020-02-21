import React from 'react';
import './Home.scss';
import jumbotronImage from '../../images/jumbotron.jpg';
import jumbotronButton from '../../images/navbar.png';
import {backend, mtgIO, env} from '../../config';

const Home = (props) => {
    /*console.log(process.env)
    console.log("backend", backend);
    console.log("mtgio", mtgIO)
    console.log("env", env);*/
    return (  
        <div className="home-bg-container">
            <img className = "home-bg" src = {jumbotronImage}></img>
            <div className ="jumbotron jumbotron-fluid pt-3 pb-2">
                
                <div className ="container">
                    <div className = "row">
                        <div className = "col-8 pl-5">
                            <h1 className = "display-4">Welcome to <br />DeckRefactory</h1>
                            <p className = "lead">Create, modify, and tune your Magic the Gathering decks. Find your next idea here!</p>
                            <p className = "lead-subtext">Click our logo on the right to get started~</p>
                        </div>
                        <div className = "col-4">
                            <div 
                                onClick = {() => props.history.push('/builder')}
                                className = "jumbotron-button-border">
                               <img className = "jumbotron-button" src = {jumbotronButton}></img>
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
            
            <footer className = "footer-copyright">
                <div className = "footer-copyright-text"> 
                    "This is an unofficial fansite. Materials used are property of ©Wizards of the Coast LLC.”
                </div>
            </footer>

        </div>
        
    );
}
 
export default Home;
