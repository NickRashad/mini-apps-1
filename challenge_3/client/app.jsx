
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indicator: 0,
      wholeName: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNum: '',
      creditCardNum: '',
      expiryDate: '',
      cvv: '',
      billingZip: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.nextForm = this.nextForm.bind(this);
    this.postData = this.postData.bind(this);
  }

  postData () {
    const data =  { checkOutData: this.state };
    axios.post('/', data ).then((response) => {
      console.log(response);
    });
  }

  nextForm() {
    this.setState({
      indicator: this.state.indicator + 1,
    });
  }

  handleChange(event) {
    console.log(event.target);
    const name = event.target.name;
    this.setState({ [name]: event.target.value});
  }

  render() {
    var activeComponent = < Button text="Checkout" buttonClick={this.nextForm} />;
    if (this.state.indicator === 1) {
      activeComponent = <F1 data={this.state} buttonClick={this.nextForm} handleChange={this.handleChange} />;
    } else if (this.state.indicator === 2) {
      activeComponent = <F2 data={this.state} buttonClick={this.nextForm} handleChange={this.handleChange} />;
    } else if (this.state.indicator === 3) {
      activeComponent = <F3 data={this.state} buttonClick={this.postData} handleChange={this.handleChange} />;
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    var f1 = this.props.data;
    var handleChange = this.props.handleChange;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:
          <input type="text" name="wholeName" value={f1.wholeName} onChange={handleChange} />
        </label>
        <label>Email:
          <input type="text" name="email" value={f1.email} onChange={handleChange} />
        </label>
        <label>Password:
          <input type="text" name="password" value={f1.password} onChange={handleChange} />
        </label>
        <Button text="Next" buttonClick={this.props.buttonClick}/>
      </form>
    )
  }
}

class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    var f2 = this.props.data;
    var handleChange = this.props.handleChange;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Address 1:
          <input type="text" name="address1" value={f2.address1} onChange={handleChange} />
        </label>
        <label>Address 2:
          <input type="text" name="address2" value={f2.address2} onChange={handleChange} />
        </label>
        <label>City:
          <input type="text" name="city" value={f2.city} onChange={handleChange} />
        </label>
        <label>State:
          <input type="text" name="state" value={f2.state} onChange={handleChange} />
        </label>
        <label>Zip Code:
          <input type="text" name="zipCode" value={f2.zipCode} onChange={handleChange} />
        </label>
        <label>Phone Number:
          <input type="text" name="phoneNum" value={f2.phoneNum} onChange={handleChange} />
        </label>
        <Button text="Next" buttonClick={this.props.buttonClick} />
      </form>
    )
  }
}

class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    var f3 = this.props.data;
    var handleChange = this.props.handleChange;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Credit Card #:
          <input type="text" name="creditCardNum" value={f3.creditCardNum} onChange={handleChange} />
        </label>
        <label>Expiry Date:
          <input type="text" name="expiryDate" value={f3.expiryDate} onChange={handleChange} />
        </label>
        <label>CVV #:
          <input type="text" name="cvv" value={f3.cvv} onChange={handleChange} />
        </label>
        <label>Billing Zip Code:
          <input type="text" name="billingZip" value={f3.billingZip} onChange={handleChange} />
        </label>
        <Button text="Purchase" buttonClick={this.props.buttonClick}/>
      </form>
    )
  }
}

ReactDOM.render( < App />, document.getElementById('root'));