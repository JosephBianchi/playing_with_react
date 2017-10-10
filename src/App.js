
// bring in React and Component from React
import React, {Component} from 'react';

// define out Hello Component
class Hello extends Component {
  // what should the compnent render?
  render () {

    // make sure to return some UI
    return (
      <div>
        <h1>Joes first React App!</h1>
        <p>Thanks for stopping by {this.props.name} :)</p>
        <p>You are {this.props.age} yeard old.</p>
        <p>My current favorite languages are: {this.props.languages[0]}</p>
      </div>
    )
  }
}


export default Hello
