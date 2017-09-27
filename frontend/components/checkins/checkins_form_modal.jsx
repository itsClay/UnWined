import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Rating from 'react-rating';
// import * as FA from '../../../node_modules/font-awesome/css/font-awesome.min.css';

class CheckinsFormModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      comment: "",
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if(this.props.formType === 'edit') {
      this.setState( this.props.checkinToChange );

    }
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  update(field) {
    return (e) => {
      this.setState( { [field]: e.target.value } );
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let action = (this.props.formType === 'edit') ? this.props.updateCheckin : this.props.createCheckin;
    action({id: this.props.checkin.id,
            rating:`${this.state.rating}`,
            comment:`${this.state.comment}`,
            wine_id: this.props.wine.id,
            user_id: this.props.currentUser.id })
      .then( () => this.closeModal() );
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

  render() {
    return(
      <div>
        <button onClick={this.openModal}>Check-in</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>

            <h2>Checkin!</h2>
            <form onSubmit={this.handleSubmit}>
              <label>Rate it!</label>
              <Rating
                onChange={ (rating) => this.setState({rating: rating}) }
                value={this.state.rating}
              />
              <div className="comment">
                <label>Comment</label>
                <textarea
                  onChange={this.update('comment')}
                  value={this.state.comment}>
                </textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
        </Modal>
      </div>
    );
  }
}

export default CheckinsFormModal;
