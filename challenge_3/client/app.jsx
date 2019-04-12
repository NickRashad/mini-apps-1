
class App extends React.Component {
  render() {
    return (
      <div className="testingpurposes">
        <h2>Multistep Checkout Experience</h2>
        < Button text="Checkout" />
        <F1 />
      </div>
    )
  }
}

const Button = (props) => {
  const buttonClick = ()  => {
    axios.post('/', {}).then((response) =>  {
      console.log(response);
    });
  };
    return (
      <button className="btn" type="button" onClick={buttonClick}>{props.text}</button>
    )
};

// Name, Email, Password
class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wholeName: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:
          <input type="text" name="wholeName" value={this.state.wholeName} onChange={this.handleChange} />
        </label>
        <label>Email:
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>Password:
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <Button text="Next" />
      </form>
    )
  }
}

ReactDOM.render( < App />, document.getElementById('root'));