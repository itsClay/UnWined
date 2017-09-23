import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderSignupOrLogin = this.renderSignupOrLogin.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderSignupOrLogin() {
    return (this.props.formType === 'login') ? "Login" : "Sign Up";
  }

  update(field) {
    return (e) => {
      this.setState( { [field]: e.target.value } );
    };
  }

  guestLogin() {
    this.props.login({ username: 'Guest', password: '123456' });
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {
          this.props.errors.map((e, idx) => <li key={`error-${idx}`}>{ e }</li>)
        }
      </ul>
    );
  }

  render(){
    return (
      <div className="session-container">

        <form onSubmit={this.handleSubmit}>
          <h1>{this.renderSignupOrLogin()}</h1>
          <div>{this.renderErrors()}</div>
          <label> Email
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}></input>
          </label>
          <label> Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}></input>
          </label>

          <button
            type="submit"
            className="submit-btn"
            >{this.renderSignupOrLogin()}
          </button>
        </form>
        <button
          className="submit-btn"
          onClick={this.guestLogin}>Guest Login
        </button>
      </div>
    );
  }
}

export default withRouter(SessionForm);
