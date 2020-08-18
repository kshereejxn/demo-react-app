import React, { Component } from 'react';



class NotFound extends Component {
    constructor (props) {
        super(props);
    }

    render(){
        return(
            <div className="NotFound">
                <h1>Opps: This page doesn't exist! 
                </h1>
            </div>
        )
    }

}


export default NotFound;