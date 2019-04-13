
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indicator: 0,
    };
    this.nextForm = this.nextForm.bind(this);
    this.postData = this.postData.bind(this);
  }

  postData () {
    const data = { one: this.state, two: F1.state};
    axios.post('/', data ).then((response) => {
      console.log(response);
    });
  }

  nextForm() {
    this.setState({
      indicator: this.state.indicator + 1,
    });
  }

  render() {
    var activeComponent = < Button text="Checkout" buttonClick={this.nextForm} />;
    if (this.state.indicator === 1) {
      activeComponent = <F1 buttonClick={this.nextForm} />;
    } else if (this.state.indicator === 2) {
      activeComponent = <F2 buttonClick={this.nextForm} />;
    } else if (this.state.indicator === 3) {
      activeComponent = <F3 buttonClick={this.postData} />;
    }
    return (
      <div className="testingpurposes">
        <h2>Multistep Checkout Experience</h2>
        {activeComponent}
      </div>
    )
  }
}

const Button = (props) => (
  <button className="btn" type="button" onClick={props.buttonClick}>{props.text}</button>
);

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
        <Button text="Next" buttonClick={this.props.buttonClick}/>
      </form>
    )
  }
}

class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNum: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Address 1:
          <input type="text" name="address1" value={this.state.address1} onChange={this.handleChange} />
        </label>
        <label>Address 2:
          <input type="text" name="address2" value={this.state.address2} onChange={this.handleChange} />
        </label>
        <label>City:
          <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
        </label>
        <label>State:
          <input type="text" name="state" value={this.state.state} onChange={this.handleChange} />
        </label>
        <label>Zip Code:
          <input type="text" name="zipCode" value={this.state.zipCode} onChange={this.handleChange} />
        </label>
        <label>Phone Number:
          <input type="text" name="phoneNum" value={this.state.phoneNum} onChange={this.handleChange} />
        </label>
        <Button text="Next" buttonClick={this.props.buttonClick} />
      </form>
    )
  }
}

class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCardNum: '',
      expiryDate: '',
      cvv: '',
      billingZip: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Credit Card #:
          <input type="text" name="creditCardNum" value={this.state.creditCardNum} onChange={this.handleChange} />
        </label>
        <label>Expiry Date:
          <input type="text" name="expiryDate" value={this.state.expiryDate} onChange={this.handleChange} />
        </label>
        <label>CVV #:
          <input type="text" name="cvv" value={this.state.cvv} onChange={this.handleChange} />
        </label>
        <label>Billing Zip Code:
          <input type="text" name="billingZip" value={this.state.billingZip} onChange={this.handleChange} />
        </label>
        <Button text="Purchase" buttonClick={this.props.buttonClick}/>
      </form>
    )
  }
}

ReactDOM.render( < App />, document.getElementById('root'));