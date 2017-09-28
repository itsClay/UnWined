import React from "react";
import CheckinsIndexItem from '../checkins/checkins_index_item';
import CheckinsFormContainer from '../checkins/checkins_form_container';
import { Link, withRoute } from "react-router-dom";
import { ProtectedRoute } from "../../util/route_util";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: null};
    this.componentStateSetup = this.componentStateSetup.bind(this);
  }

  componentStateSetup(currentPropsToChange){
    
  }
  //we are calling this in 2 places because if a user navigates from
  // one user show page to another we need to refetch
  componentWillMount() {
    if(this.props.match.path === '/profile') {
      this.props.fetchUser(this.props.currentUser.id).then(
        () => this.setState({loading: false})
      );
      this.setState({loading: true});
    } else {
      this.props.fetchUser(this.props.match.params.userId).then(
        () => this.setState({loading: false})
      );
      this.setState({loading: true});
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.path === newProps.match.path){
      return;
    }
    if(newProps.match.path === '/profile') {
      this.props.fetchUser(this.props.currentUser.id).then(
        () => this.setState({loading: false})
      );
      this.setState({loading: true});
    } else {
      this.props.fetchUser(newProps.match.params.userId).then(
        () => this.setState({loading: false})
      );
      this.setState({loading: true});
    }
  }

  renderCheckinsOrNiceMessage() {
    if(this.state.loading || this.props.user === undefined) {
      return (
        <h1>...Loading</h1>
      );
    }
    if (this.props.checkins.length === 0) {
      console.log("no checkins yet...");
      return (
        <div className="checkin-filler">
          <h1>You have no reviews yet!</h1>
        </div>
      );
    } else {
      console.log("checkinrender#props: ", this.props);
      console.log("", this.props.checkins);
      return (

        this.props.checkins.map( (checkin) => (
          <div key={`checkin-${checkin.id}`} className="user-checkin">
            <div className="right-align input-btn">
              { this.props.currentUser.id === checkin.user_id ?
                <CheckinsFormContainer
                  formType="edit"
                  checkinToChange={checkin}
                  wine={ checkin.wine }
                />
                : null
              }
            </div>
            <CheckinsIndexItem
              checkin={checkin}
            />
          </div>
        )).reverse()
      );
    }
  }


  renderPersonalOrOtherUserMessage(){
    let userMessage;
    if (this.props.match.path === '/profile') {
      userMessage = "Your recent Checkins";
    } else {
      console.log(this.props);
      if(this.props.user){
        userMessage = `${this.props.user.username}s recent Checkins`;
      }
    }
    return userMessage;
  }

  render() {
    return (
      <div className="checkin-wrapper">
        <div className="checkin-container">
          <div className="checkin-header">
            <span>{this.renderPersonalOrOtherUserMessage()}</span>
          </div>
          <div className="checkin-content">
            {
              this.renderCheckinsOrNiceMessage()
            }
          </div>
        </div>
      </div>

    );
  }
}
export default UserProfile;
