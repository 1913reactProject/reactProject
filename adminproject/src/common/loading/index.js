import React, { Component } from "react"
import './loading.css'

export default class Loading extends Component {
    render(){
        return (
            <div className="loadingBox">
                <div className="loading">
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <div className="box4"></div>
                </div>
            </div>
            
        )
        
    }
    
}