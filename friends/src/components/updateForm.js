import React from 'react';

import './addForm.css';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: this.props.activeFriend
    };
  }

  handleChange = e => {
    e.persist();

    this.setState( prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: e.target.value
      }

    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.updateFriend(this.state.friend)

    
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-form">
        <h1>Update Friend</h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          value={this.state.friend ? this.state.friend.name : ''}
        />

        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={this.handleChange}
          value={this.state.friend ? this.state.friend.age : ''}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.friend ? this.state.friend.email : ''}
        />

        <button onClick={this.handleSubmit} > Update </button>
      </form>
    );
  }
}

export default UpdateForm;
