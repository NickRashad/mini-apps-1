import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorChoice: true
    };
    this.toggleColor = this.toggleColor.bind(this);
  }
  toggleColor () {
    let choice = !this.state.colorChoice;
    console.log(choice);
    this.setState({colorChoice: choice});
  }

  toggle (row, column) {

  }

  render () {
    return (
      <div className="wrapper">
        <Square x={0} y={5} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={1} y={5} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={2} y={5} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={3} y={5} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={4} y={5} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={5} y={5} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={6} y={5} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={0} y={4} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={1} y={4} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={2} y={4} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={3} y={4} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={4} y={4} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={5} y={4} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={6} y={4} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={0} y={3} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={1} y={3} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={2} y={3} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={3} y={3} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={4} y={3} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={5} y={3} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={6} y={3} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={0} y={2} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={1} y={2} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={2} y={2} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={3} y={2} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={4} y={2} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={5} y={2} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={6} y={2} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={0} y={1} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={1} y={1} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={2} y={1} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={3} y={1} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={4} y={1} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={5} y={1} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={6} y={1} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={0} y={0} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={1} y={0} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={2} y={0} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={3} y={0} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={4} y={0} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={5} y={0} color={this.state.colorChoice} toggleColor={this.toggleColor} />
        <Square x={6} y={0} color={this.state.colorChoice} toggleColor={this.toggleColor} />
      </div>
    );
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white"
    };
    this.column = this.column.bind(this);
  }
  column (event){
    console.log('Column Choice:', event.target.name);
    let nowColor = this.props.color === true ? "red" : "yellow";
    this.props.toggleColor();
    this.setState({ color: nowColor });
  }
  render () {
    const WIDTH = [100,200,300,400,500,600,700][this.props.x];
    const HEIGHT = [600,500,400,300,200,100][this.props.y];
    return(
      <span className="row" data-x={`"${WIDTH}"`} data-y={`"${HEIGHT}"`}>
        <svg height="100" width="100">
          <circle cx="40" cy="40" r="40" stroke="black" fill={`${this.state.color}`} name={`"${this.props.x}"`} onClick={this.column}/>
        </svg>
      </span>
    )
  }
}


ReactDOM.render( <App /> , document.getElementById('root') );