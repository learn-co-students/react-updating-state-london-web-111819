// Code ClickityClick Component Here
import React, { Component } from 'react';

export default class ClickityClick extends Component{
    constructor(){
        super();

        this.state = {
            toogled: false
        };
    }

        handleClick = () => {
            this.setState(previousState => {
                return{
                    toogled: !previousState.toogled
                }
            }, () => console.log(this.state.toogled)
               
            )
        }

        render(){
            return(
                <div>
                    <button onClick={this.handleClick}>{this.state.toogled ? 'ON' : 'OFF'} </button>
                </div>
            )
        }
}
