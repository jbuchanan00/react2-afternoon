import React, {Component} from "react"

export default class Contacts extends Component{
    
    render(){
        return(
            <div className="name">
            <h1>{this.props.page}/25</h1>
            <h2>Name: {this.props.name}</h2>
            

            </div>
        )
    }
}