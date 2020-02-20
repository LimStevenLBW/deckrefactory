import React, { Component } from 'react';
import SummaryCard from './SummaryCard';

class MyDecks extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <div className = "alert alert-warning" role="alert">
                    The current feature is still under construction
                </div>

                <div className = "container">
                    <div className = "col-5">
                        <SummaryCard />
                    </div>

                    <div className = "col-7">
                        
                    </div>

                </div>
            </React.Fragment>
        );
    }
}
 
export default MyDecks;
