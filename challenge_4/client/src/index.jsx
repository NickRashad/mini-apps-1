import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render () {
    return (
      <h1>Testing, testing 1,2,3...</h1>
    )
  }
}

ReactDOM.render( <App /> , document.getElementById('root') );