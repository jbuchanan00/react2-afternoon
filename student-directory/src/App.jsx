import React, { Component } from 'react';
import data from "./react-i-ii-afternoon/data"
import Contacts from "./contacts"

class App extends Component {
  constructor(){
  super()
  this.state= {
    name: "",
    from: "",
    jobTitle: "",
    employer: "",
    favoriteMovies: "",
    page: 1
  }

  this.addPage = this.addPage.bind(this)
  this.decreasePage = this.decreasePage.bind(this)
}

  addPage = () => {
    this.setState({
      page: this.state.page + 1
})}
  decreasePage = () => {
    this.setState({
      page: this.state.page - 1
    })
  }






  render() {
    return (
      <div className="App">
      
        <Contacts />
        <button onClick={this.decreasePage} disabled={this.state.page < 2}>{"<Previous"}</button>
        <button onClick={this.addPage} disabled={this.state.page > 24}>Next></button>
      </div>
    );
  }
}


export default App;
