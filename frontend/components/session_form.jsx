import React from 'react';
import { Link } from 'react-router-dom';

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

  guestLogin(e){
    this.setState({ username: 'Guest', password: '123456' });
    this.handleSubmit(e);
  }

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map((e, idx) => <li key={`error-${idx}`}>{ e }</li>)
        }
      </ul>
    );
  }

  render(){
    return (
      <div className="session-container">

        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label> Username
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
          <input
            type="submit"
            className="submit-btn"
            value={this.renderSignupOrLogin()}/>
        </form>
        <a
          className="guest-link"
          onClick={this.guestLogin}>Guest Login</a>
      </div>
    );
  }
}

export default SessionForm;
