import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  render() {
    return (
      <div className="testingpurposes">
        <h2>To Infinity!!</h2>
      </div>
    )
  }
}

ReactDOM.render( < Test />, document.getElementById('root'));