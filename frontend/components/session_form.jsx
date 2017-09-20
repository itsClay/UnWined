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
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  renderSignupOrLogin() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Login</Link>;
    }
  }

  update(field) {
    return (e) => {
      this.setState( { [field]: e.target.value } );
    };
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
      <div>
        {this.renderSignupOrLogin()}
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label> Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}></input>
          </label>
          <label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}></input>
          </label>
          <input type="submit" value={this.pro}/>
        </form>
      </div>
    );
  }
}

export default SessionForm;
